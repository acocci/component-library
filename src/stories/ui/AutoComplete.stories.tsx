/* eslint-disable no-console */
import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { LabelValues, ReactEvent } from '../../components/generic.types';
import { AutoComplete } from '../../components/ui';
import IAutoComplete from '../../components/ui/AutoComplete/AutoComplete.types';

const options = [
  {
    label: 'Acute Myocardial Infarction',
    value: 'I21.9 Acute Myocardial Infarction',
  },
  {
    label: 'Acute Respiratory Infection',
    value: 'I22.9 Acute Respiratory Infection',
  },
  {
    label: 'Upper Respiratory Infection',
    value: 'J06.9 Acute Upper Respiratory Infection',
  },
];

const meta = {
  title: 'UI/AutoComplete',
  component: AutoComplete,
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & IAutoComplete) => (
  <Box>
    <AutoComplete {...args} />
  </Box>
);

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  label: 'Diagnosis',
  onChange: (_e: ReactEvent, value: LabelValues) => console.log(value),
  options,
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  label: 'Diagnosis',
  multiple: true,
  onChange: (_e: ReactEvent, value: LabelValues) => console.log(value),
  options,
};
