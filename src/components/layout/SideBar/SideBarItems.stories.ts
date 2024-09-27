import type { Meta, StoryObj } from "@storybook/react";
import SideBarItems from "./SideBarItems";

const meta: Meta<typeof SideBarItems> = {
  title: "SlideBar/SideBarItems",
  component: SideBarItems,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {};
