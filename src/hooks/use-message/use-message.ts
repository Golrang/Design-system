import { message } from "antd";
import { useCallback } from "react";

export const useMessage = () => {
  return {
    success: useCallback((text: string, timeout?: number) => {
      message.success(text, timeout ?? 10);
    }, []),
    error: useCallback((text: string, timeout?: number) => {
      message.error(text, timeout ?? 10);
    }, []),
    warning: useCallback((text: string, timeout?: number) => {
      message.warning(text, timeout ?? 10);
    }, []),
  };
};
