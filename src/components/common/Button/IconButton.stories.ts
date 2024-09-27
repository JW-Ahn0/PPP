import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import {
  IconButtonDefault,
  IconButtonActive,
} from "../../../constants/FooterConstant";

const meta: Meta<typeof IconButton> = {
  title: "Common/IconButton",
  component: IconButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    iconPath: IconButtonDefault.iconPath,
    isActive: false,
  },
};

export const activState: Story = {
  args: {
    iconPath: IconButtonActive.iconPath,
    isActive: true,
  },
};
