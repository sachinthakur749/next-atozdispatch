import FaqCollapse from "@/components/FaqCollapse";
import React from "react";

const Tab7 = () => {
  const faqData = [
    {
      question: "Is the software customisable to suit specific business needs?",
      answer:
        "No, A to Z Dispatch is a white label dispatch allowing businesses to configure rates, zones, and vehicle types, and even integrate unique business rules into the platform. ",
    },
    {
      question:
        "What kind of customer support do you offer (e.g., chat, email, phone)?",
      answer: (
        <div>
          We provide 24/7 customer support via chat, email, and phone.
          <p style={{ marginTop: "5px" }}>
            {" "}
            <strong>Link Ticket support</strong>:-{" "}
            <a
              target="_blank"
              href="https://coredreamsltd.atlassian.net/jira/servicedesk/projects/A2Z/queues/custom"
              rel="noreferrer"
            >
              https://coredreamsltd.atlassian.net/jira/servicedesk/projects/A2Z/queues/custom
            </a>{" "}
          </p>
        </div>
      ),
    },

    {
      question: "Are there additional costs for support?",
      answer: "Standard support is included in your subscription.",
    },
    {
      question: "How often do you release updates or new features?",
      answer:
        "Updates are released weekly, with additional updates as needed to address critical improvements or issues.",
    },
    {
      question: "Will our team be trained to use and manage the platform?",
      answer:
        "Yes, we provide comprehensive tutorials and user manuals to ensure your team is well-equipped to use the platform effectively.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3
        style={{ textTransform: "uppercase", marginLeft: "10px" }}
        className="title"
      >
        support and maintenance
      </h3>
      <FaqCollapse data={faqData} />
    </div>
  );
};

export default Tab7;
