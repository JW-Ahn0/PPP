import type { Meta, StoryObj } from "@storybook/react";
import RepoCardContainer from "./RepoCardContainer";

const meta: Meta<typeof RepoCardContainer> = {
  title: "News/Github/RepoCardContainer",
  component: RepoCardContainer,
};

export default meta;
type Story = StoryObj<typeof meta>;
const testArgus = {
  repoImgPath: "/news/github_repo_img.png",
  repoUserProfileImgPath: "/news/github_user_profile.png",
  titleStr: "threejs-portfolio",
  descriptionStr: "Learn how to build 3D websites from scratch ...",
  url: "",
};
const testArguList = Array.from({ length: 6 }, () => ({ ...testArgus }));
export const defaultState: Story = {
  args: {
    RepoCardPropsList: testArguList,
  },
};
