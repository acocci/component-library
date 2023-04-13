import type { Meta, StoryObj } from '@storybook/react';

import { UserIcon } from '../../components/icons';

const meta = {
  title: 'ICONS/UserIcon',
  component: UserIcon,
} satisfies Meta<typeof UserIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
