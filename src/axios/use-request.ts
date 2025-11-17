import { useState, useEffect, useCallback, useRef } from "react";
import type { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./request-config";

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface ApiResponse<T> extends ApiState<T> {
  onFetch: () => void;
  onCancel: () => void;
}

type RequestType = "get" | "post" | "put" | "delete";

/**
 * 自动管理 loading/error/data 的 API Hook
 *
 * @param url 请求地址
 * @param method HTTP 方法（默认 'get'）
 * @param payload 请求参数/数据
 */
export function useRequest<P, R>(
  url: string,
  method: RequestType = "get",
  payload?: P
): ApiResponse<R> {
  const [state, setState] = useState<ApiState<R>>({
    data: null,
    loading: false,
    error: null,
  });

  const controllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const config: AxiosRequestConfig = { signal: controller.signal };
      let response: R;

      switch (method) {
        case "get":
          response = await axiosInstance.get<P, R>(url, payload, config);
          break;
        case "post":
          response = await axiosInstance.post<P, R>(url, payload, config);
          break;
        case "put":
          response = await axiosInstance.put<P, R>(url, payload, config);
          break;
        case "delete":
          response = await axiosInstance.delete<P, R>(url, payload, config);
          break;
        default:
          throw new Error(`不支持的方法: ${method}`);
      }

      setState({ data: response, loading: false, error: null });
    } catch (err) {
      // 请求被取消时不更新状态
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      setState({ data: null, loading: false, error: err as Error });
    } finally {
      controllerRef.current = null;
    }
  }, [url, method, payload]);

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
    };
  }, [fetchData]);

  // 手动取消请求
  const cancel = useCallback(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  return {
    ...state,
    onFetch: fetchData,
    onCancel: cancel,
  };
}
