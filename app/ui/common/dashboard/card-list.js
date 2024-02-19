"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import { data } from "@/app/api/data/data";

export default function CardList() {
  const [data, setData] = useState({
    students: [],
    teachers: [],
    groups: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };
    fetchData();
  }, []);

  const menuItems = [
    {
      title: "Студенти",
      icon: <PersonOutlineOutlinedIcon className="w-12 h-12" />,
      value: data.students.length || 0,
    },
    {
      title: "Викладачі",
      icon: <ImportContactsOutlinedIcon className="w-12 h-12" />,
      value: data.teachers.length || 0,
    },
    {
      title: "Групи",
      icon: <GroupOutlinedIcon className="w-12 h-12" />,
      value: data.groups.length || 0,
    },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: 280, bgcolor: "background.paper" }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {menuItems.map((item) => (
            <ListItem
              sx={{ marginBottom: "15px" }}
              disablePadding
              key={item.title}>
              <Card sx={{ minWidth: 160 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:last-child": {
                      paddingBottom: "16px",
                    },
                  }}>
                  <div className="mr-2">
                    <ListItemIcon sx={{ color: "#1677ff" }}>
                      {item.icon}
                    </ListItemIcon>
                  </div>
                  <Divider orientation="vertical" className="h-12" />
                  <div className="text-center mb-2 pl-3 ml-3 text-3xl">
                    {item.value}
                  </div>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
