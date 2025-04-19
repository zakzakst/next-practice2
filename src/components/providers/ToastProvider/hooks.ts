import { useContext } from "react";
import { ToastActionContext, ToastStateContext } from "./ToastContext";

export const useToastAction = () => {
  return useContext(ToastActionContext);
};

export const useToastState = () => {
  return useContext(ToastStateContext);
};
