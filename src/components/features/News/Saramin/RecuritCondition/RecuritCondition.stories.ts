import type { Meta, StoryObj } from "@storybook/react";
import RecuritCondition from "./RecuritCondition";

const meta: Meta<typeof RecuritCondition> = {
  title: "News/Saramin/RecuritCondition",
  component: RecuritCondition,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  conditionStr: "경기전체 | 10년 | 초대졸이상",
  imgPath: "/icons/location.svg",
};

export const defaultState: Story = {
  args: testArgus,
};
