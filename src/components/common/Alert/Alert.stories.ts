import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";
import { ModalDeleteMsg } from "../../../constants/FooterConstant";

const meta: Meta<typeof Alert> = {
  title: "Common/Alert",
  component: Alert,
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
