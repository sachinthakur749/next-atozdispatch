import FaqCollapse from "@/components/FaqCollapse";
import React from "react";

const Tab2 = () => {
  const faqData = [
    {
      question: "What is a white-label SaaS product?",
      answer:
        "A white-label SaaS product is a software solution that is fully customizable to align with your business branding and identity.",
    },
    {
      question:
        "How does a white-label SaaS solution differ from regular SaaS products?",
      answer:
        "Unlike standard SaaS products, white-label solutions let you customize the branding, such as logos, domain names, and visual elements, enabling you to present it as your own product.",
    },
    {
      question:
        "What industries or businesses can benefit most from this product?",
      answer: "Limo and Chauffeur Companies.",
    },
    {
      question: "What are the main features of your white-label SaaS product?",
      answer:
        "Our platform includes comprehensive branding options, analytics, and a user-friendly interface. It includes your own branding with a logo and business name, Android and iOS apps, a dispatch console, and a web booker.",
    },
    {
      question: "Is this product customizable?",
      answer:
        "Yes, the platform can be customized to include your logo, colors, and domain, ensuring it reflects your brand identity.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3
        style={{ textTransform: "uppercase", marginLeft: "10px" }}
        className="title"
      >
        general questions
      </h3>
      <FaqCollapse data={faqData} />
    </div>
  );
};

export default Tab2;
