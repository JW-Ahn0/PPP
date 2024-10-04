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
  conditionStr,
  dateStr,
  url,
  size,
}: SaraminCardProps) => {
  const cardSize = size ? (size === "small" ? size : "default") : "default";
  return (
    <SaraminCardWrapper className={cardSize} href={url} target="_blank">
      <SaraminLogo imgPath={logoImgPath}></SaraminLogo>
      <RecuritTitle titleStr={titleStr}></RecuritTitle>
      <RecuritCompany compnayNameStr={compnayNameStr}></RecuritCompany>
      <RecuritCondition conditionStr={conditionStr}></RecuritCondition>
      <RecuritDueDate dateStr={dateStr}></RecuritDueDate>
    </SaraminCardWrapper>
  );
};

export default SaraminCard;
const SaraminCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid var(--brand--gray3);
  border-radius: 24px;
  padding: 32px;

  text-decoration: none;
  &:visited {
    color: inherit;
  }

  &.default {
    max-width: 500px;
  }
  &.small {
    max-width: 360px;
  }
`;
