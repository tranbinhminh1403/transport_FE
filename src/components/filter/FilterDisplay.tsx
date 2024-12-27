import { Button, Col, Row, Select, DatePicker } from "antd";
import { ImportOutlined, ExportOutlined, PlusOutlined } from "@ant-design/icons";
import { FilterDisplayProps } from "./types";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/slice/filterSlice';
import { RootState } from '../../store';

const { RangePicker } = DatePicker;

export const FilterDisplay = ({ config }: FilterDisplayProps) => {
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.filter);

  const {
    placeHolder1,
    placeHolder2,
    showDateRange = true,
    showSecondSelect = true,
    showImportButton = true,
    showExportButton = true,
    showCreateButton = true,
    options
  } = config || {};

  const statusOptions = [
    { label: "Tất cả", value: "" },
    { label: "Nhập kho", value: "import" },
    { label: "Xuất kho", value: "export" }
  ];

  const handleStatusChange = (value: string) => {
    dispatch(setFilter({ status: value || null }));
  };

  return (
    <Row className={styles.filter}>
      <Col
        className={styles.filterItem}
        xl={8}
        lg={8}
        md={12}
        sm={24}
        xs={24}
      >
        {placeHolder1 && (
          <Select
            style={{ width: "40%" }}
            placeholder={placeHolder1}
            options={options?.select1 || [
              { label: "Kho 1", value: "1" },
              { label: "Kho 2", value: "2" },
            ]}
          />
        )}
        {showSecondSelect && placeHolder2 && (
          <Select
            style={{ width: "40%" }}
            placeholder={placeHolder2}
            value={filterState.status || undefined}
            onChange={handleStatusChange}

            options={placeHolder2 === "Loại GD" ? statusOptions : options?.select2}
          />
        )}
      </Col>

      {showDateRange && (
        <Col
          className={styles.filterItem}
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
        >
          <RangePicker placeholder={["Từ ngày", "Đến ngày"]} showTime />
        </Col>
      )}

      <Col
        className={styles.filterItem}
        xl={8}
        lg={8}
        md={24}
        sm={24}
        xs={24}
      >
        {showImportButton && (
          <Button
            type="primary"
            icon={<ImportOutlined />}
            iconPosition="start"
          >
            Import
          </Button>
        )}
        {showExportButton && (
          <Button type="primary" icon={<ExportOutlined />} iconPosition="start">
            Export
          </Button>
        )}
        {showCreateButton && (
          <Button type="primary" icon={<PlusOutlined />} iconPosition="start">
            Tạo mới
          </Button>
        )}
      </Col>
    </Row>
  );
}; 