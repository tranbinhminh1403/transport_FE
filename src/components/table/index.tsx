import { Space, Table } from "antd";
import { DeleteFilled, EditFilled, EyeFilled } from "@ant-design/icons";
import React, { useState } from "react";
import { ContentTableProps } from "../../types/components/index.d";
import { EditModal } from "../modal/EditModal";
import { ViewModal } from "../modal/ViewModal";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from "antd";
const { confirm } = Modal;

export const ContentTable: React.FC<ContentTableProps> = ({ columns, dataSource, isLoading, error }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);

  const handleEdit = (record: any) => {
    setSelectedRecord(record);
    setIsEditModalOpen(true);
  };

  const handleDelete = (record: any) => {
    confirm({
      title: 'Are you sure you want to delete this record?',
      icon: <ExclamationCircleFilled />,
      content: 'This action cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        // Call API to delete record
        console.log('Delete record:', record);
      },
    });
  };

  const handleView = (record: any) => {
    setSelectedRecord(record);
    setIsViewModalOpen(true);
  };

  const actionColumn = {
    title: "Action",
    key: "action",
    render: (_: any, record: any) => (
      <Space size="middle">
        <EditFilled onClick={() => handleEdit(record)} style={{ cursor: 'pointer' }} />
        <DeleteFilled onClick={() => handleDelete(record)} style={{ cursor: 'pointer', color: '#ff4d4f' }} />
        <EyeFilled onClick={() => handleView(record)} style={{ cursor: 'pointer', color: '#1890ff' }} />
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
      <Table columns={tableColumns} dataSource={dataSource} rowKey="id" />

      <EditModal
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        onOk={() => {
          console.log('Submit edit:', selectedRecord);
          setIsEditModalOpen(false);
        }}
        record={selectedRecord}
      />

      <ViewModal
        open={isViewModalOpen}
        onCancel={() => setIsViewModalOpen(false)}
        record={selectedRecord}
      />
    </>
  );
};
