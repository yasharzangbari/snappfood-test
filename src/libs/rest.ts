import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import { isDevMod } from "./utils";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

interface AxiosRequestConfigType extends AxiosRequestConfig {
  urlParams?: {
    [key: string]: string;
  };
}

export const setRestParams = (
  request: AxiosRequestConfigType,
  authorization?: boolean
): AxiosRequestConfig => {
  if (request.urlParams !== undefined) {
    for (let param in request.urlParams) {
      request.url = request.url?.replace(
        `{{${param}}}`,
        request.urlParams[param]
      );
    }
  }
  if (authorization) {
    request.headers = {
      ...request.headers,
      authorization: ``,
    };
  }
  delete request.urlParams;
  return request;
};

const handleOnError = (error: any): void => {
  if (isDevMod) {
    console.error(error);
  }
};

export const restHandler = (
  request: AxiosRequestConfigType,
  authorization: boolean = true
): AxiosPromise => {
  return new Promise((resolve, reject) => {
    if (authorization) {
      setTimeout(
        () => restHandler(request, authorization).then(resolve).catch(reject),
        1000
      );
      return;
    }
    request = setRestParams(request, authorization);
    const handler = axios(request);
    handler.then(resolve);
    handler.catch((error: any) => {
      reject(error);
      handleOnError(error);
    });
  });
};
