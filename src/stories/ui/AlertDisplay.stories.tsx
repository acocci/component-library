import PieChartIcon from '@mui/icons-material/PieChart';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { AlertDisplay } from '../../components/ui';

const meta = {
  title: 'UI/AlertDisplay',
  argTypes: {
    severity: {
      control: { type: 'select' },
      description: 'Severity Level',
      options: ['success', 'info', 'warning', 'error'],
    },
  },
  component: AlertDisplay,
} satisfies Meta<typeof AlertDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    children: <>Test this out</>,
    severity: 'success',
  },
};

export const WithTitle: Story = {
  args: {
    children: <>Test this out</>,
    severity: 'warning',
    title: 'My Warning',
  },
};

export const SucessOutlinedNoIcon: Story = {
  args: {
    children: <>Test this out</>,
    icon: false,
    severity: 'success',
    variant: 'outlined',
  },
};

export const SucessFilledCustomIcon: Story = {
  args: {
    children: <>Test this out</>,
    icon: <PieChartIcon />,
    severity: 'success',
    variant: 'filled',
  },
};
