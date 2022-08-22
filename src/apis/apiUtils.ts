import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { apiUrl } from '@constants';

export interface ApiError {
  statusCode: number;
  errorMessage: string;
  info?: any;
}

export type ApiResult<T> = Promise<
  | {
      isSuccess: true;
      result: T;
    }
  | {
      isSuccess: false;
      result: ApiError;
    }
>;

const processError = (
  error: unknown,
  errorMessages?: Record<number, string>,
): ApiError => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // 요청 전송 성공, 서버 응답 성공, 그러나 상태 코드가 2xx 이외
      return {
        statusCode: error.response.status,
        errorMessage:
          errorMessages?.[error.response.status] ??
          '문제가 발생했어요. 다시 시도하거나 문의해 주세요.',
        info: error.response.data,
      };
    }

    if (error.request) {
      // 요청 전송 성공, 그러나 서버 응답 없음
      return {
        statusCode: -1,
        errorMessage:
          '서버와 연결하지 못했어요. 인터넷 연결 상태를 확인하고 다시 시도해 주세요.',
        info: error.request,
      };
    }
  }

  // 케이스 분류 실패
  return {
    statusCode: -1,
    errorMessage: '문제가 발생했어요. 다시 시도하거나 문의해 주세요.',
    info: error,
  };
};

axios.defaults.withCredentials = true;

export async function getAsync<T, D>(
  path: string,
  config?: AxiosRequestConfig,
  errorMessages?: Record<number, string>,
): ApiResult<T> {
  try {
    const response = await axios.get<T, AxiosResponse<T, D>, D>(path, {
      baseURL: apiUrl,
      responseType: 'json',
      ...config,
    });

    return { isSuccess: true, result: response.data };
  } catch (error) {
    return { isSuccess: false, result: processError(error, errorMessages) };
  }
}

export async function postAsync<T, D>(
  path: string,
  data?: D,
  config?: AxiosRequestConfig,
  errorMessages?: Record<number, string>,
): ApiResult<T> {
  try {
    const response = await axios.post<T, AxiosResponse<T, D>, D>(path, data, {
      baseURL: apiUrl,
      responseType: 'json',
      ...config,
    });

    return { isSuccess: true, result: response.data };
  } catch (error) {
    return { isSuccess: false, result: processError(error, errorMessages) };
  }
}

export async function deleteAsync<T, D>(
  path: string,
  config?: AxiosRequestConfig,
  errorMessages?: Record<number, string>,
): ApiResult<T> {
  try {
    const response = await axios.delete<T, AxiosResponse<T, D>, D>(path, {
      baseURL: apiUrl,
      responseType: 'json',
      ...config,
    });

    return { isSuccess: true, result: response.data };
  } catch (error) {
    return { isSuccess: false, result: processError(error, errorMessages) };
  }
}
