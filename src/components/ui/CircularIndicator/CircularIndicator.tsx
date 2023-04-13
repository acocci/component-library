import { Box, CircularProgress, Tooltip, Typography } from '@mui/material';

import { BoxDisplay, CircularProgressBkg } from './CircularIndicator.styles';
import ICircularIndicator from './CircularIndicator.types';

const CircularIndicator = ({
  color,
  Icon,
  progressBkg = true,
  thickness,
  tooltip,
  value,
  size,
  sx,
}: ICircularIndicator) => (
  <Tooltip title={tooltip || ''} arrow disableFocusListener disableTouchListener>
    <Box sx={{ ...sx, position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        color={color}
        thickness={thickness}
        size={size}
        sx={{ position: 'relative', zIndex: 1 }}
        value={value}
        variant={value ? 'determinate' : 'indeterminate'}
      />
      <BoxDisplay>
        {Icon ? (
          <Icon />
        ) : (
          <Typography variant="caption" component="div" color="text.secondary">
            {value && <>{`${Math.round(value)}%`}</>}
          </Typography>
        )}
      </BoxDisplay>
      {progressBkg && (
        <CircularProgressBkg
          thickness={thickness}
          size={size}
          value={100}
          variant={'determinate'}
        />
      )}
    </Box>
  </Tooltip>
);

export default CircularIndicator;
