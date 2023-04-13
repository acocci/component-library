import Box from '@mui/material/Box';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { PieChart } from '../../../components/ui';
import { singleLine } from './mockData';

const meta = {
  title: 'UI/charts/PieChart',
  component: PieChart,
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <Box height={300}>
    <PieChart {...args} />
  </Box>
);

export const WithData = Template.bind({});
WithData.args = {
  data: singleLine,
};
