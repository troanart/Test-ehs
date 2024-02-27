import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { List, ListItem, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import IconButtons from "./icon-buttons";
import MoreStudentsIndicator from "./more-students-indicator";
import cn from "classnames";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ColapseBtn from "./colapse-btn";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import StatsInCard from "./stats-in-card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function GroupCard(item) {
  const [showMore, setShowMore] = useState(false);
  return (
    <Grid item xs={2} sm={4} md={4} key={item.name}>
      <Item
        className={`border-l-8 pt-9 border-emerald-500 relative ${
          item.type === "online" ? "border-emerald-500" : "border-pink-500"
        }`}>
        <div className="border rounded-md  mt-1  border-sky-500 p-0.5 w-fit absolute top-0 right-0 text-black">
          {/* <ImportContactsOutlinedIcon className="text-emerald-400" /> */}
          {item.teacher}
        </div>
        <div className="mb-2 flex items-center">
          <Typography className="text-left mr-auto text-xl w-fit">
            {item.name}
          </Typography>
          <IconButtons />
        </div>
        <div className="border-2 rounded p-4 relative border-sky-500">
          <List disablePadding className="flex gap-2 mb-3 flex-wrap flex-row">
            {item.students?.map((student, index) => {
              return (
                <React.Fragment key={`student_${index}`}>
                  {index < 3 && (
                    <ListItem
                      className="w-fit border-2 bg-sky-500 border-sky-500 p-1 rounded"
                      key={`student_${index}`}>
                      <PersonIcon />
                      <Typography className="text-sm text-white">
                        {student.name}
                      </Typography>
                    </ListItem>
                  )}
                </React.Fragment>
              );
            })}
            {item.students?.length > 3 && !showMore && (
              <ListItem
                key="more-students"
                className="w-fit border-2  border-sky-500 p-0 rounded hover:border-emerald-200 hover:bg-emerald-200 transition ease-in duration-300">
                <MoreStudentsIndicator onClick={() => setShowMore(!showMore)} />
              </ListItem>
            )}
            {showMore && (
              <ListItem
                key="collapse-button"
                className="w-fit absolute bottom-[-29px] right-[-15px] p-0 rounded ">
                <ColapseBtn onClick={() => setShowMore(false)} />
              </ListItem>
            )}
            {item.students?.map((student, index) => {
              return (
                <React.Fragment key={`student_${index + 3}`}>
                  {index >= 3 && (
                    <ListItem
                      className={cn(
                        "w-fit border-2 bg-sky-500 border-sky-500 p-1 rounded",
                        !showMore && "hidden"
                      )}
                      key={`student_${index + 3}`}>
                      <PersonIcon />
                      <Typography className="text-sm text-white">
                        {student.name}
                      </Typography>
                    </ListItem>
                  )}
                </React.Fragment>
              );
            })}
          </List>
        </div>
        <div>
          <StatsInCard item={item} />
        </div>
      </Item>
    </Grid>
  );
}
