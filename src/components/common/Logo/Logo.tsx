import styled from "@emotion/styled";

const Logo = () => {
  return (
    <LogoWrapper>
      <img src="/logo.svg" alt="로고" />
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  cursor: pointer;
`;
