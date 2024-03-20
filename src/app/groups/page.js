"use client";
import React from "react";
import ColorToggleButton from "@/components/ui/ColorToggleButton/ColorToggleButton";
import AddGroups from "@/components/ui/AddGroupButton/AddGroupButton";
import GroupsCardsList from "@/components/ui/GroupsCardsList/GroupsCardsList";
import Legend from "@/components/ui/Legend/Legend";

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
