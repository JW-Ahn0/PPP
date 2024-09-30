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

export interface BadgeProps {
  /** 배지 텍스트 */
  badgeStr: string;
  /** size : default  | small */
  size?: string;
}
