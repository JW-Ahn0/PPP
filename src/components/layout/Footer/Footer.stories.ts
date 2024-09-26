import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";
import { copyRightText } from "../../../constants/FooterConstant";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterItem: Story = {
  args: {
    copyRightText: copyRightText,
  },
};
