import { Box, CircularProgress } from '@mui/material';
import grey from '@mui/material/colors/grey';
import { styled } from '@mui/system';

export const BoxDisplay = styled(Box)({
  alignItems: 'center',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
});

export const CircularProgressBkg = styled(CircularProgress)({
  bottom: 0,
  color: grey['300'],
  display: 'flex',
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 0,
});
