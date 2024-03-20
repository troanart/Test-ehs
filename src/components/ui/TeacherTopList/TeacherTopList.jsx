"use client";

import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export default function TeacherTopList() {
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
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}>
      <List className="flex gap-5 py-0">
        {teachers.slice(0, 2).map((item) => (
          <ListItem key={item.id} className="flex" disablePadding>
            <Card className="w-[340px] min-h-[93px] ">
              <CardContent>
                <div className="bg-[#1677ff] w-fit p-1 rounded">
                  <Typography className="text-white">{item.name}</Typography>
                </div>
                <div></div>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
