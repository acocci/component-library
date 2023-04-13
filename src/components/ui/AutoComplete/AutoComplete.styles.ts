import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const Circle = styled(Box)({
  '&.disabled': {
    backgroundColor: 'rgba(0, 0, 0, 0.15) !important',
    borderColor: 'rgba(0, 0, 0, 0.25)',
  },
  border: '0.5px solid black',
  borderRadius: '50%',
  display: 'inline-block',
  height: '7px',
  margin: '.3% 5px -2px 5px',
  width: '7px',
});
