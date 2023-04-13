import type { Meta, StoryObj } from '@storybook/react';

import { BadgeDisplay } from '../../components/ui/';

const meta = {
  title: 'UI/BadgeDisplay',
  component: BadgeDisplay,
} satisfies Meta<typeof BadgeDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { color: 'primary', content: 3, max: 5, tooltip: 'This is a tooltip' },
};
