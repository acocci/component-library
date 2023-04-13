import { CircularProgressProps } from '@mui/material';

import { ICO } from '../../generic.types';

export default interface ICircularIndicator extends CircularProgressProps {
  progressBkg?: boolean;
  Icon?: ICO;
  tooltip?: string;
}
