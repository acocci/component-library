import { ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import React from 'react';

import { IMenuItem } from './menus.types';

const ListMenuItem = ({ ico, iconOnly, name }: IMenuItem) => (
  <>
    {ico && (
      <Tooltip title={iconOnly ? name : ''}>
        <ListItemIcon>
          <>{ico}</>
        </ListItemIcon>
      </Tooltip>
    )}
    {!iconOnly && <ListItemText disableTypography primary={name} />}
  </>
);

export default ListMenuItem;
