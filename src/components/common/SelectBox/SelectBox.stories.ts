import type { Meta, StoryObj } from "@storybook/react";
import SelectBox from "./SelectBox";
import { SelectMinutes, SelectTimes } from "../../../constants/FooterConstant";

const meta: Meta<typeof SelectBox> = {
  title: "SlideBar/SelectBox",
  component: SelectBox,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TimeState: Story = {
  args: {
    optionList: SelectTimes,
  },
};

export const MinuteState: Story = {
  args: {
    optionList: SelectMinutes,
  },
};
