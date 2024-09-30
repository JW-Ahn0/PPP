import type { Meta, StoryObj } from "@storybook/react";
import RepoDescription from "./RepoDescription";

const meta: Meta<typeof RepoDescription> = {
  title: "News/Github/RepoDescription",
  component: RepoDescription,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  descriptionStr: "Learn how to build 3D websites from scratch ...",
};

export const defaultState: Story = {
  args: testArgus,
};

export const smallState: Story = {
  args: {
    ...testArgus,
    size: "small",
  },
};

export const defaultDarkModeState: Story = {
  args: {
    ...testArgus,
    isDarkMode: true,
  },
};

export const smallDarkModeState: Story = {
  args: {
    ...testArgus,
    isDarkMode: true,
    size: "small",
  },
};
