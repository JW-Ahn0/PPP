import styled from "@emotion/styled";
import { RecuritTitleProps } from "../../../../../types/News/Saramin";

const RecuritTitle = ({ titleStr }: RecuritTitleProps) => {
  return <RecuritTitleWrapper>{titleStr}</RecuritTitleWrapper>;
};

export default RecuritTitle;
const RecuritTitleWrapper = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
`;
