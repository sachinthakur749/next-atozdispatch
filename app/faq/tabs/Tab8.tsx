import FaqCollapse from "@/components/FaqCollapse";
import React from "react";

const Tab8 = () => {
  const faqData = [
    {
      question: "Are there additional add-ons available for purchase?",
      answer:
        "Yes, we offer several add-ons that you can purchase to enhance the platform’s functionality and user experience.",
    },
    {
      question: "Can the add-ons be purchased at any time?",
      answer:
        "Yes, you can request and purchase add-ons at any point during your subscription period.",
    },
    {
      question: "Are there any additional costs for implementing add-ons?",
      answer:
        "Implementation of certain add-ons, such as custom integrations or API development, may involve additional setup fees based on the scope of the work.",
    },
    {
      question:
        "Are there discounts available for purchasing multiple add-ons?",
      answer:
        "Yes, we offer discounts for bundled add-ons or for customers who purchase multiple add-ons simultaneously.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3
        style={{ textTransform: "uppercase", marginLeft: "10px" }}
        className="title"
      >
        Add-ons and extra features
      </h3>
      <FaqCollapse data={faqData} />
    </div>
  );
};

export default Tab8;
