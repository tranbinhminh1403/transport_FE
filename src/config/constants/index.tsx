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
    dataIndex: "commodity",
    key: "commodity",
    render: (commodity, record) => {
      const isExport = record.status === "export";
      return (
        <>
          {isExport ? (
            <ArrowUpOutlined style={{ color: "red" }} />
          ) : (
            <ArrowDownOutlined style={{ color: "green" }} />
          )}{" "}
          {commodity}
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
    dataIndex: "note",
    key: "note",
  },
  {
    title: "Hoá đơn",
    dataIndex: "invoice",
    key: "invoice",
  },
  {
    title: "Khách hàng",
    dataIndex: "customer",
    key: "customer",
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
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Tài xế",
    dataIndex: "driver",
    key: "driver",
  },
  {
    title: "Loại chi phí",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Số tiền",
    dataIndex: "cost",
    key: "cost",
    sorter: (a, b) => a.cost - b.cost,
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
    dataIndex: "travel_code",
    key: "travel_code",
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
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Ngày",
    dataIndex: "receive_date",
    key: "receive_date",
    render: (text) => formatDate(text),
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
  },
  {
    title: "Tuyen",
    dataIndex: "route",
    key: "route",
  },

  {
    title: "BS Xe",
    dataIndex: "license_plate",
    key: "license_plate",
  },
  {
    title: "Tài xế",
    dataIndex: "driver",
    key: "driver",
  },
  {
    title: "Số tiền",
    dataIndex: "cost",
    key: "cost",
    sorter: (a, b) => a.cost - b.cost,
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
    dataIndex: "license_plate",
    key: "license_plate",
  },
  {
    title: "Loại xe",
    dataIndex: "type",
    key: "type",
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
    render: (status) => (status ? "Đang sử dụng" : "Tạm dừng"),
  },
  {
    title: "Tài xế",
    dataIndex: "driver",
    key: "driver",
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
    dataIndex: "employee_code",
    key: "employee_code",
  },
  {
    title: "Tên NV",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "SĐT",
    dataIndex: "phone_number",
    key: "phone_number",
  },
  {
    title: "Ngày sinh",
    dataIndex: "date_of_birth",
    key: "date_of_birth",
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
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Tuyến",
    dataIndex: "route",
    key: "route",
  },
  {
    title: "Chi phí",
    dataIndex: "cost",
    key: "cost",
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
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
  },
];
