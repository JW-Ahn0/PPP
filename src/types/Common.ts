export interface TextButtonProps {
  /** Button 내의 텍스트*/
  textStr: string;
  /** 선택시 하이라이트 주는 플래그 */
  isActive?: boolean;
}

export interface IconButtonProps {
  /** icon 이미지 경로 */
  iconPath: string;
  /** 선택시 하이라이트 주는 플래그 */
  isActive?: boolean;
}

export interface CheckBoxProps {
  /** 체크박스 콘텐츠 내용 */
  textStr: string;
  /** 체크박스 체크 유무 */
  isChecked?: boolean;
}

export interface SelectBoxProps {
  /** 셀렉트 박스 이름 */
  name?: string;
  /** 셀렉트 박스 아이디 */
  id: string;
  /** 옵션 리스트 */
  optionList: string[];
}
