import type { Meta, StoryObj } from "@storybook/react";
import RecuritTitle from "./RecuritTitle";

const meta: Meta<typeof RecuritTitle> = {
  title: "News/Saramin/RecuritTitle",
  component: RecuritTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  titleStr: "자동화장비 기술영업 담당자 채용",
};

export const defaultState: Story = {
  args: testArgus,
};
