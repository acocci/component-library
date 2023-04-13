import { ICO, ReactEvent, Sx } from '../../generic.types';

export enum MenuTypes {
  anchorMenu = 'Anchor Menu',
  checkBox = 'Check Box',
  list = 'List',
}

export const defaultMenuType: string = MenuTypes.list;
export type MenuItems = Array<IMenuItem>;

export interface IMenuItem {
  disabled?: boolean;
  Icon?: ICO;
  iconOnly?: boolean;
  name: string;
  onClick?: (e: ReactEvent, props?: IMenuItem) => void;
  secondary?: MenuItems;
  secondaryExpand?: boolean;
  sx?: Sx;
  value?: string;
}

export interface IMenu {
  expandAll?: boolean;
  menuItems: MenuItems;
  menuType: string;
  sx?: Sx;
}

export interface IListItem {
  item: IMenuItem;
  index: number;
}
