import type { Meta, StoryObj } from "@storybook/react";
import RecuritCompany from "./RecuritCompany";

const meta: Meta<typeof RecuritCompany> = {
  title: "News/Saramin/RecuritCompany",
  component: RecuritCompany,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  compnayNameStr: "(주)제일에프에이",
};

export const defaultState: Story = {
  args: testArgus,
};
