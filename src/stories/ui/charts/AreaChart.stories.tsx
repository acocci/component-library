import Box from '@mui/material/Box';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { AreaChart } from '../../../components/ui';
import { multiline, singleLine } from './mockData';

const meta = {
  title: 'UI/charts/AreaChart',
  component: AreaChart,
} satisfies Meta<typeof AreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <Box height={300}>
    <AreaChart {...args} />
  </Box>
);

export const WithData = Template.bind({});
WithData.args = {
  data: singleLine,
};

export const WithDataMulitiple = Template.bind({});
WithDataMulitiple.args = {
  data: multiline,
};
