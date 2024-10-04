import { SwiperRef } from "swiper/react";
import { Size } from "../Common";

export interface LogoProps {
  imgPath: string;
}

export interface RecuritTitleProps {
  titleStr: string;
}

export interface RecuritCompanyProps {
  compnayNameStr: string;
}
export interface RecuritConditionProps {
  conditionStr: string;
}

export interface RecuritDueDateProps {
  dateStr: string;
}

export interface SaraminCardProps {
  logoImgPath: string;
  titleStr: string;
  compnayNameStr: string;
  conditionStr: string;
  dateStr: string;
  url: string;
  size?: Size;
}
export interface SaraminCardSlideProps {
  SaraminCardPropsList: SaraminCardProps[];
  sliderRef: React.RefObject<SwiperRef>; // SwiperRef로 타입을 변경
}

export interface SaraminCardContainerProps {
  SaraminCardPropsList: SaraminCardProps[];
}

export interface SaraminCardListHeaderProps {
  sliderRef: React.RefObject<SwiperRef>;
}

export interface SaraminToResult {
  jobs: {
    job: JobItem[];
  };
}

interface JobItem {
  url: string;
  company: CompanyDetail;
  position: {
    title: string;
    /*
  경력코드
  1 : 신입
  2 : 경력
  3 : 신입/경력
  0 : 경력무관
  */
    "experience-level": {
      code: number;
      name: string;
    };
  };

  /*
  마감일 형식
  1 : 접수 마감일
  2 : 채용시
  3 : 상시
  4 : 수시
  */
  "close-type": {
    code: string;
    name: string;
  };

  //마감일의 Unix timestamp
  "expiration-timestamp": string;

  keyword: string;
}
interface CompanyDetail {
  detail: {
    href: string;
    name: string;
  };
}
