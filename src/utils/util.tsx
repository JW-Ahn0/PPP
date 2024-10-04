import { FetchParams } from "../types/Common";

export const fetchData = async <T,>({
  url,
  headers = {},
  params,
}: FetchParams): Promise<T> => {
  try {
    let fullUrl = url;
    let options: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...headers, // 추가 헤더 병합
      },
    };

    if (params) {
      const queryParams = new URLSearchParams(params).toString();
      fullUrl += `?${queryParams}`;
    }

    const response = await fetch(fullUrl, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data: T = await response.json(); // JSON 응답을 파싱
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
