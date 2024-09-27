import type { Meta, StoryObj } from "@storybook/react";
import SideBar from "./SideBar";

const meta: Meta<typeof SideBar> = {
  title: "SlideBar/SideBar",
  component: SideBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {};
