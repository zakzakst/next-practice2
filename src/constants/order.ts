import { z } from "zod";

export const OrderTypeMap = {
  updatedAt: "更新日",
  starCount: "お気に入り数",
} as const;

export type OrderType = keyof typeof OrderTypeMap;

export const OrderTypeSchema = z.string().refine((targetType) => {
  const result = Object.keys(OrderTypeMap).find((type) => type === targetType);
  return !!result;
});

export const OrderTypeOptions = Object.entries(OrderTypeMap).map(
  ([value, label]) => ({
    value: value as OrderType,
    label,
  })
);
