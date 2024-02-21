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
      icon: (
        <PersonOutlineOutlinedIcon
          sx={{ width: 48 + "px", height: 48 + "px" }}
        />
      ),
      value: data.students.length || 0,
    },
    {
      title: "Викладачі",
      icon: (
        <ImportContactsOutlinedIcon
          sx={{ width: 48 + "px", height: 48 + "px" }}
        />
      ),
      value: data.teachers.length || 0,
    },
    {
      title: "Групи",
      icon: <GroupOutlinedIcon sx={{ width: 48 + "px", height: 48 + "px" }} />,
      value: data.groups.length || 0,
    },
  ];

  return (
    <Box
      sx={{
        width: 100 + "%",
        maxWidth: 280 + "px",
        bgcolor: "background.paper",
      }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {menuItems.map((item) => (
            <ListItem
              style={{ marginBottom: 15 + "px" }}
              disablePadding
              key={item.title}>
              <Card style={{ minWidth: 160 + "px" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:last-child": {
                      paddingBottom: 16 + "px",
                    },
                  }}>
                  <div style={{ marginRight: 8 }}>
                    <ListItemIcon
                      sx={{
                        color: "#1677ff",
                        width: 48 + "px",
                        height: 48 + "px",
                      }}>
                      {item.icon}
                    </ListItemIcon>
                  </div>
                  <Divider orientation="vertical" sx={{ height: 48 + "px" }} />
                  <div style={{ marginLeft: 8 + "px" }}>
                    <div
                      style={{ marginBottom: 8 + "px" }}
                      className="text-center text-3xl">
                      {item.value}
                    </div>
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
