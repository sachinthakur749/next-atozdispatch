import FaqCollapse from "@/components/FaqCollapse";
import React from "react";

const Tab9 = () => {
  const faqData = [
    {
      question: "What are the cancellation fees?",
      answer:
        "We do not charge a cancellation fee. However, please note that cancellation requests must be made before the next invoice is generated. Once an invoice is raised, it must be paid in full.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "To cancel, contact our support team via email or there is a cancel subscription on the dispatch portal at least 7 days before your billing cycle renews.",
    },
    {
      question: "What happens to my data after cancellation?",
      answer:
        "Upon cancellation, you can request a data export. All your data will be securely deleted from our servers within 30 days unless specified otherwise.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3
        style={{ textTransform: "uppercase", marginLeft: "10px" }}
        className="title"
      >
        Cancellation Policy
      </h3>
      <FaqCollapse data={faqData} />
    </div>
  );
};

export default Tab9;
