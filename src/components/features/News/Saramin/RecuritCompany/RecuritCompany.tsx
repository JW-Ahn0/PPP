import styled from "@emotion/styled";
import { RecuritCompanyProps } from "../../../../../types/News/Saramin";

const RecuritCompany = ({ compnayNameStr }: RecuritCompanyProps) => {
  return <RecuritCompanyWrapper>{compnayNameStr}</RecuritCompanyWrapper>;
};

export default RecuritCompany;
const RecuritCompanyWrapper = styled.span`
  font-size: 18px;
  text-decoration: underline;
`;
