export interface DayProps {
  /** 블로그 포스팅 날짜 */
  dayStr: string;
  /** size : default  | small */
  size?: string;
}

export interface ProfileProps {
  /** 프로필 이미지 경로 */
  profileImgPath: string;
  /** 작성자 이름 */
  name: string;
  /** size : default  | small */
  size?: string;
}
export interface ProfileDayContainerProps {
  dayStr: string;
  profileImgPath: string;
  name: string;
  size?: string;
}

export interface BadgeProps {
  /** 배지 텍스트 */
  badgeStr: string;
  /** size : default  | small */
  size?: string;
}

export interface BadgeContainerProps {
  tagList?: string[];
  size?: string;
}
export interface TitleProps {
  /** 블로그 포스팅 제목 */
  titleStr: string;
  /** size : default  | small */
  size?: string;
}

export interface ImgProps {
  /** 블로그 이미지 경로 */
  imgPath: string;
  /** size : default  | small */
  size?: string;
}

export interface BlogContentCardProps {
  imgPath: string;
  tagList?: string[];
  blogTitle: string;
  size?: string;
  dayStr: string;
  profileImgPath: string;
  name: string;
}
