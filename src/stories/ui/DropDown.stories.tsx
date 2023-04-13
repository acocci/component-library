/* eslint-disable no-console */
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Box from '@mui/material/Box';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { DropDown } from '../../components/ui/';

const meta = {
  title: 'UI/DropDown',
  component: DropDown,
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <Box height={300}>
    <DropDown {...args} />
  </Box>
);

export const WithText = Template.bind({});
WithText.args = {
  dropDownLabel: 'Charts',
  onChangeCallback: event => console.log(event.target.value),
  selectOption: [
    { name: 'Pie Chart', value: 'pieChart' },
    { name: 'Line Chart', value: 'lineChart' },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  dropDownLabel: 'Charts',
  onChangeCallback: event => console.log(event.target.value),
  selectOption: [
    { icon: PieChartIcon, name: 'Pie Chart', value: 'pieChart' },
    { icon: ShowChartIcon, name: 'Line Chart', value: 'lineChart' },
  ],
};
