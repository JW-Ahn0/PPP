import type { Meta, StoryObj } from "@storybook/react";
import FooterLogoList from "./FooterLogoList";
import { FooterimgList } from "../../../constants/FooterConstant";

const meta: Meta<typeof FooterLogoList> = {
  title: "SideBar/FooterLogoList",
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
