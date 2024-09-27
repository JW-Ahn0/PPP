import type { Meta, StoryObj } from "@storybook/react";
import TextButton from "./TextButton";

const meta: Meta<typeof TextButton> = {
  title: "Common/TextButton",
  component: TextButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    textStr: "Text",
    isActive: false,
  },
};

export const activState: Story = {
  args: {
    textStr: "Text",
    isActive: true,
  },
};
