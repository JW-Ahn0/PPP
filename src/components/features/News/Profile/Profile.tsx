import styled from "@emotion/styled";
import { ProfileProps } from "../../../../types/News/News";

const Profile = ({ profileImgPath, name, size }: ProfileProps) => {
  const profileSize = size ? size : "default";

  return (
    <ProfileWrapper className={profileSize}>
      <img src={profileImgPath} alt="프로필 이미지" />
      <span>{name}</span>
    </ProfileWrapper>
  );
};

export default Profile;
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--brand--gray2);

  &.default {
    img {
      width: 27px;
      height: 27px;
    }
    font-size: 12px;
    gap: 9px;
  }
  &.small {
    img {
      width: 19px;
      height: 19px;
    }
    font-size: 9px;
    gap: 6px;
  }
`;
