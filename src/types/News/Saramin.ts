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
  size: Size;
}
