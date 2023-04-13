import type { Meta, StoryObj } from '@storybook/react';

import { StatusCircle } from '../../components/ui';

const meta = {
  title: 'UI/StatusCircle',
  component: StatusCircle,
} satisfies Meta<typeof StatusCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithColor: Story = {
  args: { color: 'orange' },
};
