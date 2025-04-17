import { useContext } from "react";
import {
  AlertDialogActionContext,
  AlertDialogStateContext,
} from "./AlertDialogContext";

export const useAlertDialogAction = () => {
  return useContext(AlertDialogActionContext);
};

export const useAlertDialogState = () => {
  return useContext(AlertDialogStateContext);
};
