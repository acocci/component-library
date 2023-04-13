import Box from '@mui/material/Box';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { BarGraph } from '../../../components/ui';
import { multiline, singleLine } from './mockData';

const meta = {
  title: 'UI/charts/BarGraph',
  component: BarGraph,
} satisfies Meta<typeof BarGraph>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <Box height={300}>
    <BarGraph {...args} />
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
