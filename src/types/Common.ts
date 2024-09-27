export interface TextButtonProps {
  /** Button 내의 텍스트*/
  textStr: string;
  /** 선택시 하이라이트 주는 플래그 */
  isActive?: boolean;
  /** 호버할 때 배경색 변경 되게 할건지 선택하는 플래그 */
  isHoverEnabled?: boolean;
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

export interface MsgProps {
  /** 경고 또는 체크 인지 여부에 따라 이미지 변경 */
  isWarning: boolean;
  /** 알림 메시지 내용 */
  MsgStr: string;
}

export interface AlertProps {
  /** 경고 또는 체크 인지 여부에 따라 이미지 변경 */
  isWarning: boolean;
  /** 알림 메시지 내용 */
  MsgStr: string;
}
