import FaqCollapse from "@/components/FaqCollapse";
import React from "react";

const Tab1 = () => {
  const faqData = [
    {
      question: "What is AtoZ Dispatch?",
      answer: (
        <p>
          A to Z Dispatch is an all-in-one software solution for limo and
          chauffeur companies, streamlining booking, dispatching, and payments
          through its user-friendly web and mobile apps. Rated 5 stars on
          Trustpilot, it offers unmatched efficiency and reliability for
          businesses of all sizes. A to Z Dispatch is a White-label limo and
          chauffeur scheduling solution for mid-sized companies with around five
          drivers. Offering a 30-day free trial that includes tailored
          development and customer-end testing, helps streamline operations and
          boost efficiency. Based in Nepal with 15+ years of experience, A to Z
          Dispatch supports only English, with options for additional languages
          available through custom packages.
        </p>
      ),
    },
    {
      question: "How do A to Z Dispatch Works?",
      answer: (
        <div style={{ textAlign: "justify" }}>
          A to Z Dispatch connects passengers, drivers, and dispatchers
          seamlessly through its advanced system. Passengers can book rides via
          a web booker or app, drivers receive and accept job notifications on
          their mobile app, and dispatchers manage and assign bookings through a
          centralized dispatch console, ensuring smooth operations from start to
          finish.A to Z Dispatch connects passengers, drivers, and dispatchers
          seamlessly through its advanced system. Passengers can book rides via
          a web booker or app, drivers receive and accept job notifications on
          their mobile app, and dispatchers manage and assign bookings through a
          centralized dispatch console, ensuring smooth operations from start to
          finish.
          <p style={{ marginTop: "5px" }}>
            {" "}
            <strong> Demo details</strong>:-{" "}
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1yJKRnqYhgZWO3C20eIPomYdkLYhNotwcOV9ZlErmFd4/edit?usp=drive_link"
            >
              Demo credentials
            </a>{" "}
          </p>
        </div>
      ),
    },
    {
      question: "How do I get started?",
      answer: (
        <div style={{ textAlign: "justify" }}>
          Yes you can sign up for a 30 days free trial. You can visit our
          website
          <span>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://atozdispatch.com/"
            >
              https://atozdispatch.com
            </a>{" "}
          </span>
          and just need to register by clicking on sign up OR else simply go to
          this sign up link
          <span>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://atozdispatch.com/signup"
            >
              https://atozdispatch.com/signup
            </a>{" "}
          </span>
          for free trial{" "}
          <p style={{ marginTop: "5px" }}>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/1QWrjU8Bm4GHZHW6txoa75VKAs5ebNiCuajy96n7VO-M/edit?usp=drive_link"
            >
              Customer Registration Flow
            </a>{" "}
          </p>
        </div>
      ),
    },
    {
      question: "How long does it take to deliver the product?",
      answer: (
        <div style={{ textAlign: "justify" }}>
          It takes 7 days after all required information is submitted promptly.
          <p
            style={{ fontStyle: "italic", fontSize: "12px", marginTop: "5px" }}
          >
            [Important Note: Please be aware that the process for the app to go
            live on the App Store or Google Play Store depends entirely on their
            review and verification process. While we handle the submission,
            they determine the timeline for approval.]
          </p>
        </div>
      ),
    },
    {
      question: "What information do I need to provide?",
      answer: (
        <div style={{ textAlign: "justify" }}>
          To get started, we require:
          <ul>
            <li>
              {" "}
              <strong>Logo</strong>(in high-resolution format){" "}
            </li>
            <li>
              <strong>Business Name and Address</strong>
            </li>
            <li>
              <strong>Stripe Account Details (for payment processing) : </strong>
              Secret and Publishable Key
            </li>
            <li>
              <strong>Domain Details (for hosting the branded platform) : </strong>
              Domain Registrar login details to update DNS
            </li>
          </ul>
          <p style={{ marginTop: "5px" }}>
            {" "}
            <strong> Can access Form link</strong>:-{" "}
            <a target="_blank" href="https://zfrmz.com/edUKel7mgAYE7Q0YLkoa">
              https://zfrmz.com/edUKel7mgAYE7Q0YLkoa
            </a>{" "}
          </p>
        </div>
      ),
    },
    {
      question: "Who is using your product?",
      answer: (
        <div style={{ textAlign: "justify" }}>
          Our product is used all over the world.
        </div>
      ),
    },
    // {
    //   question: "Is the software customizable to suit specific business needs?",
    //   answer: (
    //     <div style={{ textAlign: "justify" }}>
    //       No, A to Z Dispatch is a white label dispatch allowing businesses to
    //       configure rates, zones, vehicle types, and even integrate unique
    //       business rules into the platform.
    //     </div>
    //   ),
    // },
    // {
    //   question:
    //     "What kind of customer support do you offer (e.g., chat, email, phone)?",
    //   answer: (
    //     <div style={{ textAlign: "justify" }}>
    //       We provide 24/7 customer support via chat, email, and phone.
    //       <p style={{ marginTop: "5px" }}>
    //         {" "}
    //         <strong> Link Ticket support: </strong>:-{" "}
    //         <a
    //           target="_blank"
    //           href="https://coredreamsltd.atlassian.net/jira/servicedesk/projects/A2Z/queues/custom/57"
    //         >
    //           https://coredreamsltd.atlassian.net/jira/servicedesk/projects/A2Z/queues/custom/57
    //         </a>{" "}
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   question: "Are there additional costs for support?",
    //   answer: (
    //     <div style={{ textAlign: "justify" }}>
    //       Standard support is included in your subscription
    //     </div>
    //   ),
    // },
    // {
    //   question: "How often do you release updates or new features?",
    //   answer: (
    //     <div style={{ textAlign: "justify" }}>
    //       Updates are released weekly, with additional updates as needed to
    //       address critical improvements or issues.
    //     </div>
    //   ),
    // },
    // {
    //   question: "Will our team be trained to use and manage the platform?",
    //   answer: (
    //     <div style={{ textAlign: "justify" }}>
    //       Yes, we provide comprehensive tutorials, and user manuals to ensure
    //       your team is well-equipped
    //     </div>
    //   ),
    // },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3
        style={{ textTransform: "uppercase", marginLeft: "10px" }}
        className="title"
      >
        Introduction
      </h3>
      <FaqCollapse data={faqData} />
    </div>
  );
};

export default Tab1;
