import React from "react";
import CardList from "../ui/common/dashboard/card-list";
import DiagramsCards from "../ui/common/dashboard/diagrams-card";
import CardTarget from "../ui/common/dashboard/card-target";

const Admin = () => {
  return (
    <div className="flex justify-start gap-12 align-center">
      <CardList />
      <DiagramsCards />
      <CardTarget/>
    </div>
  );
};

export default Admin;
