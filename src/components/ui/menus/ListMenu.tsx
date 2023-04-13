import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Checkbox, Collapse, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { Sx } from 'components/generic.types';

import AnchorMenu from './AnchorMenu';
import ListMenuItem from './ListMenuItem';
import { StyledList } from './menus.styles';
import { IListItem, IMenu, IMenuItem, MenuTypes } from './menus.types';

// <List> ul container
const Menu = ({ children, menuSx }: { children: React.ReactNode; menuSx?: Sx }) => (
  <StyledList disablePadding sx={menuSx}>
    {children}
  </StyledList>
);

const ListMenu = ({ expandAll = true, menuItems, menuType, sx }: IMenu) => {
  const theme = useTheme();
  const { easeIn, easeOut } = theme.transitions.easing;
  const [active, setActive] = useState<string | null>(null);
  const [checked, setChecked] = useState<Array<number>>([]);

  // checkbox toggle
  const handleCheckToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked: Array<number> = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  // <ListItem> li child
  const Item = ({ item, index }: IListItem) => {
    const current = `${index}_${item.name}`;
    const { disabled, iconOnly, Icon, onClick, secondary, secondaryExpand, name }: IMenuItem = item;
    const [open, setOpen] = useState<boolean>(
      secondaryExpand === false ? secondaryExpand : expandAll,
    );
    const MenuItemWithIcon = () => <ListMenuItem Icon={Icon} iconOnly={iconOnly} name={name} />;
    const handleToggle = (e: SyntheticEvent<Element, Event>) => {
      setOpen(!open);
      if (item.onClick) item.onClick(e, item);
    };

    return (
      <>
        <ListItem dense>
          {secondary ? (
            <>
              {menuType !== MenuTypes.anchorMenu && (
                <Menu>
                  <ListItemButton onClick={e => handleToggle(e)}>
                    <MenuItemWithIcon />
                    {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </ListItemButton>

                  <Collapse
                    in={open}
                    easing={{
                      enter: easeIn,
                      exit: easeOut,
                    }}
                  >
                    {secondary.map((secondaryItem, secondaryIndex) => (
                      <Item
                        key={secondaryItem.name}
                        item={secondaryItem}
                        index={secondaryIndex + index}
                      />
                    ))}
                  </Collapse>
                </Menu>
              )}

              {menuType === MenuTypes.anchorMenu && <AnchorMenu item={item} index={index} />}
            </>
          ) : (
            <>
              {menuType !== MenuTypes.checkBox && (
                <ListItemButton
                  onClick={(e: React.SyntheticEvent) => {
                    if (onClick) onClick(e, item);
                    setActive(current);
                  }}
                  disabled={disabled}
                  selected={current === active}
                >
                  <MenuItemWithIcon />
                </ListItemButton>
              )}
              {/* Checkbox menu option */}
              {menuType === MenuTypes.checkBox && (
                <ListItemButton disabled={disabled} onClick={handleCheckToggle(index)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked && checked.indexOf(index) !== -1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': current }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (onClick) onClick(e, item);
                      }}
                      tabIndex={-1}
                      value={name}
                    />
                  </ListItemIcon>
                  <MenuItemWithIcon />
                </ListItemButton>
              )}
            </>
          )}
        </ListItem>
      </>
    );
  };

  return (
    <Menu menuSx={sx}>
      <>
        {menuItems.map((item, index) => (
          <Item key={item.name} item={item} index={index} />
        ))}
      </>
    </Menu>
  );
};

export default ListMenu;
