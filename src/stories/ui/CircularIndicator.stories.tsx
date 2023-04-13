import BluetoothIcon from '@mui/icons-material/Bluetooth';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { CircularIndicator } from '../../components/ui';
import ICircularIndicator from '../../components/ui/CircularIndicator/CircularIndicator.types';

const meta = {
  title: 'UI/CircularIndicator',
  component: CircularIndicator,
} satisfies Meta<typeof CircularIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & ICircularIndicator) => (
  <CircularIndicator {...args} />
);

export const Percent = Template.bind({});
Percent.args = { color: 'warning', value: 50, tooltip: 'Current %' };

export const Icon = Template.bind({});
Icon.args = {
  value: 50,
  tooltip: 'Signal Strength',
  Icon: (
    <>
      <BluetoothIcon />
    </>
  ),
};

export const Loading = Template.bind({});
Loading.args = { progressBkg: false, thickness: 5 };
