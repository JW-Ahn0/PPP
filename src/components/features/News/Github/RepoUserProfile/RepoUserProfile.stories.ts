import type { Meta, StoryObj } from "@storybook/react";
import RepoUserProfile from "./RepoUserProfile";

const meta: Meta<typeof RepoUserProfile> = {
  title: "News/Github/RepoUserProfile",
  component: RepoUserProfile,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  imgPath: "/news/github_user_profile.png",
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
