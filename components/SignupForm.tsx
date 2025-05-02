"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { PostMethod } from "@/lib/PostMethod"
import { FullScreenLoader } from "./FullScreenLoader"
import AgreementModal from "./AgrementModal"
import ThankYouModal from "./ThankYouModal"
import UploadButton from "./UploadButton"
import Link from "next/link"

interface ColorPickerProps {
  control: any
  name: string
}

interface CardTokenInfo {
  card_token: string | null
  card_id: string | null
}

interface FormData {
  name: string
  email: string
  business_name: string
  address: string
  city: string
  state: string
  country: string
  mobile: string
  plan: string
  primary_color: string
  signature?: string | null
  business_logo: any[]
  card_id?: string | null
  card_token?: string | null
  basic_package_type?: string[]
  domain_name?: string
  website_name?: string
  app_name?: string
}

interface AgreementInfo {
  name: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  country: string
  plan: string
  basic_type?: string[]
}

const ColorPicker: React.FC<ColorPickerProps> = ({ control, name }) => {
  const colors = ["#00A9E0", "#DC143C", "#FF6F61", "#32CD32", "#FF4500"]

  const [selectedColor, setSelectedColor] = useState<string>(" ")

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="color-picker-wrapper">
          <div className="compact-color-grid">
            {colors.map((color) => (
              <div
                key={color}
                className={`compact-color-card ${field.value === color ? "selected" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => {
                  setSelectedColor(color)
                  field.onChange(color)
                }}
              />
            ))}

            <div className="compact-color-card custom-color-picker gradient-bg">
              <input
                type="color"
                value={field.value || ""}
                onChange={(e) => {
                  const newColor = e.target.value
                  setSelectedColor(newColor)
                  field.onChange(newColor)
                }}
                onClick={(e) => e.stopPropagation()}
              />
              <span>+</span>
            </div>
          </div>
          <div className="compact-color-preview" style={{ backgroundColor: selectedColor }} />
        </div>
      )}
    />
  )
}

const SignupForm: React.FC = () => {
  // Stripe setup
  const stripe = useStripe()
  const elements = useElements()
  const apiEndpoint = process.env.NEXT_PUBLIC_API_URL

  // Component states
  const [open, setOpen] = useState<boolean>(false)
  const [openThankYou, setOpenThankYou] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isAgreed, setIsAgreed] = useState<boolean>(false)
  const [isPending, setIsPending] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [signatureImg, setSignatureImg] = useState<string | null>(null)
  const [agreementID, setAgreementID] = useState<string | null>(null)
  const [cardTokenInfo, setCardTokenInfo] = useState<CardTokenInfo>({
    card_token: null,
    card_id: null,
  })
  const [basicPackageType, setBasicPackageType] = useState<string[]>(["booking-iframe"]) // Default selected
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    business_name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    mobile: "",
    plan: "Standard",
    primary_color: "",
    signature: signatureImg,
    business_logo: [],
    card_id: null,
    card_token: null,
    basic_package_type: [],
  })
  const [agreementInfo, setAgreementInfo] = useState<AgreementInfo>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    plan: "",
  })

  const defaultValues: FormData = {
    name: "",
    email: "",
    business_name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    mobile: "",
    plan: "Standard",
    primary_color: "",
    signature: "",
    business_logo: [],
    basic_package_type: [],
  }

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({ defaultValues })

  useEffect(() => {
    setValue("plan", "Standard")
    // setValue("primary_color", " ");
  }, [setValue])

  const handleClose = (): void => setOpen(false)
  const handleThankClose = (): void => setOpenThankYou(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => setIsChecked(event.target.checked)

  const prepareFormData = (data: FormData): FormData => {
    const formData = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      if (value !== "" && value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((item, ind) => {
            formData.append(`${key}[${ind}]`, item)
          })
        } else {
          formData.append(key, value as string)
        }
      }
    })

    return formData as unknown as FormData
  }

  const createCardToken = async (): Promise<any> => {
    if (!stripe || !elements) {
      throw new Error("Stripe or Elements not initialized")
    }

    const cardElement = elements.getElement(CardElement)
    if (!cardElement) {
      throw new Error("Card Element not found")
    }

    const { error, token } = await stripe.createToken(cardElement)
    if (error) throw new Error(error.message)
    if (token) {
      setCardTokenInfo({ card_token: token.id, card_id: token.card.id })
      setFormData((prev) => ({
        ...prev,
        card_token: token.id,
        card_id: token.card.id,
      }))
      return token
    }
  }

  const onSubmit = async (data: FormData): Promise<void> => {
    setError("")
    console.log(data)
    try {
      const updatedData = {
        ...data,
        signature: signatureImg && signatureImg,
        ...(data?.domain_name !== "" && { domain_name: data?.domain_name }),
        ...(data?.plan === "Basic" && { basic_package_type: basicPackageType }),
        ...(data?.primary_color && { primary_color: data?.primary_color }),
      }
      setFormData(updatedData)
      setAgreementInfo({
        name: updatedData.name,
        phone: updatedData.mobile,
        email: updatedData.email,
        address: updatedData.country,
        city: updatedData.city,
        state: updatedData.state,
        country: updatedData.country,
        plan: updatedData.plan,
        basic_type: updatedData.basic_package_type,
      })

      if (!cardTokenInfo.card_id && !cardTokenInfo.card_token) {
        await createCardToken()
      }

      if (!isAgreed) {
        setOpen(true)
        return
      }

      setIsPending(true)
      const formDataToSend = prepareFormData(updatedData)
        ; (formDataToSend as any).append("card_token", cardTokenInfo.card_token)
        ; (formDataToSend as any).append("card_id", cardTokenInfo.card_id)

      const response = await PostMethod(`${apiEndpoint}/register`, formDataToSend)
      console.log("Response:", response)
      setAgreementID(response?.data?.agreement_id)
      setIsPending(false)
      setOpenThankYou(true)
    } catch (error: any) {
      console.error(error)
      setError(error.response?.data?.message || error?.message || "An error occurred")
      setIsPending(false)
    }
  }

  const handleFinalSubmit = async (data: FormData): Promise<void> => {
    try {
      setIsPending(true)
      const dataToSend = prepareFormData(data)
      const response = await PostMethod(`${apiEndpoint}/register`, dataToSend)
      console.log("Response:", response)
      setIsPending(false)
      setAgreementID(response?.data?.agreement_id)
      setOpenThankYou(true)
    } catch (error: any) {
      console.error(error)
      setError(error.response?.data?.message || "An error occurred")
      setIsPending(false)
    }
  }

  const CARD_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "20px",
        "::placeholder": { color: "#aab7c4" },
        padding: "10px",
        border: "1px solid #000",
        borderRadius: "4px",
        backgroundColor: "#fff",
      },
      invalid: { color: "#fa755a", iconColor: "#fa755a" },
    },
    hidePostalCode: true,
    iconStyle: "solid" as "solid",
  }

  const handleBasicToggle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target

    setBasicPackageType((prev) => {
      if (checked) {
        return prev.length < 3 ? [...prev, name] : prev
      } else {
        return prev.length > 1 ? prev.filter((item) => item !== name) : prev
      }
    })
  }

  return (
    <div className="signupform-wrapper">
      <div className="custom-alert">
        <h3>30 DAYS FREE TRIAL</h3>
        <p>* You won't be charged Until Trial Period</p>
      </div>
      <form className="input-group-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="package-plan">
          <label htmlFor="name" style={{ padding: "0px 0px 4px 0px" }}>
            Choose Your Package
          </label>
          <Controller
            name="plan"
            control={control}
            rules={{ required: "Please select a package plan" }}
            render={({ field }) => (
              <div className="plan1-ctn">
                <div
                  className="card"
                  onClick={() => field.onChange("Basic")}
                  style={{
                    border: field.value === "Basic" ? "2px solid green" : "1px solid #ccc",
                  }}
                >
                  <input
                    type="radio"
                    value="Basic"
                    checked={field.value === "Basic"}
                    onChange={() => field.onChange("Basic")}
                    style={{ display: "none" }}
                  />
                  <label style={{ fontSize: "15px", fontWeight: "bold", textAlign: "center" }}>Basic</label>
                  <div style={{ fontSize: "22px", fontWeight: "800", textAlign: "center" }}>
                    $99 <br />
                    <span
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        padding: "0px",
                        fontWeight: "normal",
                      }}
                    >
                      /month
                    </span>
                  </div>
                </div>
                <div
                  className="card"
                  onClick={() => field.onChange("Standard")}
                  style={{
                    border: field.value === "Standard" ? "2px solid green" : "1px solid #ccc",
                  }}
                >
                  <input
                    type="radio"
                    value="Standard"
                    checked={field.value === "Standard"}
                    onChange={() => field.onChange("Standard")}
                    style={{ display: "none" }}
                  />
                  <label style={{ fontSize: "15px", fontWeight: "bold", textAlign: "center" }}>Standard</label>
                  <div style={{ fontSize: "22px", fontWeight: "800", textAlign: "center" }}>
                    $149 <br />
                    <span
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        padding: "0px",
                        fontWeight: "normal",
                      }}
                    >
                      /month
                    </span>
                  </div>
                </div>
                <div
                  className="card"
                  onClick={() => field.onChange("Premium")}
                  style={{
                    border: field.value === "Premium" ? "2px solid green" : "1px solid #ccc",
                  }}
                >
                  <input
                    type="radio"
                    value="Premium"
                    checked={field.value === "Premium"}
                    onChange={() => field.onChange("Premium")}
                    style={{ display: "none" }}
                  />
                  <label style={{ fontSize: "15px", fontWeight: "bold", textAlign: "center" }}>Premium</label>
                  <div style={{ fontSize: "22px", fontWeight: "800", textAlign: "center" }}>
                    $199 <br />
                    <span
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        padding: "0px",
                        fontWeight: "normal",
                      }}
                    >
                      /month
                    </span>
                  </div>
                </div>
              </div>
            )}
          />

          {watch("plan") === "Basic" && (
            <div style={{ marginTop: "20px" }} className="form-group">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  style={{ width: "max-content" }}
                  type="checkbox"
                  name="booking-iframe"
                  id="iframe"
                  checked={basicPackageType.includes("booking-iframe")}
                  onChange={handleBasicToggle}
                />
                <label style={{ fontWeight: "400" }} htmlFor="">
                  <span style={{ fontWeight: "700" }}>Booking Iframe</span> – Embed the booking form on your website
                  using an iframe.
                </label>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  style={{ width: "max-content" }}
                  type="checkbox"
                  name="booking-website"
                  id="website"
                  checked={basicPackageType.includes("booking-website")}
                  onChange={handleBasicToggle}
                />
                <label style={{ fontWeight: "400" }} htmlFor="">
                  <span style={{ fontWeight: "700" }}> Website</span> – Includes both the iframe and a standalone web
                  booking page.
                </label>
              </div>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="business_logo">Payment Information</label>
          <div
            style={{
              border: "1px solid #d1d0d0",
              padding: "10px",
              borderRadius: "7px",
            }}
          >
            <CardElement options={CARD_OPTIONS} />
          </div>
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Full Name is required" }}
            render={({ field }) => (
              <input
                style={{
                  border: errors.name ? "1px solid rgba(255, 0, 0, 0.712)" : "",
                }}
                type="text"
                placeholder="Name"
                {...field}
              />
            )}
          />
          {errors.name && <p className="error-message">*{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="mobile">Phone</label>
          <Controller
            name="mobile"
            control={control}
            rules={{ required: "Phone Number is required" }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={"us"}
                value={field.value}
                onChange={(phone) => field.onChange("+" + phone)}
                containerClass={`w-full ${errors.mobile ? "border-red-500 border-[2px]" : "border-[#cccccc] border-[1px]"
                  }`}
                inputClass="bg-light_gray mt-[5px] rounded-[4px]"
              />
            )}
          />
          {errors.mobile && <p className="error-message">*{errors.mobile.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <input
                type="email"
                style={{
                  border: errors.email ? "1px solid rgba(255, 0, 0, 0.712)" : "",
                }}
                placeholder="johndoe@example.com"
                {...field}
              />
            )}
          />
          {errors.email && <p className="error-message">*{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="business_name">Business Name</label>
          <Controller
            name="business_name"
            control={control}
            rules={{ required: "Business Name is required" }}
            render={({ field }) => (
              <input
                style={{
                  border: errors.business_name ? "1px solid rgba(255, 0, 0, 0.712)" : "",
                }}
                type="text"
                placeholder="ABC Company"
                {...field}
              />
            )}
          />
          {errors.business_name && <p className="error-message">*{errors.business_name.message}</p>}
        </div>

        <div>
          <label htmlFor="business_address">Address</label>
          <Controller
            name="address"
            control={control}
            rules={{ required: "Business Address is required" }}
            render={({ field }) => (
              <input
                style={{
                  border: errors.address ? "1px solid rgba(255, 0, 0, 0.712)" : "",
                }}
                type="text"
                placeholder="Business Address"
                {...field}
              />
            )}
          />
          {errors.address && <p className="error-message">*{errors.address.message}</p>}
        </div>

        <div>
          <label htmlFor="business_name">City</label>
          <Controller
            name="city"
            control={control}
            rules={{ required: "City is required" }}
            render={({ field }) => (
              <input
                style={{
                  border: errors.city ? "1px solid rgba(255, 0, 0, 0.712)" : "",
                }}
                type="text"
                placeholder="city"
                {...field}
              />
            )}
          />
          {errors.city && <p className="error-message">*{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="business_name">State</label>
          <Controller
            name="state"
            control={control}
            rules={{ required: "State is required" }}
            render={({ field }) => (
              <input
                style={{
                  border: errors.state ? "1px solid rgba(255, 0, 0, 0.712)" : "",
                }}
                type="text"
                placeholder="State"
                {...field}
              />
            )}
          />
          {errors.state && <p className="error-message">*{errors.state.message}</p>}
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <Controller
            name="country"
            control={control}
            rules={{ required: "Country is required" }}
            render={({ field }) => (
              <input
                style={{
                  border: errors.country ? "1px solid rgba(255, 0, 0, 0.712)" : "",
                }}
                type="text"
                placeholder="Country"
                {...field}
              />
            )}
          />
          {errors.country && <p className="error-message">*{errors.country.message}</p>}
        </div>

        {basicPackageType?.includes("booking-website") && (
          <div>
            <label htmlFor="domain_name">
              Domain Name
              <span style={{ fontWeight: "500" }}>(optional)</span>{" "}
            </label>
            <Controller
              name="domain_name"
              control={control}
              render={({ field }) => (
                <input
                  style={{
                    border: errors.domain_name ? "1px solid rgba(255, 0, 0, 0.712)" : "",
                  }}
                  type="text"
                  placeholder="Domain Name"
                  {...field}
                />
              )}
            />
            {errors.domain_name && <p className="error-message">*{errors.domain_name.message}</p>}
          </div>
        )}

        <div className="branding-section">
          <h5 className="signup-h5 !w-full ">Get Your Own Branding</h5>
          <p className="notes" style={{ textAlign: "center" }}>
            To ensure AtoZ Dispatch is customized for your business.
          </p>
          <div className="form-field">
            <label htmlFor="business_logo">
              Business Logo <span className="optional">(optional)</span>
            </label>
            <Controller name="business_logo" control={control} render={({ field }) => <UploadButton {...field} />} />
            {errors.business_logo && <p className="error-message">*{errors.business_logo.message}</p>}
          </div>

          <div className="form-field">
            <label>
              Primary Color <span className="optional">(optional)</span>
            </label>
            <ColorPicker control={control} name="primary_color" />
          </div>

          <div className="mt-[30px]">
            <label htmlFor="website_name">
              Website Name
              <span style={{ fontWeight: "500" }}>(optional)</span>{" "}
            </label>
            <Controller
              name="website_name"
              control={control}
              render={({ field }) => (
                <input
                  style={{
                    border: errors.website_name ? "1px solid rgba(255, 0, 0, 0.712)" : "",
                  }}
                  type="text"
                  placeholder="Website Name"
                  {...field}
                />
              )}
            />
            {errors.website_name && <p className="error-message">*{errors.website_name.message}</p>}
          </div>

          <div className="mt-4">
            <label htmlFor="app_name">
              App Name
              <span style={{ fontWeight: "500" }}>(optional)</span>{" "}
            </label>
            <Controller
              name="app_name"
              control={control}
              render={({ field }) => (
                <input
                  style={{
                    border: errors.app_name ? "1px solid rgba(255, 0, 0, 0.712)" : "",
                  }}
                  type="text"
                  placeholder="App Name"
                  {...field}
                />
              )}
            />
            {errors.app_name && <p className="error-message">*{errors.app_name.message}</p>}
          </div>
        </div>

        <div className="branding-section">
          <div
            className="notes"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h5 className="signup-h5 !w-full">Get paid to your own account.</h5>
            <img
              width={200}
              src="/images/credit-card.png"
              alt="credit-card"
              style={{
                margin: "0",
              }}
            />
          </div>
        </div>

        <div className="terms">
          <div>
            <input onChange={handleChange} type="checkbox" />
          </div>
          <p>
            I agree to{" "}
            <Link target="_blank" href={"/privacy-policy"}>
              Privacy Policy
            </Link>{" "}
            &{" "}
            <Link target="_blank" href={"/terms-of-service"}>
              Terms of Services
            </Link>
          </p>
        </div>

        {error && <p style={{ color: "red", fontStyle: "italic", fontSize: "15px" }}>*{error}</p>}

        <button
          style={{
            textAlign: "center",
            justifyContent: "center",
            opacity: !isChecked ? "0.5" : "1",
          }}
          className="header-outlined-btn"
          disabled={!isChecked || isPending}
          type="submit"
        >
          Start Now
        </button>
      </form>

      <AgreementModal
        agreementInfo={agreementInfo}
        setIsAgreed={setIsAgreed}
        formData={formData}
        setFormData={setFormData}
        isAgreed={isAgreed}
        open={open}
        handleClose={handleClose}
        setSignatureImg={setSignatureImg}
        handleSubmission={handleFinalSubmit}
      />

      <ThankYouModal
        info={agreementInfo}
        open={openThankYou}
        agreementID={agreementID}
        handleClose={handleThankClose}
      />

      <div>
        <FullScreenLoader isLoading={isPending} />
      </div>
    </div>
  )
}

export default SignupForm
