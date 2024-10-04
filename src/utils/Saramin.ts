import { FetchParams } from "../types/Common";

import { SaraminCardProps, SaraminToResult } from "../types/News/Saramin";

const saraminURL = "https://oapi.saramin.co.kr/job-search";

const saraminHeaderParams: Record<string, any> = {
  accept: "application/json",
};

const saraminParams: Record<string, any> = {
  "access-key": "kxlsUCx7WhrZYnQCH7gHkIPPo2i1q3ORrrwYxx6T6X1b4c7epvBm",
  ind_cd: 3,
  sort: "rc",
};

export const saraminParam: FetchParams = {
  url: saraminURL,
  headers: saraminHeaderParams,
  params: saraminParams,
};

export const tempSaraminParam: FetchParams = {
  url: "/json/saramin.json",
};
function formatDeadline(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000); // Unix timestamp는 초 단위이므로 1000을 곱해 밀리초로 변환
  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    year: "2-digit", // 연도를 2자리 형식으로 설정
  };
  const formattedDate = date
    .toLocaleDateString("ko-KR", options)
    .replace(/\./g, "."); // 한국어 형식으로 변환

  const [year, month, day, weekday] = formattedDate.split(".");

  return `~${year}.${month}.${day}(${weekday})`; // 원하는 형식으로 변환
}

export function convertToSaraminItem(
  result: SaraminToResult
): SaraminCardProps[] {
  return result.jobs.job.map((item) => {
    const closeStr =
      item["close-type"].code === "1"
        ? formatDeadline(Number(item["expiration-timestamp"]))
        : item["close-type"].name;
    return {
      logoImgPath: "/news/saramin_logo.png",
      titleStr: item.position.title,
      compnayNameStr: item.company.detail.name,
      conditionStr:
        item.keyword.split(",")[0] +
        " | " +
        item.position["experience-level"].name,
      url: item.url,
      dateStr: closeStr,
    };
  });
}
