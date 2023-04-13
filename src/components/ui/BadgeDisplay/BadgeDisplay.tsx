import MailIcon from '@mui/icons-material/Mail';
import { Badge, Box, Tooltip } from '@mui/material';

import IBadge from './BadgeDisplay.types';

const BadgeDisplay = ({
  color = 'default',
  content = 0,
  Icon = MailIcon,
  iconColor,
  max,
  tooltip,
  sx,
}: IBadge) => (
  <Box sx={sx}>
    <Tooltip title={tooltip || ''} arrow disableFocusListener disableTouchListener>
      <Badge color={color} badgeContent={content} max={max}>
        <Icon htmlColor={iconColor} />
      </Badge>
    </Tooltip>
  </Box>
);

export default BadgeDisplay;
