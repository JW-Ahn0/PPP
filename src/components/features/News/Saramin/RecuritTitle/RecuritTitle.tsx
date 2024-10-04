import styled from "@emotion/styled";
import { RecuritTitleProps } from "../../../../../types/News/Saramin";

const RecuritTitle = ({ titleStr }: RecuritTitleProps) => {
  return <RecuritTitleWrapper>{titleStr}</RecuritTitleWrapper>;
};

export default RecuritTitle;
const RecuritTitleWrapper = styled.p`
  display: -webkit-box; /* flexbox의 기능을 사용 */
  -webkit-box-orient: vertical; /* 수직 방향으로 정렬 */
  overflow: hidden; /* 넘치는 부분 숨김 */
  -webkit-line-clamp: 2; /* 표시할 줄 수 */

  min-height: 51px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;

  color: black;
`;
