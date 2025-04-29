"use client";

import React, { useState, useRef, useEffect } from "react";

const ZohoCRMForm = () => {
  const [formData, setFormData] = useState({
    Company: "",
    "Last Name": "",
    Phone: "",
    Email: "",
    LEADCF9: "Basic- Web Package- $99/Month",
    LEADCF116: "",
    LEADCF116hour: "09",
    LEADCF116minute: "00",
    LEADCF116ampm: "AM",
    LEADCF11: "-None-",
    LEADCF15: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Load Zoho SalesIQ script if needed
    const zohoScript = document.createElement("script");
    zohoScript.type = "text/javascript";
    zohoScript.id = "zsiqscript";
    zohoScript.defer = true;
    zohoScript.src = "https://salesiq.zoho.com/widget";
    document.body.appendChild(zohoScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(zohoScript);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "Last Name",
      "Email",
      "Phone",
      "LEADCF9",
      "LEADCF116",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = "This field is required";
      }
    });

    if (formData["LEADCF9"] === "-None-") {
      newErrors["LEADCF9"] = "Please select a package";
    }

    if (formData.Email && !validateEmail(formData.Email)) {
      newErrors.Email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // if (typeof grecaptcha === "undefined" || !grecaptcha.getResponse()) {
    //   setErrors((prev) => ({
    //     ...prev,
    //     recaptcha: "Please complete the reCAPTCHA",
    //   }));
    //   return;
    // }

    setIsSubmitting(true);

    // Prepare the form data for submission
    const form = new FormData();
    form.append(
      "xnQsjsdp",
      "6fad973824b63a3c72de7661d1670e660cea8cea8045d0b5a3f065b12d7bb578"
    );
    form.append("zc_gad", "");
    form.append(
      "xmIwtLD",
      "3b78cd23adce977394970e34a863d0dd25e81334df39beabb5f8dff8cf8750a2e7ad88c7228fd339fd55d887b889b3c7"
    );
    form.append("actionType", "TGVhZHM=");
    form.append("returnURL", "null");

    // Add form fields
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    // Add date/time fields
    const dateTimeStr = `${formData.LEADCF116} ${formData.LEADCF116hour}:${formData.LEADCF116minute} ${formData.LEADCF116ampm}`;
    form.append("LEADCF116", dateTimeStr);

    // Submit to Zoho
    fetch("https://crm.zoho.com/crm/WebToLeadForm", {
      method: "POST",
      body: form,
      mode: "no-cors",
    })
      .then(() => {
        alert("Form submitted successfully!");
        // Reset form
        setFormData({
          Company: "",
          "Last Name": "",
          Phone: "",
          Email: "",
          LEADCF9: "Basic- Web Package- $99/Month",
          LEADCF116: "",
          LEADCF116hour: "09",
          LEADCF116minute: "00",
          LEADCF116ampm: "AM",
          LEADCF11: "-None-",
          LEADCF15: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const onRecaptchaChange = (response) => {
    if (response) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.recaptcha;
        return newErrors;
      });
    }
  };

  return (
    <div
      id="crmWebToEntityForm"
      className="zcwf_lblLeft crmWebToEntityForm"
      style={{
        backgroundColor: "white",
        color: "black",
        maxWidth: "600px",
        fontFamily: '"Segoe UI", Roboto, sans-serif',
        padding: "2rem",
        margin: "0 auto",
        borderRadius: "8px",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <form
        id="webform2806704000051285001"
        ref={formRef}
        name="WebToLeads2806704000051285001"
        onSubmit={handleSubmit}
      >
        {/* Hidden inputs */}
        <input
          type="text"
          style={{ display: "none" }}
          name="xnQsjsdp"
          value="6fad973824b63a3c72de7661d1670e660cea8cea8045d0b5a3f065b12d7bb578"
          readOnly
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" readOnly />
        <input
          type="text"
          style={{ display: "none" }}
          name="xmIwtLD"
          value="3b78cd23adce977394970e34a863d0dd25e81334df39beabb5f8dff8cf8750a2e7ad88c7228fd339fd55d887b889b3c7"
          readOnly
        />
        <input
          type="text"
          style={{ display: "none" }}
          name="actionType"
          value="TGVhZHM="
          readOnly
        />
        <input
          type="text"
          style={{ display: "none" }}
          name="returnURL"
          value="null"
          readOnly
        />

        {/* Form Fields */}
        <div
          className="zcwf_row"
          style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap" }}
        >
          <div
            className="zcwf_col_lab"
            style={{
              width: "30%",
              paddingRight: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "500",
              fontSize: "0.875rem",
            }}
          >
            <label htmlFor="Company">Company</label>
          </div>
          <div className="zcwf_col_fld" style={{ width: "70%" }}>
            <input
              type="text"
              id="Company"
              name="Company"
              maxLength="200"
              placeholder="Your company name"
              value={formData.Company}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "0.875rem",
                transition: "all 0.2s ease",
              }}
            />
          </div>
        </div>

        <div
          className="zcwf_row"
          style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap" }}
        >
          <div
            className="zcwf_col_lab"
            style={{
              width: "30%",
              paddingRight: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "500",
              fontSize: "0.875rem",
            }}
          >
            <label
              htmlFor="Last_Name"
              className="required-field"
              style={{ position: "relative" }}
            >
              Full Name
              <span style={{ color: "#f72585", marginLeft: "4px" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld" style={{ width: "70%" }}>
            <input
              type="text"
              id="Last_Name"
              name="Last Name"
              maxLength="80"
              required
              placeholder="John Doe"
              value={formData["Last Name"]}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: errors["Last Name"]
                  ? "1px solid #f72585"
                  : "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "0.875rem",
                transition: "all 0.2s ease",
              }}
            />
            {errors["Last Name"] && (
              <div
                style={{
                  color: "#f72585",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem",
                }}
              >
                {errors["Last Name"]}
              </div>
            )}
          </div>
        </div>

        <div
          className="zcwf_row"
          style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap" }}
        >
          <div
            className="zcwf_col_lab"
            style={{
              width: "30%",
              paddingRight: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "500",
              fontSize: "0.875rem",
            }}
          >
            <label
              htmlFor="Phone"
              className="required-field"
              style={{ position: "relative" }}
            >
              Mobile
              <span style={{ color: "#f72585", marginLeft: "4px" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld" style={{ width: "70%" }}>
            <input
              type="tel"
              id="Phone"
              name="Phone"
              maxLength="30"
              required
              placeholder="+1 (123) 456-7890"
              value={formData.Phone}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: errors.Phone
                  ? "1px solid #f72585"
                  : "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "0.875rem",
                transition: "all 0.2s ease",
              }}
            />
            {errors.Phone && (
              <div
                style={{
                  color: "#f72585",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem",
                }}
              >
                {errors.Phone}
              </div>
            )}
          </div>
        </div>

        <div
          className="zcwf_row"
          style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap" }}
        >
          <div
            className="zcwf_col_lab"
            style={{
              width: "30%",
              paddingRight: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "500",
              fontSize: "0.875rem",
            }}
          >
            <label
              htmlFor="Email"
              className="required-field"
              style={{ position: "relative" }}
            >
              Email
              <span style={{ color: "#f72585", marginLeft: "4px" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld" style={{ width: "70%" }}>
            <input
              type="email"
              id="Email"
              name="Email"
              maxLength="100"
              required
              placeholder="your.email@example.com"
              value={formData.Email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: errors.Email
                  ? "1px solid #f72585"
                  : "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "0.875rem",
                transition: "all 0.2s ease",
              }}
            />
            {errors.Email && (
              <div
                style={{
                  color: "#f72585",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem",
                }}
              >
                {errors.Email}
              </div>
            )}
          </div>
        </div>

        <div
          className="zcwf_row"
          style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap" }}
        >
          <div
            className="zcwf_col_lab"
            style={{
              width: "30%",
              paddingRight: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "500",
              fontSize: "0.875rem",
            }}
          >
            <label
              htmlFor="LEADCF9"
              className="required-field"
              style={{ position: "relative" }}
            >
              Package Type
              <span style={{ color: "#f72585", marginLeft: "4px" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld" style={{ width: "70%" }}>
            <select
              className="zcwf_col_fld_slt"
              id="LEADCF9"
              name="LEADCF9"
              required
              value={formData.LEADCF9}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: errors.LEADCF9
                  ? "1px solid #f72585"
                  : "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "0.875rem",
                transition: "all 0.2s ease",
                appearance: "none",
                backgroundImage:
                  "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1rem",
              }}
            >
              <option value="-None-">Select a package</option>
              <option value="Basic- Web Package- $99/Month">
                Basic - Web Package - $99/Month
              </option>
              <option value="Standard- App Package- $149/Month">
                Standard - App Package - $149/Month
              </option>
              <option value="Premuim- Custom Dispatch Package- $199/Month">
                Premium - Custom Dispatch Package - $199/Month
              </option>
            </select>
            {errors.LEADCF9 && (
              <div
                style={{
                  color: "#f72585",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem",
                }}
              >
                {errors.LEADCF9}
              </div>
            )}
          </div>
        </div>

        <div
          className="zcwf_row"
          style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap" }}
        >
          <div
            className="zcwf_col_lab"
            style={{
              width: "30%",
              paddingRight: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "500",
              fontSize: "0.875rem",
            }}
          >
            <label
              htmlFor="LEADCF116"
              className="required-field"
              style={{ position: "relative" }}
            >
              Start Date/Time for Demo Session
              <span style={{ color: "#f72585", marginLeft: "4px" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld" style={{ width: "70%" }}>
            <input
              type="date"
              id="LEADCF116"
              name="LEADCF116"
              maxLength="120"
              required
              value={formData.LEADCF116}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: errors.LEADCF116
                  ? "1px solid #f72585"
                  : "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "0.875rem",
                transition: "all 0.2s ease",
              }}
            />
            {errors.LEADCF116 && (
              <div
                style={{
                  color: "#f72585",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem",
                }}
              >
                {errors.LEADCF116}
              </div>
            )}

            <div
              className="date-time-container"
              style={{
                marginTop: "0.5rem",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <select
                name="LEADCF116hour"
                aria-label="Hour"
                value={formData.LEADCF116hour}
                onChange={handleChange}
                style={{
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.875rem",
                }}
              >
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <span>:</span>
              <select
                name="LEADCF116minute"
                aria-label="Minute"
                value={formData.LEADCF116minute}
                onChange={handleChange}
                style={{
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.875rem",
                }}
              >
                <option value="00">00</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </select>
              <select
                name="LEADCF116ampm"
                aria-label="AM/PM"
                value={formData.LEADCF116ampm}
                onChange={handleChange}
                style={{
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.875rem",
                }}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </div>

        <div
          className="zcwf_row"
          style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap" }}
        >
          <div
            className="zcwf_col_lab"
            style={{
              width: "30%",
              paddingRight: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "500",
              fontSize: "0.875rem",
            }}
          >
            <label htmlFor="LEADCF11">How do you Find Us?</label>
          </div>
          <div className="zcwf_col_fld" style={{ width: "70%" }}>
            <select
              className="zcwf_col_fld_slt"
              id="LEADCF11"
              name="LEADCF11"
              value={formData.LEADCF11}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "0.875rem",
                transition: "all 0.2s ease",
                appearance: "none",
                backgroundImage:
                  "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1rem",
              }}
            >
              <option value="-None-">Select an option</option>
              <option value="Google Search">Google Search</option>
              <option value="Referral">Referral</option>
              <option value="Email Campaign">Email Campaign</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div
          className="zcwf_row"
          style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap" }}
        >
          <div
            className="zcwf_col_lab"
            style={{
              width: "30%",
              paddingRight: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "500",
              fontSize: "0.875rem",
            }}
          >
            <label htmlFor="LEADCF15">Message</label>
          </div>
          <div className="zcwf_col_fld" style={{ width: "70%" }}>
            <textarea
              id="LEADCF15"
              name="LEADCF15"
              placeholder="Your message..."
              value={formData.LEADCF15}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "0.875rem",
                transition: "all 0.2s ease",
                minHeight: "100px",
              }}
            />
          </div>
        </div>

        <div
          className="zcwf_row"
          style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap" }}
        >
          <div className="zcwf_col_fld" style={{ width: "100%" }}>
            <div
              className="g-recaptcha"
              data-sitekey="6LdM3F8nAAAAAFM4GEVABBiY3CbsLAiK-ivToqMW"
              data-theme="light"
              data-callback={onRecaptchaChange}
            />
            {errors.recaptcha && (
              <div
                id="recapErr2806704000051285001"
                style={{
                  color: "#f72585",
                  fontSize: "0.875rem",
                  marginTop: "0.5rem",
                }}
              >
                {errors.recaptcha}
              </div>
            )}
          </div>
        </div>

        <div
          className="zcwf_row"
          style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap" }}
        >
          <div className="zcwf_col_fld" style={{ width: "100%" }}>
            <button
              type="submit"
              id="formsubmit"
              className="formsubmit zcwf_button"
              disabled={isSubmitting}
              style={{
                background: "#4361ee",
                color: "white !important",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "6px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s ease",
                opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <button
              type="reset"
              className="zcwf_button"
              name="reset"
              style={{
                background: "white",
                color: "#2d3748 !important",
                border: "1px solid #e2e8f0",
                padding: "0.75rem 1.5rem",
                borderRadius: "6px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s ease",
                marginLeft: "0.75rem",
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ZohoCRMForm;
