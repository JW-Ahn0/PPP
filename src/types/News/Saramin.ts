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
  imgPath: string;
  conditionStr: string;
}

export interface RecuritDueDateProps {
  dateStr: string;
}

export interface SaraminCardProps {
  logoImgPath: string;
  titleStr: string;
  compnayNameStr: string;
  locationImgPath: string;

  conditionStr: string;
  dateStr: string;
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
