import type { Meta, StoryObj } from "@storybook/react";
import { FooterLogoList } from "./FooterLogoList";
import { FooterimgList } from "../../../constants/FooterConstant";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof FooterLogoList> = {
  title: "FooterLogoList",
  component: FooterLogoList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    imgList: FooterimgList,
  },
};
