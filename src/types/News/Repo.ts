import { SwiperRef } from "swiper/react";
import { Size } from "../Common";

export interface RepoTitleProps {
  /** 레포 타이틀 */
  titleStr: string;
  /** 다크모드 유무 */
  isDarkMode?: boolean;
  /** size : default  | small */
  size?: Size;
}

export interface RepoDescriptionProps {
  /** 레포 설명 */
  descriptionStr: string;
  /** 다크모드 유무 */
  isDarkMode?: boolean;
  /** size : default  | small */
  size?: Size;
}
export interface RepoContentCardProps {
  /** 레포 타이틀 */
  titleStr: string;
  /** 레포 설명 */
  descriptionStr: string;
  /** 다크모드 유무 */
  isDarkMode?: boolean;
  /** size : default  | small */
  size?: Size;
}

export interface RepoImgProps {
  /** 깃허브 레포 이미지 경로 */
  imgPath: string;
  /** size : default  | small */
  size?: Size;
}
export interface RepoUserProfileImgProps {
  /** 레포 유저 프로필 이미지 */
  imgPath: string;
  /** size : default  | small */
  size?: Size;
}

export interface RepoProfileCardProps {
  /** 깃허브 레포 이미지 경로 */
  repoImgPath: string;
  /** 레포 유저 프로필 이미지 */
  repoUserProfileImgPath: string;
  /** size : default  | small */
  size?: Size;
}

export interface RepoCardProps {
  /** 깃허브 레포 이미지 경로 */
  repoImgPath: string;
  /** 레포 유저 프로필 이미지 */
  repoUserProfileImgPath: string;
  /** 레포 타이틀 */
  titleStr: string;
  /** 레포 설명 */
  descriptionStr: string;
  /** 레포 링크 */
  url: string;
  /** 다크모드 유무 */
  isDarkMode?: boolean;
  /** size : default  | small */
  size?: Size;
}

export interface RepoCardSlideProps {
  RepoCardPropsList: RepoCardProps[];
  sliderRef: React.RefObject<SwiperRef>; // SwiperRef로 타입을 변경
}

export interface RepoCardContainerProps {
  RepoCardPropsList: RepoCardProps[];
}

export interface RepoToResult {
  items: RepoItem[];
}

interface Owner {
  login: string;
  avatar_url: string;
}
interface RepoItem {
  name: string;
  description: string;
  html_url: string;
  owner: Owner;
}
