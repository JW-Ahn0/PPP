import type { Meta, StoryObj } from "@storybook/react";
import RepoContentCard from "./RepoContentCard";

const meta: Meta<typeof RepoContentCard> = {
  title: "News/Github/RepoContentCard",
  component: RepoContentCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const testArgus = {
  titleStr: "threejs-portfolio",
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
