import type { Meta, StoryObj } from "@storybook/react";
import BlogContentCard from "./BlogContentCard";

const meta: Meta<typeof BlogContentCard> = {
  title: "News/BlogContentCard",
  component: BlogContentCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgs = {
  dayStr: "Sep 13, 2022",
  profileImgPath: "/news/profile_img.png",
  name: "Vishal Yadav",
  imgPath: "/news/blog_img.png",
  tagList: ["javascript", "react", "html", "css"],
  blogTitle:
    "Launching Oxy-UI: A Powerful and Modern UI Library for Your WebProjects",
};
export const defaultState: Story = {
  args: testArgs,
};

export const smallState: Story = {
  args: { ...testArgs, size: "small" },
};
