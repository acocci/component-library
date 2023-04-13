import { CircularProgressProps } from '@mui/material';

import { ReactNode } from '../../generic.types';

export default interface ICircularIndicator extends CircularProgressProps {
  progressBkg?: boolean;
  Icon?: ReactNode;
  tooltip?: string;
}
