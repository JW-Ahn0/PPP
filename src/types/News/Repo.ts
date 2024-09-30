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
  /** 다크모드 유무 */
  isDarkMode?: boolean;
  /** size : default  | small */
  size?: Size;
}
