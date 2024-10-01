import type { Meta, StoryObj } from "@storybook/react";
import ContainerHeader from "./ContainerHeader";

const meta: Meta<typeof ContainerHeader> = {
  title: "News/Common/ContainerHeader",
  component: ContainerHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const saraminState: Story = {
  args: {
    headerStr: "어머, 이건 꼭 봐야돼! 채용 정보",
  },
};

export const blogState: Story = {
  args: {
    headerStr: "MZ세대를 홀린 인기 포스팅",
  },
};

export const githubState: Story = {
  args: {
    headerStr: "매력적인 리포지토리",
  },
};
