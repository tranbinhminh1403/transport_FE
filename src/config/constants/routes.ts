export const PUBLIC_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
};

export const PRIVATE_ROUTES = {
  BASE: "/",
  ADMIN: {
    BASE: "/management",
    WAREHOUSE: "/warehouse",
    COST: "/cost",
  },
  MANAGER: {
    BASE: "/management",
    WAREHOUSE: "/warehouse",
    COST: "/cost",
  },
  ACCOUNTANT: {
    BASE: "/reports",
    SALARY: "/reports/salary",
    COST: "/reports/cost",
  },
  DRIVER: {
    BASE: "/driver",
    PROFILE: "/driver/profile",
    TRIP: "/driver/trip",
    SALLARY: "/driver/sallary",
  },
};

