import React from "react";
import { Content } from "antd/es/layout/layout";

export default function Main({ children }) {
  return (
    <Content
      style={{
        margin: "24px 16px 0",
        overflow: "initial",
      }}>
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: "#ffffff",
          borderRadius: "8px",
          minHeight: "85.8vh",
        }}>
        {children}
      </div>
    </Content>
  );
}
