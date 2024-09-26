import type { Meta, StoryObj } from "@storybook/react";
import SideBarItem from "./SideBarItem";
import { FooterListItems } from "../../../constants/FooterConstant";

const meta: Meta<typeof SideBarItem> = {
  title: "SideBar/SideBarItem",
  component: SideBarItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SideBarItemTask: Story = {
  args: { ...FooterListItems[0], isActive: true },
};
export const SideBarItemTodo: Story = {
  args: FooterListItems[1],
};
export const SideBarItemNews: Story = {
  args: FooterListItems[2],
};
