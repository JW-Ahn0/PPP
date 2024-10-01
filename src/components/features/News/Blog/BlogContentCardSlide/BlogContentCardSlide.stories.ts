import type { Meta, StoryObj } from "@storybook/react";
import BlogContentCardSlide from "./BlogContentCardSlide";

const meta: Meta<typeof BlogContentCardSlide> = {
  title: "News/Blog/BlogContentCardSlide",
  component: BlogContentCardSlide,
  tags: ["autodocs"],
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
};

const testArguList = Array.from({ length: 6 }, () => ({ ...testArgus }));
export const defaultState: Story = {
  args: {
    BlogContentCardPropsList: testArguList,
  },
};
