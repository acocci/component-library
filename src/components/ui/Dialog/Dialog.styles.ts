import { Dialog as MuiDialog } from '@mui/material';
import { styled } from '@mui/system';

export const DialogStyled = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
