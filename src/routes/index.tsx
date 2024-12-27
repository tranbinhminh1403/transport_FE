import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout";
import { WarehousePage } from "../pages/warehouse";
import { CostPage } from "../pages/cost";
import { ReportPage } from "../pages/report";
import { TripPage } from "../pages/trip";
import { TruckPage } from "../pages/truck";
import { DriverPage } from "../pages/drivers";
import { DistancePage } from "../pages/distances";
import { CostTypePage } from "../pages/costsType";
import { Homepage } from "../pages/homepage";
import { LoginPage } from "../pages/authen/login";
import { RegisterPage } from "../pages/authen/register";
import { APP } from "../config/constants";

const getApp = () => {
  const location = window.location.pathname;
  if (location.includes("/management")) {
    return APP.ADMIN;
  }
  return APP.COMPANY;
}

export const app = getApp();


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/management",
    element: <AppLayout />,
    children: [
      {
        path: "/management/warehouses",
        element: <WarehousePage />
      },
      {
        path: "/management/costs",
        element: <CostPage />
      },
      {
        path: "/management/trips",
        element: <TripPage />
      },
      {
        path: "/management/reports",
        element: <ReportPage />
      },
      {
        path: "/management/trucks",
        element: <TruckPage />
      },
      {
        path: "/management/drivers",
        element: <DriverPage />
      },
      {
        path: "/management/distances",
        element: <DistancePage />
      },
      {
        path: "/management/cost-types",
        element: <CostTypePage />
      }
    ]
  }
]);