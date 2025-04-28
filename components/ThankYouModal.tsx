import { Modal, Spin } from "antd";
import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { getRequest } from "@/lib/APIHelper";
import Link from "next/link";

const ThankYouModal = ({ open, handleClose, info, agreementID }) => {
  const [isPending, setIsPending] = useState(false);
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

  const handleDownload = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      if (!agreementID) return;

      const response = await getRequest(`download-agreement/${agreementID}`, {
        responseType: "blob",
      });
      setIsPending(false);

      const blob = new Blob([response], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const filename = "booking-voucher.pdf";
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // const blob = new Blob([response], { type: "application/pdf" });
      // const url = window.URL.createObjectURL(blob);
      // window.open(url, "_blank");
    } catch (error) {
      setIsPending(false);
    }
  };

  return (
    <>
      <Modal
        footer={null}
        open={open}
        centered
        width={800}
        onCancel={handleClose}
      >
        <div className="thank-you-ctn" style={{ padding: "24px" }}>
          <div style={{ textAlign: "center", margipnBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                gap: "12px",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                  marginBottom: "16px",
                }}
                src="/images/logo.png"
                alt="AtoZ Dispatch Logo"
              />
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "rgb(236,101,9)",
                  marginBottom: "8px",
                }}
              >
                Thank You for Signing Up!
              </h3>
            </div>
            <p style={{ fontSize: "16px", color: "#555", textAlign: "start" }}>
              Welcome aboard! <br /> We're excited to have you as part of the
              AtoZ Dispatch family. Your setup has officially begun and will be
              completed within <b>2 business days.</b>
            </p>
          </div>

          <div
            style={{
              width: "100%",
              marginBottom: "25px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              border: "1px solid #e5e5e5",
            }}
          >
            <div style={{ padding: "15px 20px" }}>
              <h3
                style={{
                  margin: "0 0 15px 0",
                  fontSize: "16px",
                  color: "#333333",
                }}
              >
                Your Subscription Details:
              </h3>
              <ul
                style={{
                  margin: 0,
                  padding: "0 0 0 20px",
                  color: "#555555",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                {/* Date calculation */}
                {(() => {
                  const today = new Date();
                  const endDate = new Date(today);
                  endDate.setDate(today.getDate() + 30);

                  const formatDate = (date) => {
                    return (
                      date.toISOString().split("T")[0] +
                      " " +
                      date.toLocaleTimeString("en-GB", {
                        timeZone: "GMT",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })
                    );
                  };

                  return (
                    <>
                      <li style={{ marginBottom: "8px" }}>
                        <strong>Plan Name:</strong> {info?.plan}
                      </li>
                      <li style={{ marginBottom: "8px" }}>
                        <strong>Free Trial Start Date:</strong>{" "}
                        {formatDate(today)} (GMT)
                      </li>
                      <li style={{ marginBottom: "8px" }}>
                        <strong>Free Trial End Date:</strong>{" "}
                        {formatDate(endDate)} (GMT)
                      </li>
                      <li style={{ marginBottom: "8px" }}>
                        <strong>Recurring Monthly Fee: </strong>$
                        {info?.plan === "Basic"
                          ? 99
                          : info?.plan === "Standard"
                          ? 149
                          : 199}
                      </li>
                      <li style={{ marginBottom: "0" }}>
                        You will be automatically charged on{" "}
                        <strong>
                          your billing date [{formatDate(endDate)} (GMT)]
                        </strong>{" "}
                        unless canceled before the trial ends.
                      </li>
                    </>
                  );
                })()}
              </ul>
            </div>
          </div>

          <div style={{ width: "100%", marginBottom: "25px" }}>
            <div style={{ paddingBottom: "10px" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "16px",
                  color: "#ec6408",
                  fontWeight: 600,
                  borderBottom: "2px solid rgba(236, 100, 8, 0.3)",
                  paddingBottom: "5px",
                }}
              >
                What Happens During Setup
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#333333",
                  margin: "12px 0 0 0",
                }}
              >
                Here’s what we’ll be doing based on your selected plan:
              </p>
            </div>

            <div>
              {info.plan === "Basic" ? (
                <div
                  style={{
                    marginBottom: "15px",
                    backgroundColor: "#fff8f2",
                    borderRadius: "8px",
                    border: "1px solid #ffe0cc",
                  }}
                >
                  <div style={{ padding: "15px 20px" }}>
                    <h4
                      style={{
                        margin: "0 0 10px 0",
                        fontSize: "14px",
                        color: "rgba(236, 100, 8, 1)",
                      }}
                    >
                      Webooker / Iframe
                    </h4>
                    <ul
                      style={{
                        margin: 0,
                        padding: "0 0 0 20px",
                        color: "#555555",
                        fontSize: "14px",
                        lineHeight: 1.6,
                      }}
                    >
                      <li style={{ marginBottom: "8px" }}>
                        <strong>Domain Info Collection</strong> – We’ll request
                        your registered domain details.
                      </li>
                      <li style={{ marginBottom: "8px" }}>
                        <strong>DNS Update</strong> – We’ll point your domain to
                        our servers. Please allow up to 24 hours for full
                        propagation.
                      </li>
                      <li style={{ marginBottom: "8px" }}>
                        <strong>Website Deployment</strong> – Your website will
                        go live with default (dummy) content to verify the
                        setup.
                      </li>
                      <li style={{ marginBottom: "0" }}>
                        <strong>Web Booker Access</strong> – You’ll receive your
                        Web Booker URL along with admin console credentials.
                      </li>
                    </ul>
                  </div>
                </div>
              ) : info.plan === "Standard" ? (
                <div
                  style={{
                    marginBottom: "15px",
                    backgroundColor: "#fff8f2",
                    borderRadius: "8px",
                    border: "1px solid #ffe0cc",
                  }}
                >
                  <div style={{ padding: "15px 20px" }}>
                    <h4
                      style={{
                        margin: "0 0 10px 0",
                        fontSize: "14px",
                        color: "rgba(236, 100, 8, 1)",
                      }}
                    >
                      App with Dispatch Console
                    </h4>
                    <ul
                      style={{
                        margin: 0,
                        padding: "0 0 0 20px",
                        color: "#555555",
                        fontSize: "14px",
                        lineHeight: 1.6,
                      }}
                    >
                      <li style={{ marginBottom: "8px" }}>
                        <strong>Branding Info Collection</strong> – If you
                        provide your branding (logo, app name, etc.), we’ll
                        publish the apps under your brand. Otherwise, We’ll use
                        our default branding, which you can update later.
                      </li>
                      <li style={{ marginBottom: "8px" }}>
                        <strong>App Deployment</strong> – Your mobile apps
                        (Driver & Passenger) will be built and deployed.
                      </li>
                      <li style={{ marginBottom: "8px" }}>
                        <strong>Admin Dashboard</strong> – You’ll receive access
                        to your dispatch admin dashboard to manage bookings,
                        users, and configurations.
                      </li>
                      <li style={{ marginBottom: "0" }}>
                        <strong>App Store Submission</strong> – App publication
                        is submitted for review by the app stores
                        (Apple/Google).
                      </li>
                    </ul>
                    <p
                      style={{
                        color: "#555555",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        margin: "12px 0 0 0",
                        fontStyle: "italic",
                      }}
                    >
                      <strong>Please note:</strong> Final approval is subject to
                      their review policies and timeline, and is beyond our
                      control.
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    backgroundColor: "#fff8f2",
                    borderRadius: "8px",
                    border: "1px solid #ffe0cc",
                  }}
                >
                  <div style={{ padding: "15px 20px" }}>
                    {/* Premium Plan Content */}
                    <div>
                      <h4
                        style={{
                          margin: "0 0 10px 0",
                          fontSize: "14px",
                          color: "rgba(236, 100, 8, 1)",
                        }}
                      >
                        Website & Web Booker Setup
                      </h4>
                      <ul
                        style={{
                          margin: 0,
                          padding: "0 0 0 20px",
                          color: "#555555",
                          fontSize: "14px",
                          lineHeight: 1.6,
                        }}
                      >
                        <li style={{ marginBottom: "8px" }}>
                          <strong>Domain Info Collection</strong> – We’ll
                          request your registered domain details.
                        </li>
                        <li style={{ marginBottom: "8px" }}>
                          <strong>DNS Update</strong> – We’ll point your domain
                          to our servers. Please allow up to 24 hours for full
                          propagation.
                        </li>
                        <li style={{ marginBottom: "8px" }}>
                          <strong>Website Deployment</strong> – Your website
                          will go live with default (dummy) content to verify
                          the setup.
                        </li>
                        <li style={{ marginBottom: "0" }}>
                          <strong>Web Booker Access</strong> – You’ll receive
                          your Web Booker URL along with admin console
                          credentials.
                        </li>
                      </ul>
                      <p
                        style={{
                          color: "#555555",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          margin: "12px 0 0 0",
                          fontStyle: "italic",
                        }}
                      >
                        <strong>Please note:</strong> Final approval is subject
                        to their review policies and timeline, and is beyond our
                        control.
                      </p>
                    </div>

                    <br />

                    <div>
                      <h4
                        style={{
                          margin: "0 0 10px 0",
                          fontSize: "14px",
                          color: "rgba(236, 100, 8, 1)",
                        }}
                      >
                        App with Dispatch Console
                      </h4>
                      <ul
                        style={{
                          margin: 0,
                          padding: "0 0 0 20px",
                          color: "#555555",
                          fontSize: "14px",
                          lineHeight: 1.6,
                        }}
                      >
                        <li style={{ marginBottom: "8px" }}>
                          <strong>Branding Info Collection</strong> – If you
                          provide your branding (logo, app name, etc.), we’ll
                          publish the apps under your brand. Otherwise, they’ll
                          use our default branding, which you can update later.
                        </li>
                        <li style={{ marginBottom: "8px" }}>
                          <strong>App Deployment</strong> – Your mobile apps
                          (Driver & Passenger) will be built and deployed.
                        </li>
                        <li style={{ marginBottom: "8px" }}>
                          <strong>Admin Dashboard</strong> – You’ll receive
                          access to your dispatch admin dashboard to manage
                          bookings, users, and configurations.
                        </li>
                        <li style={{ marginBottom: "0" }}>
                          <strong>App Store Submission</strong> – App
                          publication is submitted for review by the app stores
                          (Apple/Google).
                        </li>
                      </ul>
                    </div>

                    <br />

                    <div>
                      <h4
                        style={{
                          margin: "0 0 10px 0",
                          fontSize: "14px",
                          color: "rgba(236, 100, 8, 1)",
                        }}
                      >
                        Admin Dashboard Access
                      </h4>
                      <ul
                        style={{
                          margin: 0,
                          padding: "0 0 0 20px",
                          color: "#555555",
                          fontSize: "14px",
                          lineHeight: 1.6,
                        }}
                      >
                        <li style={{ marginBottom: "8px" }}>
                          You’ll receive full access to the dispatch admin
                          dashboard to manage bookings, users, payments, and
                          system settings.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              width: "100%",
              backgroundColor: "#f2faff",
              borderRadius: "8px",
              border: "1px solid #ccdaff",
              marginBottom: "25px",
            }}
          >
            <div style={{ padding: "15px 20px" }}>
              <h4
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "14px",
                  color: "rgba(236, 100, 8, 1)",
                }}
              >
                Payment Gateway Configuration
              </h4>
              <ul
                style={{
                  margin: 0,
                  padding: "0 0 0 20px",
                  color: "#555555",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                <li style={{ marginBottom: "8px" }}>
                  By default, test Stripe keys are pre-configured for demo
                  purposes.
                </li>
                <li style={{ marginBottom: "0" }}>
                  To enable live transactions, you must update your Stripe live
                  API credentials directly from the admin console
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "24px",
            }}
          >
            <h4
              style={{
                fontWeight: "600",
                fontSize: "18px",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Communication & Support
            </h4>
            <p style={{ marginBottom: "12px" }}>
              During the setup process, we'll create a dedicated WhatsApp group
              from
              <span style={{ fontWeight: "500" }}> +1 (302) 499-1612</span> to
              coordinate during the setup process, share updates, and assist
              with any questions.
            </p>
            <p style={{ marginBottom: "16px", fontStyle: "italic" }}>
              Please allow us time to complete the process. We appreciate your
              patience.
            </p>
            <div>
              <p style={{ fontWeight: "500", marginBottom: "8px" }}>
                For urgent queries, contact us at:
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <span>📧</span>
                <a
                  href="mailto:support@atozdispatch.com"
                  style={{
                    color: "rgb(236,101,9)",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  support@atozdispatch.com
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <span>📞</span>
                <a
                  href="tel:+13024991612"
                  style={{
                    color: "rgb(236,101,9)",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  +1 (302) 499-1612 (Phone/WhatsApp)
                </a>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span>👉</span>
                <a
                  href="https://calendar.app.google/xGjsAuGmLY3UMTUCA"
                  target="_blank"
                  style={{
                    color: "rgb(236,101,9)",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
            <Link style={{ textDecoration: "none" }} href={"/"}>
              <button
                className="header-outlined-btn"
                style={{
                  padding: "8px 24px",
                  borderColor: "rgb(236,101,9)",
                  color: "rgb(255, 255, 255)",
                  fontWeight: "500",
                  borderRadius: "6px",
                }}
              >
                Go To Home
              </button>
            </Link>
            <button
              className="header-outlined-btn"
              style={{
                padding: "8px 24px",
                borderColor: "rgb(236,101,9)",
                color: "rgb(255, 255, 255)",
                fontWeight: "500",
                borderRadius: "6px",
                background: "#0b51e6",
              }}
              onClick={(e) => handleDownload(e)}
            >
              <MdOutlineFileDownload size={20} />
              {isPending ? "Processing..." : "Download"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ThankYouModal;
