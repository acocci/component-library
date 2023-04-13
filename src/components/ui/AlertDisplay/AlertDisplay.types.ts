import { AlertProps } from '@mui/material';
import { ReactNode } from '../../generic.types';

export default interface IAlert extends AlertProps {
  children?: ReactNode;
  title?: string;
}
