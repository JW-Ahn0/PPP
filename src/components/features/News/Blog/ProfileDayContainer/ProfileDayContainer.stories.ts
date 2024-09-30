import type { Meta, StoryObj } from "@storybook/react";
import ProfileDayContainer from "./ProfileDayContainer";

const meta: Meta<typeof ProfileDayContainer> = {
  title: "News/ProfileDayContainer",
  component: ProfileDayContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgs = {
  dayStr: "Sep 13, 2022",
  profileImgPath: "/news/profile_img.png",
  name: "Vishal Yadav",
};

export const defaultState: Story = {
  args: testArgs,
};

export const smallState: Story = {
  args: {
    ...testArgs,
    size: "small",
  },
};
