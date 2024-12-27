import { MenuItem } from "../../types/components";

import {
    PayCircleOutlined,
    PieChartOutlined,
    SolutionOutlined,
    TruckOutlined,
    UserOutlined,
  } from "@ant-design/icons";

export const items: MenuItem[] = [
    {label: "Quản lý kho", key: "warehouses", icon: <PieChartOutlined />},
    {label: "Quản lý chi phí", key: "costs", icon: <PayCircleOutlined />},
    {label: "Quản lý lịch trình", key: "trips", icon: <TruckOutlined />},
    {label: "Báo cáo", key: "reports", icon: <SolutionOutlined />},
    {
      label: "Cấu hình",
      key: "config",
      icon: <UserOutlined />,
      children: [
        { label: "Danh sách xe tải", key: "trucks" },
        { label: "Quản lý lái xe", key: "drivers" },
        { label: "DS hành trình", key: "distances" },
        { label: "Loại chi phí", key: "cost-types" },
      ],
    },
  ];
