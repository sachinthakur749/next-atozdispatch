import { Button, Modal } from "antd";
import React, { useRef, useState } from "react";
import { TiTimes } from "react-icons/ti";
import SignatureCanvas from "react-signature-canvas";
import { IoMdCloudUpload } from "react-icons/io";
import { IoIosSave } from "react-icons/io";

const AgreementModal = ({
  open,
  handleClose,
  agreementInfo,
  handleSubmission,
  setSignatureImg,
  setFormData,
  formData,
  setIsAgreed,
  isAgreed,
}) => {
  const sigCanvas = useRef({});
  const inputRef = useRef();
  const [signature, setSignature] = useState(null);
  const [isImageInput, setIsImageInput] = useState(false);
  const [errorState, setErrorState] = useState({
    isError: false,
    errorMessage: "",
  });

  const handleSignImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignature(reader.result);
        setIsImageInput(true);
        setErrorState({
          isError: false,
          errorMessage: "",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const clear = () => {
    setSignature(null);
    sigCanvas?.current?.clear();
    setErrorState({
      isError: false,
      errorMessage: "",
    });
    setIsImageInput(false);
  };

  const save = () => {
    setErrorState({
      isError: false,
      errorMessage: "",
    });
    const signatureData = sigCanvas?.current
      ?.getTrimmedCanvas()
      ?.toDataURL("image/png");
    setSignature(signatureData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signature) {
      setErrorState({
        isError: true,
        errorMessage: "Please provide a valid signature",
      });
      return;
    }
    setIsAgreed(true);
    setSignatureImg(signature);

    const updatedFormData = {
      ...formData,
      signature: signature,
    };

    setFormData(updatedFormData);
    handleClose();
    handleSubmission(updatedFormData);
  };

  const getPlanPrice = (plan) => {
    let price;
    switch (plan) {
      case "basic":
        price = "$99";
        break;
      case "standard":
        price = "$149";
        break;
      case "premium":
        price = "$199";
        break;
      default:
        price = "Invalid plan";
    }
    return price;
  };

  return (
    <Modal
      footer={null}
      open={open}
      centered
      width={1200}
      onCancel={handleClose}
    >
      <div className="ag-modal-ctn">
        <h2>Agreement</h2>
        <div style={{ height: "550px", overflowY: "auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <h3 style={{ fontWeight: "bold" }}>
                Subscription Agreement for AtoZ
              </h3>
              <p>
                This Subscription Agreement is entered into by and between{" "}
                <span className="ag-label-text">{agreementInfo?.name} </span>,
                located at{" "}
                <span className="ag-label-text">
                  {agreementInfo?.address},{agreementInfo?.country}
                </span>{" "}
                , and <span className="ag-label-text">Anil Shrestha</span>{" "}
                (“Service Provider”), regarding the product AtoZ Dispatch as of{" "}
                {getCurrentDate()}.
              </p>
            </div>

            <div>
              <h3 style={{ fontWeight: "bold" }}>WHEREAS</h3>
              <p>
                Client has reviewed the demo of AtoZ Dispatch System {"   "}
                <span style={{ fontWeight: "bold" }}>
                  {agreementInfo?.plan}{" "}
                </span>{" "}
                provided at{" "}
                <a
                  target="_blank"
                  href="https://atozdispatch.com"
                  rel="noreferrer"
                >
                  https://atozdispatch.com
                </a>{" "}
                and has expressed satisfaction with the demo.
              </p>
              <p>Client is ready to pay the monthly fee for the Product.</p>
            </div>

            <div>
              <h3 style={{ fontWeight: "bold" }}>NOW, THEREFORE</h3>
              <p>
                In consideration of the mutual promises and covenants contained
                herein, the parties agree as follows
              </p>
            </div>

            <div>
              <h3 style={{ fontWeight: "bold" }}>Payment Terms</h3>
              <ul>
                <li>
                  Client agrees to pay monthly fee of{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {getPlanPrice(agreementInfo?.plan?.toLowerCase())}
                  </span>{" "}
                  for the use of the product [A to Z {agreementInfo?.plan}{" "}
                  Package ].
                </li>
                <li>
                  Client acknowledges that they are aware of the fees and the
                  services they will receive in return for the payment.
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontWeight: "bold" }}>AUTHORIZATION</h3>
              <ul>
                <li>
                  Client agrees to pay monthly fee of{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {getPlanPrice(agreementInfo?.plan?.toLowerCase())}
                  </span>{" "}
                  for the use of the product [A to Z {agreementInfo?.plan}{" "}
                  Package ].
                </li>

                <li>
                  The client authorizes the payment after 30 days of Free Trial
                  where 7 days of complete set up after complete information
                  delivery from the client and 21 days of the system review.
                </li>

                <li>
                  After 21 days of the review, the client payment method will be
                  automatically charged until canceled and no refund will be
                  available.
                </li>
                <li>
                  The service provider authorizes the delivery of advertised
                  products.
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontWeight: "bold" }}>SERVICE TERMS</h3>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Source Code</strong> : The source code for the
                  application is proprietary and will not be provided to the
                  Client.
                </li>
              </ul>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Branding</strong> : As a white-label product, the
                  branding is not owned by the Client. Only the Logo,
                  Application name and Domain will be of the Client. All the
                  Apps will be under our Company Account.
                </li>
              </ul>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Application Setup</strong> : Setup will commence after
                  the necessary information is provided by the Client and will
                  be completed within 7 days.
                </li>
                <ul>
                  <li>
                    The application’s live status on app stores is subject to
                    their review and verification process, which is outside the
                    control of the Service Provider
                  </li>
                  <li>
                    Requirement To Setup To proceed with the setup of the A to Z
                    Dispatch System, the Client must provide Logo, Business
                    Name, active Stripe Account Details, and DOMAIN Details,
                    including the following:
                  </li>
                  <li>
                    {" "}
                    The Service Provider will integrate the provided Stripe
                    credentials into the application to enable payment
                    processing functionality.{" "}
                    <ol>
                      <li>Publishable Key: pk_</li>
                      <li>Secret Key: sk_</li>
                    </ol>
                  </li>
                  <li>
                    {" "}
                    DOMAIN :
                    <ol>
                      <li>Domain Name: ie abc.com</li>
                      <li>Domain Provider: ie godaddy.com</li>
                      <li>Username and Password: ie email address/password</li>
                    </ol>
                  </li>
                  <li>
                    The Client is responsible for ensuring their Stripe account
                    complies with all applicable terms and conditions set forth
                    by Stripe, as well as any relevant local or international
                    laws regarding payment processing.
                  </li>
                  <li>
                    Separate forms will be provided via email to collect the
                    above information.
                  </li>
                  <li>
                    If Stripe still needs to be set up, you can easily create an
                    account and integrate it with your dispatch system. Follow
                    this guide to get started.
                    <a
                      target="_blank"
                      href="https://www.taxi-webdesign.com/how-to-create-stripe-account-set-up/"
                      rel="noreferrer"
                    >
                      How to Create and Set Up a Stripe Account.
                    </a>{" "}
                  </li>
                </ul>
              </ul>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Delays Due to Non-Compliance: </strong> : The
                  application setup will not commence until the Client submits
                  the required information details. Any delay in providing this
                  information will result in a corresponding delay in the
                  project timeline.
                </li>
              </ul>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Support and Contact</strong>
                  <ul>
                    <li>
                      Ongoing support will be provided, and the Client may
                      <a href="https://calendly.com/coredreams/a-to-z-dispatch-40-min">
                        schedule appointments
                      </a>{" "}
                      for assistance.{" "}
                    </li>
                    <li>
                      A support ticket facility is available via the user admin
                      backend.{" "}
                      <a href="https://coredreamsltd.atlassian.net/servicedesk/customer/portal/4/group/19/create/53">
                        {" "}
                        Support Ticket
                      </a>{" "}
                    </li>
                    <li>
                      Email Id:{" "}
                      <a href="mailito:support@atozdispatch.com">
                        {" "}
                        support@atozdispatch.com
                      </a>
                    </li>
                    <li>WhatsApp: +977 9813366192</li>
                  </ul>
                </li>
              </ul>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Additional Features or Requests:</strong>
                  <ul>
                    <li>
                      Any features or add-ons requested beyond the standard
                      features provided in the A to Z Dispatch system will be
                      treated as extra.
                    </li>
                    <li>
                      These additional requests will be estimated separately and
                      shared with you for approval prior to commencing any work.
                    </li>
                    <li>
                      Default System: Without approval for additional features
                      or add-ons, A to Z Dispatch will remain the default
                      subscribed system as per the original agreement.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontWeight: "bold" }}>Subscription Cancellation</h3>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Cancellation Rights:</strong>
                  <ul>
                    <li>
                      Clients may cancel the subscription at any time before the
                      due date without incurring any penalty.
                    </li>
                    <li>
                      Once the subscription is charged, refunds will not be
                      issued. Cancellation will apply to future billing cycles.
                    </li>
                  </ul>
                </li>
              </ul>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>How to Cancel:</strong>
                  <ul>
                    <li>Clients can request a cancellation by either:</li>
                    <ol>
                      <li>Sending an email to support@atozdispatch.com, or</li>
                      <li>Messaging us directly on WhatsApp.</li>
                    </ol>
                  </ul>
                </li>
              </ul>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Effects of Cancellation:</strong>
                  <ul>
                    <li>
                      The application will be made offline and removed from app
                      stores and Android stores upon cancellation notice.
                    </li>
                    <li>
                      If the subscription remains unpaid, access will be
                      provided for 30 days, after which the application will be
                      offline.
                    </li>
                    <li>
                      Only user data and information will be provided after
                      immediate cancellation to the provided email address and
                      No Source code will be provided in any case.
                    </li>
                    <li>
                      All user data and account information will be deleted 24
                      hours after cancellation.
                    </li>
                  </ul>
                </li>
              </ul>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Reactivation:</strong>
                  <ul>
                    <li>
                      If the Client resubscribes to the product, the application
                      will be set up as a new project with a payment cycle.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontWeight: "bold" }}>SECURITY AND COMPLIANCE</h3>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Data Privacy:</strong>
                  <ul>
                    <li>
                      The Service Provider will comply with applicable data
                      protection laws, including GDPR, CCPA, and other
                      third-party applications relevant regulations.
                    </li>
                  </ul>
                </li>
              </ul>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong> System Uptime and Maintenance:</strong>
                  <ul>
                    <li>
                      {" "}
                      Emergency maintenance may occur to resolve critical
                      issues.
                    </li>
                  </ul>
                </li>
              </ul>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Data Backup and Recovery:</strong>
                  <ul>
                    <li>
                      Regular backups of application data will be conducted
                      every day of UTC 9.
                    </li>
                  </ul>
                </li>
              </ul>
              <ul style={{ margin: "0px" }}>
                <li>
                  {" "}
                  <strong>Privacy Policy:</strong>
                  <ul>
                    <li>
                      Our site collects information like Name, Email, Mobile and
                      Business Address, and other third-party information will
                      be handled by a third-party provider like Stripe, and
                      deletion requests can be made to our team or the client
                      can be deleted from their account.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <div className="">
                <div style={{ display: "flex" }}>
                  <p className="ag-label">Name</p>
                  <p style={{ borderBottom: "1px solid #ec6408" }}>
                    : {agreementInfo?.name}
                  </p>
                </div>
              </div>
              <div className="">
                <div style={{ display: "flex" }}>
                  <p className="ag-label">Phone</p>
                  <p style={{ borderBottom: "1px solid #ec6408" }}>
                    : {agreementInfo?.phone}
                  </p>
                </div>
              </div>
              <div className="">
                <div style={{ display: "flex" }}>
                  <p className="ag-label">E-mail</p>
                  <p style={{ borderBottom: "1px solid #ec6408" }}>
                    : {agreementInfo?.email}
                  </p>
                </div>
              </div>
              <div className="">
                <div style={{ display: "flex" }}>
                  <p className="ag-label">Address</p>
                  <p style={{ borderBottom: "1px solid #ec6408" }}>
                    : {agreementInfo?.address},{agreementInfo?.city},
                    {agreementInfo?.state},{agreementInfo?.country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ag-footer">
            <div>
              <div
                style={{
                  width: "200px",
                  height: "150px",
                  border: "1px dotted rgba(213 206 202)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                {signature ? (
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      // background: "#F0EFEC",
                    }}
                    src={signature}
                    alt=""
                  />
                ) : (
                  <p
                    style={{
                      color: "#ededed",
                      fontSize: "16px",
                      fontWeight: "bolder",
                    }}
                  >
                    No signature found
                  </p>
                )}
              </div>

              <p
                style={{ borderTop: "1px solid #ededed" }}
                className="signature-label"
              >
                (signature preview)
              </p>
            </div>
            <div className="signature-ctn">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                  alignItems: "flex-end",
                  marginTop: "7px",
                  height: "100%",
                }}
              >
                <input
                  onChange={handleSignImage}
                  ref={inputRef}
                  style={{ display: "none" }}
                  type="file"
                />
              </div>
              <div
                style={{
                  width: "200px",
                  // height: "200px",
                  position: "relative",
                }}
              >
                <div>
                  <SignatureCanvas
                    penColor="black"
                    ref={sigCanvas}
                    canvasProps={{
                      width: 200,
                      height: 200,
                      className: "signatureCanvas",
                    }}
                  />

                  {errorState.isError ? (
                    <p className="signature-label">
                      ({errorState.errorMessage})
                    </p>
                  ) : (
                    <p style={{ fontSize: "14px" }} className="signature-label">
                      (Use this signature pad to draw or upload signature)
                    </p>
                  )}
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "-110px",
                    display: "flex",
                    gap: "5px",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <Button
                      onClick={clear}
                      icon={<TiTimes />}
                      style={{ background: "red" }}
                      type="primary"
                    >
                      Clear
                    </Button>
                  </div>

                  <div>
                    <Button
                      onClick={() => inputRef.current.click()}
                      icon={<IoMdCloudUpload />}
                      type="primary"
                    >
                      Upload
                    </Button>
                  </div>

                  {!signature && (
                    <div>
                      <Button
                        onClick={save}
                        icon={<IoIosSave />}
                        style={{ background: "green" }}
                        type="primary"
                      >
                        Save
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* {errorState.isError && (
              <p className="error-message">*{errorState.errorMessage}</p>
            )} */}
            <button
              onClick={handleSubmit}
              className="header-outlined-btn"
              size="small"
              type="submit"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AgreementModal;
