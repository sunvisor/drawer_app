/**
 * MyDrawer Story
 *
 * Created by sunvisor on 2024/03/27.
 * Copyright (C) Sunvisor Lab. 2024.
 */
import MyDrawer from "./MyDrawer";
import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof MyDrawer>

const meta: Meta<typeof MyDrawer> = {
  component: MyDrawer,
};

export const Normal: Story = {
  args: {}
};

export default meta;
