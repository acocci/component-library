import { RegularBreakpoints } from '@mui/material';

import { IMenu } from '../menus/menus.types';

export interface ISecondaryContainer extends IMenu {
  children: React.ReactNode;
  navWidth?: RegularBreakpoints;
}
