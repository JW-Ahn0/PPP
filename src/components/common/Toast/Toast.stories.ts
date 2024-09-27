import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";
import { ModalDeleteMsg } from "../../../constants/FooterConstant";

const meta: Meta<typeof Toast> = {
  title: "Common/Toast",
  component: Toast,
  tags: ["autodocs"],
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
