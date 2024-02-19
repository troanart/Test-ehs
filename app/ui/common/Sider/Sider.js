import React from "react";
import Sider from "antd/es/layout/Sider";
import MenuComponent from "./menu";

export default function SiderComponents() {
  return (
    <Sider
      style={{
        background: "#001529",
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      breakpoint="lg"
      collapsedWidth="0">
      <div className="demo-logo-vertical text-center mt-2">
        <h1 className="text-red-500 font-['Raleway'] text-6xl text-center">
          ASAT
        </h1>
      </div>
      <MenuComponent />
    </Sider>
  );
}
