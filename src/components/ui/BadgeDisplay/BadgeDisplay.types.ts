import { ICO, Sx } from '../../generic.types';

export default interface IBadge {
  color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
  content?: number;
  Icon?: ICO;
  iconColor?: string;
  max?: number;
  sx?: Sx;
  tooltip?: string;
}
