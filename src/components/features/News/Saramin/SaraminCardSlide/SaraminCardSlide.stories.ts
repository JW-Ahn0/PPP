import type { Meta, StoryObj } from "@storybook/react";
import SaraminCardSlide from "./SaraminCardSlide";

const meta: Meta<typeof SaraminCardSlide> = {
  title: "News/Saramin/SaraminCardSlide",
  component: SaraminCardSlide,
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
  url: "/",
};

const testArguList = Array.from({ length: 6 }, () => ({ ...testArgus }));
export const defaultState: Story = {
  args: {
    SaraminCardPropsList: testArguList,
  },
};
