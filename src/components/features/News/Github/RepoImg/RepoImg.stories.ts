import type { Meta, StoryObj } from "@storybook/react";
import RepoImg from "./RepoImg";

const meta: Meta<typeof RepoImg> = {
  title: "News/Github/RepoImg",
  component: RepoImg,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  imgPath: "/news/github_repo_img.png",
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
