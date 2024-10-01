import type { Meta, StoryObj } from "@storybook/react";
import SlideButton from "./SlideButton";

const meta: Meta<typeof SlideButton> = {
  title: "Common/SlideButton",
  component: SlideButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const prevState: Story = {
  args: {
    type: "prev",
  },
};

export const nextState: Story = {
  args: {
    type: "next",
  },
};
