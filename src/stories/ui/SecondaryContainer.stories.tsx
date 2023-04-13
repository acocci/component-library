/* eslint-disable no-console */
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { SecondaryContainer } from '../../components/ui/';
import { MenuTypes } from '../../components/ui/menus/menus.types';
import { ISecondaryContainer } from '../../components/ui/SecondaryContainer/SecondaryContainer.types';

const meta = {
  title: 'UI/SecondaryContainer',
  argTypes: {
    menuType: {
      control: { type: 'select' },
      options: Object.values(MenuTypes),
    },
  },
  component: SecondaryContainer,
} satisfies Meta<typeof SecondaryContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & ISecondaryContainer) => (
  <Box height={350}>
    <Box>
      <SecondaryContainer {...args} />
    </Box>
  </Box>
);

const styles = {
  '& .nav': {
    backgroundColor: grey[200],
  },
  height: 200,
  overflowY: 'scroll',
};

export const WithMenu = Template.bind({});
WithMenu.args = {
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ligula eget tellus luctus
      finibus. Vivamus diam libero, venenatis elementum augue eu, porttitor maximus odio. Cras non
      nulla tristique, venenatis nisl a, tempor nisi. Nulla facilisi. Mauris consequat congue
      tincidunt. Vivamus id est est. Praesent ut sem lacus. Maecenas euismod tempor risus, in
      blandit diam egestas quis.
    </>
  ),
  expandAll: true,
  menuItems: [
    {
      name: 'Item 1',
      value: 'One',
    },
    {
      name: 'Item 2',
    },
    {
      name: 'Item 3',
      secondary: [
        {
          name: 'Child 1',
        },
        {
          name: 'Child 2',
        },
      ],
    },
  ],
  menuType: MenuTypes.list,
  navWidth: { sm: 4, xs: 5 },
  sx: styles,
};
