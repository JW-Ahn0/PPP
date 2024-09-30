import type { Meta, StoryObj } from "@storybook/react";
import RecuritDueDate from "./RecuritDueDate";

const meta: Meta<typeof RecuritDueDate> = {
  title: "News/Saramin/RecuritDueDate",
  component: RecuritDueDate,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  dateStr: "~10.09(수)",
};

export const defaultState: Story = {
  args: testArgus,
};
