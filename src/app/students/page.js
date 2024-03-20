"use client";

import React, { useEffect, useState } from "react";

import AddStudents from "@/components/ui/common/students/add-button-students";
import StudentTable from "@/components/ui/common/students/students-table";
import SearchPanel from "@/components/ui/common/students/search-panel";

export default function students() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data/students");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const studentsData = await response.json();
        setStudents(studentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-4 p-4 rounded-md border-[#1976d2] border-[1px] border-dashed flex ">
        <div className="mr-auto">
          <SearchPanel students={students} />
        </div>
        <AddStudents />
      </div>
      <StudentTable />
    </div>
  );
}
