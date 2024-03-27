/**
 * MyBox Story
 *
 * Created by sunvisor on 2024/03/27.
 * Copyright (C) Sunvisor Lab. 2024.
 */
import MyBox from "./MyBox";
import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof MyBox>

const meta: Meta<typeof MyBox> = {
  component: MyBox,
};

export const Normal: Story = {
  args: {}
};

export default meta;
