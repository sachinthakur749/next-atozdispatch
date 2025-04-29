import FaqCollapse from "@/components/FaqCollapse";
import React from "react";

const Tab6 = () => {
  const faqData = [
    {
      question: "What security measures are in place to protect data?",
      answer:
        "Our platform uses encryption, firewalls, and regular security audits to protect data from breaches and unauthorized access.",
    },
    {
      question: "Is the platform compliant with regulations like GDPR or CCPA?",
      answer:
        "Yes, we adhere to major data protection regulations such as GDPR, CCPA, and others, ensuring compliance with global standards.",
    },
    {
      question: "Where is customer data hosted?",
      answer:
        "Customer data is hosted in secure data centers located in compliance with regional data protection laws.",
    },
    {
      question: "How is customer data backed up?",
      answer: "Data is automatically backed up daily.",
    },
    {
      question: "What happens to the data if we terminate the service?",
      answer:
        "Upon termination, you can request a complete export of your data. Afterward, all data will be securely deleted from our servers.",
    },
    {
      question:
        "How secure is the data stored and transmitted through A to Z Dispatch?",
      answer:
        "The platform employs robust security measures, including encryption protocols and secure data storage practices, to ensure that all data transmitted and stored within A to Z Dispatch is protected from unauthorized access.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3
        style={{ textTransform: "uppercase", marginLeft: "10px" }}
        className="title"
      >
        security and compliance
      </h3>
      <FaqCollapse data={faqData} />
    </div>
  );
};

export default Tab6;
