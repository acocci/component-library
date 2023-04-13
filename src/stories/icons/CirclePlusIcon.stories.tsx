import type { Meta, StoryObj } from '@storybook/react';

import { CirclePlusIcon } from '../../components/icons';

const meta = {
  title: 'ICONS/CirclePlus',
  component: CirclePlusIcon,
} satisfies Meta<typeof CirclePlusIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
