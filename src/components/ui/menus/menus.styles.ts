import { List } from '@mui/material';
import { styled } from '@mui/system';

import { sansSerifFontFamily } from '../../fonts';

export const StyledList = styled(List)(({ theme }) => ({
  '& .MuiListItemButton-root.Mui-selected': {
    backgroundColor: '#f2f2f2',
  },
  '& .MuiListItemIcon-root': {
    marginRight: theme.spacing(1),
    minWidth: theme.spacing(3),
  },
  '& ul': {
    '& li': {
      paddingRight: 0,
    },
    width: '100%',
  },
  fontFamily: sansSerifFontFamily,
}));
