import { Alert, AlertTitle, Typography } from '@mui/material';

import IAlert from './AlertDisplay.types';

const AlertDisplay = ({ action, children, icon, severity, sx, title, variant }: IAlert) => (
  <Alert
    action={action}
    icon={icon}
    severity={severity}
    sx={{ padding: 2, ...sx }}
    variant={variant}
  >
    {title && (
      <AlertTitle>
        <Typography component={'h2'} variant="h5" sx={{ lineHeight: 1, opacity: 0.8 }}>
          {title}
        </Typography>
      </AlertTitle>
    )}
    {children}
  </Alert>
);

export default AlertDisplay;
