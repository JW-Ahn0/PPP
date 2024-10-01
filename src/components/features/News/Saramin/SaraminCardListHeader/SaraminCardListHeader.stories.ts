import type { Meta, StoryObj } from "@storybook/react";
import SaraminCardListHeader from "./SaraminCardListHeader";

const meta: Meta<typeof SaraminCardListHeader> = {
  title: "News/Saramin/SaraminCardListHeader",
  component: SaraminCardListHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {},
};
