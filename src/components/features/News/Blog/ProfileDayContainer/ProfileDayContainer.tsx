import styled from "@emotion/styled";
import Profile from "../Profile/Profile";
import Day from "../Day/Day";
import { ProfileDayContainerProps } from "../../../../../types/News/Blog";

const ProfileDayContainer = ({
  dayStr,
  profileImgPath,
  name,
  size,
}: ProfileDayContainerProps) => {
  const profileDayContainerSize = size
    ? size === "small"
      ? size
      : "default"
    : "default";
  return (
    <ProfileDayContainerWrapper className={profileDayContainerSize}>
      <Profile profileImgPath={profileImgPath} name={name}></Profile>
      <Day dayStr={dayStr}></Day>
    </ProfileDayContainerWrapper>
  );
};

export default ProfileDayContainer;
const ProfileDayContainerWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
