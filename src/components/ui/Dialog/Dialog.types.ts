import { Breakpoint } from '@mui/system';
import React from 'react';

import { ReactNode } from 'components/generic.types';

export interface IDialogTitleProps {
  id: string;
  children?: ReactNode;
  onClose?: () => void;
}

export interface IDialogProps {
  actions?: Array<React.ReactElement>;
  children: ReactNode;
  closeBtn?: boolean;
  elevation?: number;
  hideBackdrop?: boolean;
  onClose?: () => void;
  open: boolean;
  title?: string;
  maxWidth?: Breakpoint | false;
  fixedWidth?: string | false;
}
