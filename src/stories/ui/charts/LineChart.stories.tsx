import Box from '@mui/material/Box';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { LineChart } from '../../../components/ui';
import { multiline, singleLine } from './mockData';

const meta = {
  title: 'UI/charts/LineChart',
  component: LineChart,
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <Box height={300}>
    <LineChart {...args} />
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
