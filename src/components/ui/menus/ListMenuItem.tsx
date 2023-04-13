import { ListItemIcon, ListItemText, Tooltip } from '@mui/material';

import { IMenuItem } from './menus.types';

const ListMenuItem = ({ Icon, iconOnly, name }: IMenuItem) => (
  <>
    {Icon && (
      <Tooltip title={iconOnly ? name : ''}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      </Tooltip>
    )}
    {!iconOnly && <ListItemText disableTypography primary={name} />}
  </>
);

export default ListMenuItem;
