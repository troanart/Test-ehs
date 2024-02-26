import React from "react";
import CardList from "../ui/common/dashboard/card-list";
import DiagramsCards from "../ui/common/dashboard/diagrams-card";
import CardTarget from "../ui/common/dashboard/card-target";
import ProgressCircul from "../ui/common/dashboard/progres-circul";
import TopTeacherList from "../ui/common/dashboard/teacher-top-list";

const Admin = () => {
  return (
    <div>
      <div className=" flex mb-5">
        <CardList />
        <TopTeacherList />
      </div>

      <div className="flex justify-start gap-5 align-center">
        <DiagramsCards />
        <div className="flex  justify-start flex-col">
          <CardTarget />
          <div className="mt-5">
            <ProgressCircul />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
