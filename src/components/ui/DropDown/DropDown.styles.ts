import { FormControl, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

import { sansSerifFontFamily } from '../../fonts';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiListItemIcon-root': {
    minWidth: theme.spacing(4),
  },
  '& .MuiListItemText-root': {
    display: 'inline-flex',
  },
  '& .MuiSelect-select': {
    alignItems: 'center',
    display: 'flex',
  },
}));

export const StyledListItemText = styled(ListItemText)({
  '& .MuiTypography-root': {
    fontFamily: sansSerifFontFamily,
  },
});
