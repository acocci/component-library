import { Avatar, Box, Tooltip } from '@mui/material';
import { useMemo } from 'react';

import IAvatar from './AvatarDisplay.types';

const AvatarDisplay = ({
  alt,
  color,
  Icon,
  iconColor,
  initials = false,
  src,
  sx,
  tooltip = true,
}: IAvatar) => {
  const name = useMemo(() => {
    const nameArr = alt ? alt.split(' ') : [];
    return nameArr.length ? `${nameArr[0][0]}${nameArr[nameArr.length - 1][0]}` : '';
  }, [alt]);

  const avatarProps = { alt, sx: { ...sx, bgcolor: color || '' }, src: src || '' };

  return (
    <Tooltip title={tooltip && alt ? alt : ''} arrow disableFocusListener disableTouchListener>
      <Box sx={{ display: 'inline-flex' }}>
        {Icon && <Avatar {...avatarProps}>{Icon && <Icon htmlColor={iconColor} />}</Avatar>}
        {initials && <Avatar {...avatarProps}>{!src && name.length > 0 && <>{name}</>}</Avatar>}
        {!Icon && !initials && <Avatar {...avatarProps} />}
      </Box>
    </Tooltip>
  );
};

export default AvatarDisplay;
