import FaqCollapse from "@/components/FaqCollapse";
import React from "react";

const Tab3 = () => {
  const faqData = [
    {
      question:
        "What industries or businesses can benefit most from AtoZ  products?",
      answer: "Limo and Chauffeur Companies ",
    },
    {
      question: "What are the main features of your AtoZ product?",
      answer:
        "Our platform includes comprehensive analytics and a user-friendly interface. Includes its own branding with logo and business name with Android and iOS App with dispatch console and web booker. ",
    },
    {
      question:
        "What customization options are available (e.g., logo, colors, domain)?",
      answer:
        "You can customize the logo, color scheme, fonts, and domain name.",
    },
    {
      question: "Does the platform support multiple languages or regions?",
      answer:
        "No, our platform supports English languages. Additional languages need to add-ons the features. ",
    },
    {
      question: "Can additional features be integrated into the product?",
      answer: "Yes, the additional features can be integrated as AddsOn.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3
        style={{ textTransform: "uppercase", marginLeft: "10px" }}
        className="title"
      >
        features and functionality
      </h3>
      <FaqCollapse data={faqData} />
    </div>
  );
};

export default Tab3;
