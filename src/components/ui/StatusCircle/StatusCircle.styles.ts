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
  position: 'relative',
  width: '7px',
  '&::after': {
    color: 'rgba(255,255,255,0.5)',
    content: "'•'",
    height: '1px',
    position: 'absolute',
    left: 0,
    top: '-7px',
    width: '1px',
  },
});
