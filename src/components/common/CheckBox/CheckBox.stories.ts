import type { Meta, StoryObj } from "@storybook/react";
import CheckBox from "./CheckBox";

const meta: Meta<typeof CheckBox> = {
  title: "Common/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    textStr: "Text",
    isChecked: false,
  },
};

export const checkedState: Story = {
  args: {
    textStr: "Text",
    isChecked: true,
  },
};
