import FaqCollapse from "@/components/FaqCollapse";
import React from "react";

const Tab4 = () => {
  const faqData = [
    {
      question:
        "What is the onboarding process for an AtoZ Dispatch white-label SaaS product?",
      answer:
        "The onboarding process includes an initial consultation, information collection, branding setup, platform customization, and a manual provided for your team.",
    },
    {
      question:
        "Does it integrate with third-party tools or platforms (e.g., CRM, payment gateways)?",
      answer:
        "At the moment there is no option to integrate with CRM or out of scope payment gateway, all will be treated as AddsOn.",
    },
    {
      question: "What are the technical requirements for implementation?",
      answer: (
        <div style={{ textAlign: "justify" }}>
          <ul>
            <li>
              {" "}
              <strong>Stripe Details: </strong>(For Payment solution){" "}
            </li>

            <li>
              <strong>Domain Details:</strong>
              For DNS update
            </li>
          </ul>
          <p>
            If Stripe is not already set up, you can easily create an account
            and integrate it with your dispatch system. Follow this guide to get
            started:
            <span>
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.taxi-webdesign.com/how-to-create-stripe-account-set-up/"
              >
                How to Create and Set Up a Stripe Account.
              </a>{" "}
            </span>
          </p>
          <p>
            This guide provides step-by-step instructions on account creation,
            verification, and linking it to your dispatch system.
          </p>
        </div>
      ),
    },
    {
      question:
        "Is there a dedicated support team to help with setup and customization?",
      answer: (
        <div>
          Yes, our dedicated support team will assist you throughout the setup,
          customization, and deployment process.
          <ul>
            <li>
              <strong>WhatsApp Group</strong>
            </li>
            <li>
              <strong>Ticket support </strong>
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can I add my own merchant?",
      answer: "Yes, you can add your own  Stripe account. ",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3
        style={{ textTransform: "uppercase", marginLeft: "10px" }}
        className="title"
      >
        Implementation and integration
      </h3>
      <FaqCollapse data={faqData} />
    </div>
  );
};

export default Tab4;
