import { Space, Table } from "antd";
import { DeleteFilled, EditFilled, EyeFilled } from "@ant-design/icons";
import React from "react";

import { ContentData, ContentTableProps} from "../../types/components/index.d";

export const ContentTable: React.FC<ContentTableProps> = ({ columns, dataSource, isLoading, error }) => {
  const actionColumn = {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <EditFilled />
        <DeleteFilled />
        <EyeFilled />
      </Space>
    ),
  };

  const tableColumns = [...columns, actionColumn];

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Table columns={tableColumns} dataSource={dataSource as ContentData[]} rowKey="id" />
    </>
  );
};
