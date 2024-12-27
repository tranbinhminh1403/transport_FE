import { DescriptionType } from "../../types/components/index.d";


export const descriptionConfig = {
  "warehouses": DescriptionType.WAREHOUSE,
  "costs": DescriptionType.COST,
  "trips": DescriptionType.TRIP,
  "reports": null,
  "trucks": DescriptionType.TRUCK,
  "drivers": DescriptionType.DRIVER,
  "distances": DescriptionType.DISTANCE,
  "cost-types": DescriptionType.COST_TYPE
} as const; 