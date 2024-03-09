"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  {
    title: "Імя",
    dataIndex: "name",
    render: (name) => `${name}`,
    // width: '20%',
  },
  {
    title: "Контакти",
    dataIndex: "contacts",
    render: (name) => `${name}`,
  },
  {
    title: "Вік",
    dataIndex: "age",
    render: (name) => `${name}`,
  },
  {
    title: "Група",
    dataIndex: "group",
    render: (name) => `${name}`,
  },
  {
    title: "Тариф",
    dataIndex: "tariff",

    render: (name) => `${name}`,
  },
  {
    title: "Кількість занять",
    dataIndex: "allLessons",

    render: (name) => `${name}`,
  },
  {
    title: "Відвіданих занять",
    dataIndex: "checkLessons",
    render: (name) => `${name}`,
  },
  {
    title: "Можливості",
    dataIndex: "",
    key: "x",
    render: () => {
      return (
        <div>
          <IconButton aria-label="delete" color="primary">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" color="primary">
            <DeleteIcon />
          </IconButton>
        </div>
      );
    },
  },
];

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data/students");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const studentsData = await response.json();
        setStudents(studentsData);
        setLoading(false);
        setTableParams((prevParams) => ({
          ...prevParams,
          pagination: {
            ...prevParams.pagination,
            total: studentsData.length, // Установите общее количество элементов
          },
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  return (
    <Table
      columns={columns}
      rowKey={(record) => record._id}
      dataSource={students}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default StudentTable;
