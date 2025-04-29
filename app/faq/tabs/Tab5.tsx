import FaqCollapse from "@/components/FaqCollapse";
import React from "react";

const Tab5 = () => {
  const faqData = [
    {
      question:
        "What is the pricing structure for the white-label SaaS product?",
      answer: (
        <div>
          Pricing is subscription-based, with options for monthly.
          <table class="table">
            <thead>
              <tr>
                <th>Bssic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>US$99/month</td>
                <td>US$149/month</td>
                <td>US$199/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      question: "Is there a minimum contract duration?",
      answer:
        "No, there is not a minimum contract duration.  The subscription will continue until the cancellation is done by the client from the dispatch console where there are the cancel subscriptions options or reactive options.",
    },
    {
      question: "Are there additional costs for updates or new features?",
      answer:
        "No, updates and new features are included in your subscription. Custom feature development may incur additional costs.",
    },
    {
      question: "Are there volume-based discounts for higher purchase?",
      answer: "Yes",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3
        style={{ textTransform: "uppercase", marginLeft: "10px" }}
        className="title"
      >
        Pricing and licensing
      </h3>
      <FaqCollapse data={faqData} />
    </div>
  );
};

export default Tab5;
