import React from "react";

import {
  CardList,
  CardTarget,
  DiagramsCard,
  ProgressCircul,
  TeacherTopList,
} from "@/components";

export default function Page() {
  return (
    <>
      <div className="flex mb-5">
        <CardList />

        <TeacherTopList />
      </div>

      <div className="flex justify-start gap-5 align-center">
        <DiagramsCard />
        <div className="flex justify-start flex-col">
          <CardTarget />

          <div className="mt-5">
            <ProgressCircul />
          </div>
        </div>
      </div>
    </>
  );
}
