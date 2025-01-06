import { Modal, Form } from "antd";
import { ContentData } from "../../types/components";

interface EditModalProps {
  open: boolean;
  onCancel: () => void;
  onOk: () => void;
  record: ContentData | null;
}

export const EditModal = ({ open, onCancel, onOk, record }: EditModalProps) => {
  return (
    <Modal
      title="Edit Record"
      open={open}
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form layout="vertical">
        {/* Form fields will be dynamically rendered based on record type */}
        <pre>{JSON.stringify(record, null, 2)}</pre>
      </Form>
    </Modal>
  );
}; 