import { Toast } from "./Toast";
import {
  ToastActionContext,
  ToastState,
  ToastStateContext,
  ToastStyle,
} from "./ToastContext";
import { useToastProvider } from "./useToastProvider";
export { useToastAction, useToastState } from "./hooks";
export type { ToastState, ToastStyle };

type ToastProviderProps = {
  children: React.ReactNode;
  defaultState?: Partial<ToastState>;
};

export const ToastProvider = ({
  children,
  defaultState,
}: ToastProviderProps) => {
  const { isShown, message, style, showToast, hideToast } =
    useToastProvider(defaultState);
  return (
    <ToastStateContext.Provider value={{ isShown, message, style }}>
      <ToastActionContext.Provider value={{ showToast, hideToast }}>
        {children}
        {isShown && <Toast message={message} style={style} />}
      </ToastActionContext.Provider>
    </ToastStateContext.Provider>
  );
};
