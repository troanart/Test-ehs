import React from "react";
import "./globals.css";
import HeaderComponents from "./ui/common/Header/components/Header";
import FooterComponent from "./ui/common/Footer/Footer";
import Main from "./ui/common/Main/Main";
import SiderComponents from "./ui/common/Sider/Sider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5]">
        <SiderComponents />
        <div className="ml-[200px]">
          <HeaderComponents />
          <Main children={children} />
        </div>
      </body>
    </html>
  );
}
