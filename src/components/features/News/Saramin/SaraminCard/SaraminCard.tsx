import styled from "@emotion/styled";
import SaraminLogo from "../Logo/Logo";
import RecuritTitle from "../RecuritTitle/RecuritTitle";
import RecuritCondition from "../RecuritCondition/RecuritCondition";
import RecuritDueDate from "../RecuritDueDate/RecuritDueDate";
import RecuritCompany from "../RecuritCompany/RecuritCompany";
import { SaraminCardProps } from "../../../../../types/News/Saramin";

const SaraminCard = ({
  logoImgPath,
  titleStr,
  compnayNameStr,
  locationImgPath,
  conditionStr,
  dateStr,
  size,
}: SaraminCardProps) => {
  const cardSize = size ? (size === "small" ? size : "default") : "default";
  return (
    <SaraminCardWrapper className={cardSize}>
      <SaraminLogo imgPath={logoImgPath}></SaraminLogo>
      <RecuritTitle titleStr={titleStr}></RecuritTitle>
      <RecuritCompany compnayNameStr={compnayNameStr}></RecuritCompany>
      <RecuritCondition
        imgPath={locationImgPath}
        conditionStr={conditionStr}
      ></RecuritCondition>
      <RecuritDueDate dateStr={dateStr}></RecuritDueDate>
    </SaraminCardWrapper>
  );
};

export default SaraminCard;
const SaraminCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid var(--brand--gray3);
  border-radius: 24px;
  padding: 32px;

  &.default {
    max-width: 500px;
  }
  &.small {
    max-width: 360px;
  }
`;
