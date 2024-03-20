import React from "react";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";

const BreadcrumbComponent = () => {
  const paths = usePathname();
  const pathNames = paths.split().filter((path) => path);
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      {pathNames.map((segment, index) => (
        <Breadcrumb.Item key={index}>{segment}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
