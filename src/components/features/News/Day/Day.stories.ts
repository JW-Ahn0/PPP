import type { Meta, StoryObj } from "@storybook/react";
import Day from "./Day";

const meta: Meta<typeof Day> = {
  title: "News/Day",
  component: Day,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    dayStr: "Sep 13, 2022",
  },
};
