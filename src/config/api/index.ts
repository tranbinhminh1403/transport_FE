import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { notifyError } from "../../components/custom/Notification";
import { store } from "../../store";
import { app } from "../../routes";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { baseUrl, NETWORK_CONFIG } from "../constants";
import { BaseResponse } from "../../types";
import { logout } from "../../store/slice/userActions";

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}

  type ConfigOptions = {
      token?: string,
      withToken?: boolean,
      isFormData?: boolean,
      headerValueType?: string,
      hiddenError?: boolean
  }

const displayError = (errorMessage: string) => {
    notifyError("Something went wrong", errorMessage, 4);
};

const getAuthorization = (defaultOptions: ConfigOptions | undefined) => {
  if (defaultOptions?.withToken === false) return;
  if (defaultOptions?.token) {
    return `Bearer ${defaultOptions.token}`;
  }

  const state = store.getState();
  const token = state.user?.[1]?.token;
  // console.log("Token from local storage:", token);
  return token ? `Bearer ${token}` : undefined;
}


export const baseQuery: BaseQueryFn = async (args, api) => {
  const { url, method, data, options } = args;

  try {
    const response = await axios({
      baseURL: baseUrl,
      url,
      method,
      data,
      headers: {
        Accept: options?.isFormData ? "multipart/form-data" : "application/json",
        Authorization: getAuthorization(options),
      },
      timeout: NETWORK_CONFIG.TIMEOUT,
      withCredentials: NETWORK_CONFIG.WITH_CREDENTIALS,

    });

    return { data: response.data };
  } catch (error) {
    const err = error as AxiosError<BaseResponse<any>>;
    if (err.response?.status === 401) {
      displayError("token expired");
      setTimeout(() => {
        api.dispatch(logout());
      }, 500);
      return { error: { status: 401, message: "token expired" } };
    }

    if (err.code === 'ERR_NETWORK') {
      displayError("Network error");
      return { error: { status: 500, message: "Network error" } };
    }

    if (err.response?.data.message && !options?.hiddenError) {
      displayError(err.response.data.message);
    }

    return { error: { status: 500, message: "Something went wrong" } };
  }
}

export const fetcher = <T>(
  config: AxiosRequestConfig & {
    method: HttpMethod;
  },
  options?: ConfigOptions,
) => {
  console.log("Request Config:", config);
  // console.log("Request Method:", config.method);
  // console.log("Request URL:", config.url);
  // console.log("Request Data:", config.data);
  console.log("Request Headers:", {
    Accept: options?.headerValueType ?? (options?.isFormData ? 'multipart/form-data' : 'application/json'),
    Authorization: getAuthorization(options),
  });

  return new Promise<T>((resolve, reject) => {
    axios
      .create({
        baseURL: `${import.meta.env.VITE_BASE_API_URL}`,
        headers: {
          Accept: options?.headerValueType ?? (options?.isFormData ? 'multipart/form-data' : 'application/json'),
          Authorization: getAuthorization(options),
        },
        timeout: NETWORK_CONFIG.TIMEOUT,
        withCredentials: NETWORK_CONFIG.WITH_CREDENTIALS,
      })
      .request<T | undefined, AxiosResponse<T>>(config)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response.data);
        }
      })
      .catch((error: AxiosError<BaseResponse<T>>) => {
        if (error.response?.status && +error.response?.status === 401) {
          displayError('token_expire');
          setTimeout(() => {
            logout();
          }, 500);
          return;
        }
        if (error.code === 'ERR_NETWORK') {
          displayError('Please check internet connection!');
          reject(error);
          return;
        }
        if (error.response?.data.message && !options?.hiddenError) {
          displayError(error.response?.data.message);
        }
        reject(error);
      });
  });
};