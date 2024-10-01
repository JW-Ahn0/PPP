import type { Meta, StoryObj } from "@storybook/react";
import RepoCardSlide from "./RepoCardSlide";

const meta: Meta<typeof RepoCardSlide> = {
  title: "News/Github/RepoCardSlide",
  component: RepoCardSlide,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  repoImgPath: "/news/github_repo_img.png",
  repoUserProfileImgPath: "/news/github_user_profile.png",
  titleStr: "threejs-portfolio",
  descriptionStr: "Learn how to build 3D websites from scratch ...",
};

const testArguList = Array.from({ length: 6 }, () => ({ ...testArgus }));
export const defaultState: Story = {
  args: {
    RepoCardPropsList: testArguList,
  },
};
