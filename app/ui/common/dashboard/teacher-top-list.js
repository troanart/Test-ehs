"use client";

import { Card, CardContent, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function TopTeacherList() {
  const [teachers, setTeacher] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data/teachers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setTeacher(responseData);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Card>
      <CardContent>
        <List className="flex gap-4">
          {teachers.map((item) => (
            <ListItem key={item.id} disablePadding>
              <Card>
                <CardContent>
                  {console.log(item.name)}
                  {item.name}
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
