import styled from "@emotion/styled";
import { BadgeProps } from "../../../../types/Common";

// 사용할 수 있는 타입 목록
const BadgeTypes = {
  react: "React",
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
};
const Badge = ({ badgeStr }: BadgeProps) => {
  const lowerCaseBadgeStr = badgeStr.trim().toLowerCase();
  // badgeStr이 특정 타입에 속하면 해당 타입으로 설정, 그렇지 않으면 기본 타입 설정
  const badgeType =
    BadgeTypes[lowerCaseBadgeStr as keyof typeof BadgeTypes] || badgeStr;
  return <BadgeWrapper badgeType={badgeType}>{badgeType}</BadgeWrapper>;
};
export default Badge;
const BadgeWrapper = styled.button<{
  badgeType: string;
}>`
  border: none;
  border-radius: 6px;
  color: white;

  background-color: ${({ badgeType }) => {
    switch (badgeType) {
      case "React":
        return "var(--brand--turquoise)";
      case "JavaScript":
        return "var(--brand--yellow)";
      case "HTML":
        return "var(--brand--orange)";
      case "CSS":
        return "var(--brand--blue)";
      default:
        return "var(--brand--purple)";
    }
  }};
  padding: 4px 10px;
`;
