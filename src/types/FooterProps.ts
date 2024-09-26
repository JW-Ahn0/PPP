export interface FooterProps {
  /** Footer 저작권 관련 문구  */
  copyRightText: string;
}
export interface FooterLogoListProps {
  /** Footer 내에 로고 이미지 경로  */
  imgList: string[];
}

export interface FooterListItem {
  /** icon 이미지 경로 */
  icon: string;
  /** 사이드바 아이템 문구 */
  text: string;
  /** 선택시 하이라이트 주는 플래그 */
  isActive?: boolean;
}
