import type { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";

const meta: Meta<typeof Profile> = {
  title: "News/Profile",
  component: Profile,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    profileImgPath: "/news/profile_img.png",
    name: "Vishal Yadav",
  },
};

export const smallState: Story = {
  args: {
    profileImgPath: "/news/profile_img.png",
    name: "Vishal Yadav",
    size: "small",
  },
};
