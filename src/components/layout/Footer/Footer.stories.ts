import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";
import { CopyRightText } from "../../../constants/FooterConstant";

const meta: Meta<typeof Footer> = {
  title: "SlideBar/Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    copyRightText: CopyRightText,
  },
};
