import { Circle } from './StatusCircle.styles';
import IProps from './StatusCircle.types';

const StatusCircle = ({ color, disabled }: IProps) => (
  <Circle component="span" className={disabled ? 'disabled' : ''} sx={{ backgroundColor: color }} />
);

export default StatusCircle;
