"use client";

import React from "react";
import { Collapse } from "antd";

const CustomCollapse = ({ textStyle, headerStyle }) => {
  // const style = {
  //   color: "#fff",
  //   textAlign: "left",
  //   fontWeight: 500,
  //   paddingLeft: "20px",
  // };

  // const headerStyle = {
  //   color: "#fff",
  //   textAlign: "left",
  //   fontWeight: 500,
  //   fontSize: "16px",
  //   color: "#ec6408",
  // };

  const items = [
    {
      key: "1",
      label: <h2 style={headerStyle}>What is a white-label SaaS product?</h2>,
      children: (
        <p style={textStyle}>
          A white-label SaaS product is a software solution that is fully
          customizable to align with your business branding and identity.
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <h2 style={headerStyle}>
          What customization options are available (e.g., logo, colors, domain)?
        </h2>
      ),
      children: (
        <p style={textStyle}>
          You can customize the logo, color scheme, fonts, and domain name.
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <h2 style={headerStyle}>
          What is the onboarding process for an AtoZ Dispatch white-label SaaS
          product?
        </h2>
      ),
      children: (
        <p style={textStyle}>
          The onboarding process includes an initial consultation, information
          collection, branding setup, platform customization, and a manual
          provided for your team.
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <h2 style={headerStyle}>
          What security measures are in place to protect data?
        </h2>
      ),
      children: (
        <p style={textStyle}>
          Our platform uses encryption, firewalls, and regular security audits
          to protect data from breaches and unauthorized access.
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <h2 style={headerStyle}>
          What kind of customer support do you offer (e.g., chat, email, phone)?
        </h2>
      ),
      children: (
        <p style={textStyle}>
          We provide 24/7 customer support via chat, email, and phone. Dedicated
          account managers are also available for enterprise clients.
        </p>
      ),
    },
  ];

  const onChange = (key) => { };
  return (
    <Collapse
      items={items}
      destroyInactivePanel={false}
      ghost
      bordered={false}
      defaultActiveKey={["1"]}
      onChange={onChange}
    />
  );
};
export default CustomCollapse;
