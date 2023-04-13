/* eslint-disable no-console */
import ChildCareIcon from '@mui/icons-material/ChildCare';
import Box from '@mui/material/Box';
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { ListMenu as Menu } from '../../../components/ui/';
import { MenuTypes } from '../../../components/ui/menus/menus.types';

const meta = {
  title: 'UI/Menus',
  component: Menu,
  argTypes: {
    menuType: {
      control: { type: 'select' },
      options: Object.values(MenuTypes),
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes) => (
  <Box height={350}>
    <Box maxWidth={500}>
      <Menu menuItems={[]} menuType={''} {...args} />
    </Box>
  </Box>
);

export const ListMenu = Template.bind({});
ListMenu.args = {
  menuItems: [
    {
      name: 'Parent w/callback (see console)',
      onClick: (e, props) => console.log(e, props),
    },
    {
      disabled: true,
      name: 'Disabled Parent Item',
    },
    {
      name: 'Section w/Children',
      secondary: [
        {
          Icon: ChildCareIcon,
          name: '1st Child (icon & text)',
        },
        {
          Icon: ChildCareIcon,
          iconOnly: true,
          name: '2nd Child, Icon only w/tooltip',
        },
        {
          name: 'Section w/Grand-children',
          onClick: (e, props) => console.log(e, props),
          secondary: [
            {
              name: 'Grandchild 1',
              onClick: (e, props) => console.log(e, props),
            },
            {
              name: 'Grandchild 2',
            },
          ],
        },
      ],
      secondaryExpand: false,
    },
  ],
  menuType: MenuTypes.list,
};
