import { InputLabel, ListItemIcon, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledFormControl, StyledListItemText } from './DropDown.styles';
import { IDrop } from './DropDown.types';

const DropDown = ({
  defaultValue = '',
  disabled,
  dropDownLabel,
  onChangeCallback,
  selectOption,
  sx,
  translate,
}: IDrop) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
    if (onChangeCallback) onChangeCallback(event);
  };

  return (
    <StyledFormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{dropDownLabel}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        label={dropDownLabel}
        onChange={handleChange}
        disabled={disabled}
        sx={sx}
      >
        {selectOption.map(item => (
          <MenuItem key={item.name} value={item.value}>
            {item.icon && (
              <ListItemIcon>
                <item.icon fontSize="small" />
              </ListItemIcon>
            )}
            <StyledListItemText>{translate ? t(item.name) : item.name}</StyledListItemText>
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default DropDown;
