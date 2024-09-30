import type { Meta, StoryObj } from "@storybook/react";
import RepoCard from "./RepoCard";

const meta: Meta<typeof RepoCard> = {
  title: "News/Github/RepoCard",
  component: RepoCard,
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

export const defaultState: Story = {
  args: testArgus,
};

export const smallState: Story = {
  args: {
    ...testArgus,
    size: "small",
  },
};

export const defaultDarkModeState: Story = {
  args: {
    ...testArgus,
    isDarkMode: true,
  },
};

export const smallDarkModeState: Story = {
  args: {
    ...testArgus,
    isDarkMode: true,
    size: "small",
  },
};
