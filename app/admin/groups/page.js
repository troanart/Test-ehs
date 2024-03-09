"use client";
import React, { useState, useEffect } from "react";
import ColorToggleButton from "@/app/ui/common/groups/filter-btn";
import AddGroups from "@/app/ui/common/groups/add-button";
import GroupsCardsList from "@/app/ui/common/groups/groups-card-list";
import Legend from "@/app/ui/common/groups/legend";

export default function Groups() {
  return (
    <div>
      <div className="mb-4 p-4 rounded-md border-[#1976d2] border-[1px] border-dashed flex ">
        <div className="">
          <ColorToggleButton />
        </div>
        <div className="mx-auto">
          <Legend />
        </div>
        <AddGroups />
      </div>
      <GroupsCardsList />
    </div>
  );
}
