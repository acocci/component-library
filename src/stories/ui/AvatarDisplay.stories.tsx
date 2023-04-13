import Face2Icon from '@mui/icons-material/Face2';
import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDisplay } from '../../components/ui';

const meta = {
  title: 'UI/AvatarDisplay',
  component: AvatarDisplay,
} satisfies Meta<typeof AvatarDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Src: Story = {
  args: {
    alt: 'Jane Doe',
    src: 'https://mui.com/static/images/avatar/3.jpg',
  },
};

export const BadSrc: Story = {
  args: {
    alt: 'Jane Doe',
    color: 'red',
    src: '/broken-image.jpg',
  },
};

export const Icon: Story = {
  args: {
    alt: 'Jane Doe',
    color: 'green',
    Icon: Face2Icon,
  },
};

export const Initials: Story = {
  args: {
    alt: 'Jane Fawn Doe',
    color: 'orange',
    initials: true,
  },
};

export const Generic: Story = {
  args: {
    alt: 'Jane Doe',
  },
};
