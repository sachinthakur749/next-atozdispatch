import React from "react";
import { Collapse } from "antd";

const FaqCollapse = ({ data }: any) => {
  const headerStyle: React.CSSProperties = {
    color: "#ec6408",
    textAlign: "left",
    fontWeight: 500,
    fontSize: "16px",
  };

  const contentStyle: React.CSSProperties = {
    color: "#514c4c",
    textAlign: "left",
    fontWeight: 500,
    paddingLeft: "20px",
  };

  const items = data.map((item: any, index: any) => ({
    key: `${index + 1}`,
    label: <h2 style={headerStyle}>{item.question}</h2>,
    children: <p style={contentStyle}>{item.answer}</p>,
  }));

  return (
    <Collapse
      items={items}
      destroyInactivePanel={false}
      ghost
      bordered={false}
      defaultActiveKey={["1"]}
    />
  );
};

export default FaqCollapse;
