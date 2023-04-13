/* eslint-disable no-console */
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Dialog } from '../../components/ui';
import { IDialogProps } from '../../components/ui/Dialog/Dialog.types';

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  argTypes: {
    actions: {
      description:
        'Add "data-close" attribute to &lt;Button data-close /&gt; to close dialog in addition to nested "onClick"',
    },
    closeBtn: {
      control: { type: 'boolean' },
      options: [false, true],
    },
    elevation: { control: { max: 24, min: 0, step: 1, type: 'number' } },
    fixedWidth: {
      control: { type: 'select' },
      description: 'Pixel value, percent or false',
      options: [false, '250px', '400px', '50%'],
    },
    maxWidth: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    open: {
      control: { type: 'boolean' },
      options: [false, true],
      defaultValue: true,
    },
  },
  parameters: { controls: { sort: 'requiredFirst' } },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & IDialogProps) => (
  <Box height={300}>
    <Dialog {...args}>Content goes here</Dialog>
  </Box>
);

export const Modal = Template.bind({});
Modal.args = {
  actions: [
    <Button data-close key={'save'} onClick={() => console.log('Save')}>
      Save
    </Button>,
    <Button key={'close'} data-close>
      Close
    </Button>,
  ],
  onClose: () => console.log('external onClose called'),
  title: 'This is a title',
};
