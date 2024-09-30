import type { Meta, StoryObj } from "@storybook/react";
import Img from "./Img";

const meta: Meta<typeof Img> = {
  title: "News/Img",
  component: Img,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    imgPath: "/news/blog_img.png",
  },
};

export const smallState: Story = {
  args: {
    imgPath: "/news/blog_img.png",
    size: "small",
  },
};
