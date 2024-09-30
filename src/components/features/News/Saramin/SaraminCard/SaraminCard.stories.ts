import type { Meta, StoryObj } from "@storybook/react";
import SaraminCard from "./SaraminCard";

const meta: Meta<typeof SaraminCard> = {
  title: "News/Saramin/SaraminCard",
  component: SaraminCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  logoImgPath: "/news/saramin_logo.png",
  titleStr: "자동화장비 기술영업 담당자 채용",
  compnayNameStr: "(주)제일에프에이",
  conditionStr: "경기전체 | 10년 | 초대졸이상",
  locationImgPath: "/icons/location.svg",
  dateStr: "~10.09(수)",
};

export const defaultState: Story = {
  args: testArgus,
};

export const smalltState: Story = {
  args: { ...testArgus, size: "small" },
};
