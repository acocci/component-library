/* eslint-disable no-console */
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { AnchorMenu as Menu } from '../../../components/ui/';
import { IListItem } from '../../../components/ui/menus/menus.types';

const meta = {
  title: 'UI/Menus',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & IListItem) => (
  <Box height={350}>
    <Box maxWidth={500}>
      <Menu {...args} />
    </Box>
  </Box>
);

export const AnchorMenu = Template.bind({});
AnchorMenu.args = {
  item: {
    Icon: MenuIcon,
    name: 'Menu Item',
    secondary: [
      {
        name: 'Anchor Item 1',
      },
      {
        name: 'Anchor Item 2',
      },
    ],
  },
};
