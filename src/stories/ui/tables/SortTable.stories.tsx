import Box from '@mui/material/Box';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { SortTable, StatusCircle } from '../../../components/';
import { StrNumNode } from '../../../components/generic.types';
import { Columns, RowData } from '../../../components/ui/tables/tables.types';

const columns: Columns = [
  { id: 'device', label: 'Device' },
  {
    id: 'status',
    label: 'Status',
    format: (value?: StrNumNode) =>
      value && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <StatusCircle color={value === 'Connected' ? 'green' : 'red'} />
          {value}
        </Box>
      ),
  },
  { id: 'error', label: 'Error' },
];

const rows: RowData = [
  { device: 'Device 1', status: 'Connected', error: 'false' },
  { device: 'Device 2', status: 'Connected', error: 'true' },
  { device: 'Device 3', status: 'Disconnected', error: 'false' },
];

const meta = {
  title: 'UI/tables/SortTable',
  component: SortTable,
} satisfies Meta<typeof SortTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => (
  <Box height={350}>
    <SortTable {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  rows,
  columns,
};
