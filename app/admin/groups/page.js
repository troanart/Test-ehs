"use client";
import React, { useState, useEffect } from "react";
import ColorToggleButton from "@/app/ui/common/Main/filter-btn";

import Demo from "@/app/ui/common/groups/color-picker";
import AddGroups from "@/app/ui/common/groups/add-button";
import ResponsiveGrid from "@/app/ui/common/groups/groups-card-list";

export default function Groups() {
  return (
    <div>
      <div className="mb-4 p-4 rounded-md border-[#1976d2] border-[1px] border-dashed flex ">
        <div className="">
          <ColorToggleButton
          // selectedColors={selectedColors}
          // filterType={filterType}
          // onChange={handleFilterChange}
          />
        </div>
        <ul className=" mx-auto flex gap-12 justify-items-center relative  border  border-[#1976d1] text- rounded-md  items-center py-[5px] px-[35px]">
          <h2 className="absolute top-[-13px] left-2 bg-white text-[ #1976d1] ">
            Налаштування
          </h2>
          <li key={1} className="flex gap-5 justify-items-center items-center">
            <p className="text-sm">Онлайн</p>
          </li>
          <li key={2} className="flex gap-5 justify-items-center items-center">
            <p className="text-sm">Офлайн</p>
          </li>
          <li key={3} className="flex gap-5 justify-items-center items-center">
            <p className="text-sm">Корпоративні</p>
          </li>
        </ul>
        <AddGroups />
      </div>
      <ResponsiveGrid />
    </div>
  );
}
