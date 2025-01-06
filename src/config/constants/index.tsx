import React from "react";
import { Avatar, TableProps } from "antd";
import {
  CostDataType,
  DistanceDataType,
  EmployeeDataType,
  TripDataType,
  TruckDataType,
  WarehouseDataType,
  CostTypeDataType,
} from "../../types/components";
import { formatDate } from "../../utils/formatDate";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

export const baseUrl = import.meta.env.VITE_BASE_API_URL;

export enum APP {
  ADMIN,
  COMPANY,
}

export const NETWORK_CONFIG = {
  TIMEOUT: 10000,
  USE_TOKEN: true,
  WITH_CREDENTIALS: import.meta.env.VITE_WITH_CREDENTIALS === "true",
}

export const warehouseColumns: TableProps<WarehouseDataType>["columns"] = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên hàng hoá",
    dataIndex: "goodsName",
    key: "goodsName",
    render: (name, record) => {
      const isExport = record.origin === false;
      return (
        <>
          {isExport ? (
            <ArrowUpOutlined style={{ color: "red" }} />
          ) : (
            <ArrowDownOutlined style={{ color: "green" }} />
          )}{" "}
          {name}
        </>
      );
    },
  },
  {
    title: "KL(Tấn)",
    dataIndex: "quantity",
    key: "quantity",
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: "Ghi chú",
    dataIndex: "originDescription",
    key: "originDescription",
  },
  {
    title: "Hoá đơn",
    dataIndex: "invoice",
    key: "invoice",
  },
  {
    title: "Khách hàng",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Ngày tạo",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => formatDate(text),
  },
];

export const costColumns: TableProps<CostDataType>["columns"] = [
  {
    title: "Mã",
    dataIndex: "driverId",
    key: "driverId",
  },
  {
    title: "Tài xế",
    dataIndex: "driverName",
    key: "driverName",
  },
  {
    title: "Loại chi phí",
    dataIndex: "expensesConfigType",
    key: "expensesConfigType",
  },
  {
    title: "Số tiền",
    dataIndex: "amount",
    key: "amount",
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
  },
  {
    title: "Hoá đơn",
    dataIndex: "invoice",
    key: "invoice",
  },
  {
    title: "Mã hành trình",
    dataIndex: "scheduleId",
    key: "scheduleId",
  },
  {
    title: "Ngày tạo",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => formatDate(text),
  },
];

export const tripColumns: TableProps<TripDataType>["columns"] = [
  {
    title: "Mã",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Ngày",
    dataIndex: "arrivalTime",
    key: "arrivalTime",
    render: (text) => formatDate(text),
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
  },
  {
    title: "Tuyến",
    dataIndex: "",
    key: "route",
    render: (record) => `${record.placeA} - ${record.placeB}`,
  },

  {
    title: "BS Xe",
    dataIndex: "truckLicense",
    key: "truckLicense",
  },
  {
    title: "Tài xế",
    dataIndex: "driverName",
    key: "driverName",
  },
  {
    title: "Số tiền",
    dataIndex: "amount",
    key: "amount",
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: "Ngày tạo",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => formatDate(text),
  },
];

export const reportColumns: TableProps<CostDataType>["columns"] = [
  {
    title: "Mã NV",
    dataIndex: "employee_code",
    key: "employee_code",
  },
  {
    title: "Tên NV",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Lương chuyển",
    dataIndex: "salary_receive",
    key: "salary_receive",
  },
  {
    title: "Lương khác",
    dataIndex: "bonus",
    key: "bonus",
  },
  {
    title: "Khoản trừ",
    dataIndex: "minus",
    key: "minus",
  },
  {
    title: "Thực nhận",
    dataIndex: "final_salary",
    key: "final_salary",
  },
];

export const truckColumns: TableProps<TruckDataType>["columns"] = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Biển số",
    dataIndex: "licensePlate",
    key: "licensePlate",
  },
  {
    title: "Loại xe",
    dataIndex: "type",
    key: "type",
    render: (type) => type === 0 ? "Xe tải" : "Mooc",
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (status) => (status === 0 ? "Đang sử dụng" : "Tạm dừng"),
  },
  {
    title: "Tài xế",
    dataIndex: "driverName",
    key: "driverName",
  },
  {
    title: "Ngày tạo",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => formatDate(text),
  },
];

export const employeeColumns: TableProps<EmployeeDataType>["columns"] = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (avatar) => <Avatar src={avatar} />,
  },
  {
    title: "Mã NV",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên NV",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "SĐT",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Ngày sinh",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
    render: (text) => formatDate(text),
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
  },
  {
    title: "Ngày tạo",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => formatDate(text),
  },
];

export const distanceColumns: TableProps<DistanceDataType>["columns"] = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Mã hành trình",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tuyến",
    dataIndex: "",
    key: "route",
    render: (record) => `${record.placeA} - ${record.placeB}`,
  },
  {
    title: "Chi phí",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
  },
];

export const costTypeColumns: TableProps<CostTypeDataType>["columns"] = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
  },
];
