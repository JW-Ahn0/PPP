import { SwiperRef } from "swiper/react";
import { Size } from "../Common";

export interface DayProps {
  /** 블로그 포스팅 날짜 */
  dayStr: string;
  /** size : default  | small */
  size?: Size;
}

export interface ProfileProps {
  /** 프로필 이미지 경로 */
  profileImgPath: string;
  /** 작성자 이름 */
  name: string;
  /** size : default  | small */
  size?: Size;
}
export interface ProfileDayContainerProps {
  dayStr: string;
  profileImgPath: string;
  name: string;
  size?: Size;
}

export interface BadgeProps {
  /** 배지 텍스트 */
  badgeStr: string;
  /** size : default  | small */
  size?: Size;
}

export interface BadgeContainerProps {
  tagList?: string[];
  size?: Size;
}
export interface TitleProps {
  /** 블로그 포스팅 제목 */
  titleStr: string;
  /** size : default  | small */
  size?: Size;
}

export interface ImgProps {
  /** 블로그 이미지 경로 */
  imgPath: string;
  /** size : default  | small */
  size?: Size;
}

export interface BlogContentCardProps {
  imgPath: string;
  tagList?: string[];
  blogTitle: string;
  dayStr: string;
  profileImgPath: string;
  name: string;
  size?: Size;
}
export interface BlogContentCardSlideProps {
  BlogContentCardPropsList: BlogContentCardProps[];
  sliderRef: React.RefObject<SwiperRef>; // SwiperRef로 타입을 변경
}
export interface BlogContentCardContainerProps {
  BlogContentCardPropsList: BlogContentCardProps[];
}
