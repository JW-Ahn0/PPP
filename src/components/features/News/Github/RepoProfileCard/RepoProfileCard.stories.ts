import type { Meta, StoryObj } from "@storybook/react";
import RepoProfileCard from "./RepoProfileCard";
const meta: Meta<typeof RepoProfileCard> = {
  title: "News/Github/RepoProfileCard",
  component: RepoProfileCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  repoImgPath: "/news/github_repo_img.png",
  repoUserProfileImgPath: "/news/github_user_profile.png",
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
