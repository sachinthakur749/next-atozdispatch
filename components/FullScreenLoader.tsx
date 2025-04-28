import { Spin } from "antd";

export const FullScreenLoader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fullscreen-loader">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <div className="loader"></div> */}
        <Spin size="large" />
        <p className="loader-text">Processing ...</p>
      </div>
    </div>
  );
};
