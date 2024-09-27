import type { Meta, StoryObj } from "@storybook/react";
import Msg from "./Msg";
import { ModalDeleteMsg } from "../../../constants/FooterConstant";

const meta: Meta<typeof Msg> = {
  title: "Common/Msg",
  component: Msg,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    isWarning: false,
    MsgStr: "Message",
  },
};

export const WarningState: Story = {
  args: ModalDeleteMsg,
};
