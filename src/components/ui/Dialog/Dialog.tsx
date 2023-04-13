import CloseIcon from '@mui/icons-material/Close';
import { Box, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useMemo, useState } from 'react';

import grey from '@mui/material/colors/grey';
import { useTheme } from '@mui/material/styles';

import { DialogStyled } from './Dialog.styles';
import { IDialogProps } from './Dialog.types';

const Dialog = ({
  actions,
  children,
  closeBtn,
  elevation = 24,
  fixedWidth,
  hideBackdrop,
  onClose,
  open = false,
  title,
  maxWidth,
}: IDialogProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(open);

  useMemo(() => setIsOpen(open), [open]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <DialogStyled
      aria-labelledby="customized-dialog-title"
      fullWidth
      onClose={handleClose}
      open={isOpen}
      maxWidth={maxWidth}
      slotProps={{
        backdrop: { invisible: hideBackdrop },
      }}
      PaperProps={{
        elevation,
        sx: { width: fixedWidth || (maxWidth ? theme.breakpoints.values[maxWidth] : 'auto') },
      }}
    >
      <DialogTitle sx={{ paddingRight: closeBtn ? theme.spacing(6) : '' }}>
        <>
          {title && title}
          {closeBtn && (
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                color: grey[500],
                position: 'absolute',
                right: 4,
                top: 4,
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </>
      </DialogTitle>
      <DialogContent>
        <Box>{children}</Box>
      </DialogContent>
      <DialogActions>
        {actions &&
          actions.map((item, index) => (
            <Box
              onClick={() => {
                if (item?.props['data-close']) handleClose();
              }}
              key={index}
            >
              {item}
            </Box>
          ))}
      </DialogActions>
    </DialogStyled>
  );
};

export default Dialog;
