import type { Meta, StoryObj } from "@storybook/react";
import BadgeContainer from "./BadgeContainer";

const meta: Meta<typeof BadgeContainer> = {
  title: "News/Blog/BadgeContainer",
  component: BadgeContainer,
  tags: ["autodocs"],
};

const testTagList = ["javascript", "react", "html", "css"];
export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    tagList: testTagList,
  },
};

export const smallState: Story = {
  args: {
    tagList: testTagList,
    size: "small",
  },
};
