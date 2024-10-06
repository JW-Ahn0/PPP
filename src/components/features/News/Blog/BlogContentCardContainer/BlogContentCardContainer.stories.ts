import type { Meta, StoryObj } from "@storybook/react";
import BlogContentCardContainer from "./BlogContentCardContainer";

const meta: Meta<typeof BlogContentCardContainer> = {
  title: "News/Blog/BlogContentCardContainer",
  component: BlogContentCardContainer,
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  dayStr: "Sep 13, 2022",
  profileImgPath: "/news/profile_img.png",
  name: "Vishal Yadav",
  imgPath: "/news/blog_img.png",
  tagList: ["javascript", "react", "html", "css"],
  blogTitle:
    "Launching Oxy-UI: A Powerful and Modern UI Library for Your WebProjects",
  url: "",
};

const testArguList = Array.from({ length: 6 }, () => ({ ...testArgus }));
export const defaultState: Story = {
  args: {
    BlogContentCardPropsList: testArguList,
  },
};
