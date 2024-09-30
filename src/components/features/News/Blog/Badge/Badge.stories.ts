import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "News/Blog/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    badgeStr: "default",
  },
};

export const htmlState: Story = {
  args: {
    badgeStr: "html",
  },
};

export const cssState: Story = {
  args: {
    badgeStr: "css",
  },
};

export const javascriptState: Story = {
  args: {
    badgeStr: "javascript",
  },
};

export const reactState: Story = {
  args: {
    badgeStr: "react",
  },
};

export const defaultSmallState: Story = {
  args: {
    badgeStr: "default",
    size: "small",
  },
};

export const htmlSmallState: Story = {
  args: {
    badgeStr: "html",
    size: "small",
  },
};

export const cssSmallState: Story = {
  args: {
    badgeStr: "css",
    size: "small",
  },
};

export const javascriptSmallState: Story = {
  args: {
    badgeStr: "javascript",
    size: "small",
  },
};

export const reactSmallState: Story = {
  args: {
    badgeStr: "react",
    size: "small",
  },
};
