import { Modal, Descriptions } from "antd";
import { ContentData } from "../../types/components";
import { formatDate } from "../../utils/formatDate";

interface ViewModalProps {
  open: boolean;
  onCancel: () => void;
  record: ContentData | null;
}

export const ViewModal = ({ open, onCancel, record }: ViewModalProps) => {
  if (!record) return null;

  const renderDescriptionItems = () => {
    // Skip these fields as they're usually internal
    const skipFields = ['key', 'id'];

    return Object.entries(record).map(([key, value]) => {
      if (skipFields.includes(key)) return null;

      // Format the key for display
      const label = key
        .split(/(?=[A-Z])/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      // Format the value based on its type
      let displayValue = value;
      if (typeof value === 'boolean') {
        displayValue = value ? 'Yes' : 'No';
      } else if (key.toLowerCase().includes('date') || key.toLowerCase().includes('time') || key === 'createdAt') {
        displayValue = formatDate(value);
      } else if (typeof value === 'number') {
        if (key.toLowerCase().includes('amount') || key.toLowerCase().includes('cost')) {
          displayValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
          }).format(value);
        }
      }

      return (
        <Descriptions.Item key={key} label={label}>
          {displayValue || '-'}
        </Descriptions.Item>
      );
    });
  };

  return (
    <Modal
      title="Xem chi tiết"
      open={open}
      onCancel={onCancel}
      footer={null}
      width={700}
    >
      <Descriptions
        bordered
        column={1}
        size="small"
        labelStyle={{ fontWeight: 'bold' }}
      >
        {renderDescriptionItems()}
      </Descriptions>
    </Modal>
  );
}; 