import { Box, ListItemButton, ListItemIcon, MenuItem } from '@mui/material';
import { camelCase } from 'lodash';
import { bindFocus, bindHover, bindMenu, usePopupState } from 'material-ui-popup-state/hooks';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import React from 'react';

import ListMenuItem from './ListMenuItem';
import { StyledList } from './menus.styles';
import { IListItem, IMenuItem } from './menus.types';

const AnchorMenu = ({ item, index }: IListItem) => {
  const { ico, iconOnly, name, onClick, secondary }: IMenuItem = item;
  const popupState = usePopupState({
    popupId: `${camelCase(name)}_${index || 0}`,
    variant: 'popover',
  });
  return (
    <StyledList disablePadding>
      <ListItemButton
        {...bindHover(popupState)}
        {...bindFocus(popupState)}
        onClick={(e: React.SyntheticEvent) => {
          if (onClick) onClick(e, item);
        }}
      >
        <ListMenuItem ico={<>{ico}</>} iconOnly={iconOnly} name={name} />
      </ListItemButton>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <Box>
          {secondary &&
            secondary.map((m, i) => (
              <Box key={m.name}>
                {!m.secondary && (
                  <MenuItem
                    onClick={(e: React.SyntheticEvent) => {
                      if (m.onClick) m.onClick(e, m);
                    }}
                  >
                    {m.ico && (
                      <ListItemIcon>
                        <>{m.ico}</>
                      </ListItemIcon>
                    )}
                    {!m.iconOnly && <>{m.name}</>}
                  </MenuItem>
                )}
                {m.secondary && <AnchorMenu item={m} index={i} />}
              </Box>
            ))}
        </Box>
      </HoverMenu>
    </StyledList>
  );
};

export default AnchorMenu;
