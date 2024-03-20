import React from "react";
import { Breadcrumb as BreadcrumbComponent } from "antd";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split().filter((path) => path);
  return (
    <BreadcrumbComponent>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      {pathNames.map((segment, index) => (
        <Breadcrumb.Item key={index}>{segment}</Breadcrumb.Item>
      ))}
    </BreadcrumbComponent>
  );
};

export default BreadcrumbComponent;
