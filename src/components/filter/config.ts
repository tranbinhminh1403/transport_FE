import { FilterConfig } from "./types";

export const filterConfigs: Record<string, FilterConfig> = {
  "warehouses": {
    placeHolder1: "Kho",
    placeHolder2: "Loại GD",
    showDateRange: true,
    showSecondSelect: true,
    showImportButton: true,
    showExportButton: true,
  },
  "costs": {
    placeHolder1: "Loại chi phí",
    placeHolder2: "Chọn xe",
    showDateRange: true,
    showSecondSelect: true,
    showCreateButton: true,
  },
  "trips": {
    placeHolder1: "Chọn tài xế",
    placeHolder2: "Chọn xe",
    showDateRange: true,
    showSecondSelect: true,
    showCreateButton: true,
  },
  "reports": {

    showDateRange: true,
    showSecondSelect: false,
    showCreateButton: false,
    showImportButton: false,
    showExportButton: true,
  },
  "trucks": {
    placeHolder1: "Xe tải",
    showDateRange: false,
    showSecondSelect: false,
    showCreateButton: true,
  },
  "drivers": {
    placeHolder1: "Lái xe",
    showDateRange: false,
    showSecondSelect: false,
    showCreateButton: true,
  },
  "distances": {
    placeHolder1: "Hành trình",
    showDateRange: false,
    showSecondSelect: false,
    showCreateButton: true,
  },
  "cost-types": {
    placeHolder1: "Loại chi phí",
    showDateRange: false,
    showSecondSelect: false,
    showCreateButton: true,
  }
}; 