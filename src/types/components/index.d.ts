export type MenuItem = Required<MenuProps>["items"][number];

interface ColumnType {
  title: string;
  dataIndex: string;
  key: string;
  // Add other properties as needed
}

export interface ContentTableProps {
  columns: ColumnType[];
  dataSource: TableDataType[];
  isLoading: boolean;
  error: Error | null;
}

export enum DescriptionType {
  WAREHOUSE = "Tồn kho",
  COST = "Tổng chi phí",
  TRIP = "Tổng tiền hành trình",
  TRUCK = "Tổng số xe",
  DRIVER = "Tổng số lái xe",
  DISTANCE  = "Tổng số",
  COST_TYPE = "Tổng số loại chi phí"
}

export type ContentData =
  | WarehouseDataType
  | CostDataType
  | TripDataType
  | ReportDataType
  | TruckDataType
  | EmployeeDataType
  | DistanceDataType
  | CostTypeDataType;

export interface WarehouseDataType {
  id: number;
  commodity: string;
  quantity: number;
  status: string;
  note: string;
  invoice: string;
  customer: string;
  supervisor: string;
  createdAt: string;
}

export interface CostDataType {
  id: number;
  code: string;
  driver: string;
  travel_code: string;
  type: string;
  cost: number;
  note: string;
  invoice: string;
  createdAt: string;
  status: string;
}

export interface TripDataType {
  id: number;
  code: string;
  receive_date: string;
  route: string;
  note: string;
  license_plate: string;
  driver: string;
  cost: number;
  createdAt: string;
}

export interface ReportDataType {
  id: number;
  employee_code: string;
  employee_name: string;
  salary_receive: number;
  bonus: number;
  minus: number;
  final_salary: number;
}

export interface TruckDataType {
  id: number;
  license_plate: string;
  type: string;
  note: string;
  status: boolean;
  driver: string;
  createdAt: string;
}

export interface EmployeeDataType {
  id: number;
  avatar: string;
  employee_code: string;
  name: string;
  note: string;
  createdAt: string;
  phone_number: string;
  date_of_birth: string;
}

export interface DistanceDataType {
  id: number;
  code: string;
  route: string;
  cost: number;
  note: string;
}

export interface CostTypeDataType {
  id: number;
  name: string;
  note: string;
}
