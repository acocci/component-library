import { AlertProps } from '@mui/material';

import { ReactNode } from 'types/generic.types';

export default interface IAlert extends AlertProps {
  children?: ReactNode;
  title?: string;
}
