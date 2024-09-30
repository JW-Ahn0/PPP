import type { Meta, StoryObj } from "@storybook/react";
import RepoTitle from "./RepoTitle";

const meta: Meta<typeof RepoTitle> = {
  title: "News/Github/RepoTitle",
  component: RepoTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  titleStr: "threejs-portfolio",
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
