import type { Meta, StoryObj } from "@storybook/react";
import SaraminLogo from "./Logo";

const meta: Meta<typeof SaraminLogo> = {
  title: "News/Saramin/SaraminLogo",
  component: SaraminLogo,
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  imgPath: "/news/saramin_logo.png",
};

export const defaultState: Story = {
  args: testArgus,
};
