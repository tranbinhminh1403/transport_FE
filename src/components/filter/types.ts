import { ReactNode } from "react";

export type MenuKeyType = 
  | "warehouses" 
  | "costs" 
  | "trips" 
  | "reports" 
  | "trucks" 
  | "drivers" 
  | "distances" 
  | "cost-types";

export interface FilterConfig {
  placeHolder1?: string;
  placeHolder2?: string;
  showDateRange?: boolean;
  showSecondSelect?: boolean;
  showImportButton?: boolean;
  showExportButton?: boolean;
  showCreateButton?: boolean;
  options?: {
    select1?: { label: string; value: string }[];
    select2?: { label: string; value: string }[];
  };
}

export interface FilterDisplayProps {
  config: FilterConfig;
  children?: ReactNode;
  warehouseData?: {
    status: string;
  }[];
} 