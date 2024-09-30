import type { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta: Meta<typeof Title> = {
  title: "News/Blog/Title",
  component: Title,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    titleStr:
      "Launching Oxy-UI: A Powerful and Modern UI Library for Your WebProjects",
  },
};

export const smallState: Story = {
  args: {
    titleStr:
      "Launching Oxy-UI: A Powerful and Modern UI Library for Your WebProjects",
    size: "small",
  },
};
