import { LabelValuePairs, LabelValues, ReactEvent } from 'types/generic.types';

export default interface IAutoComplete {
  label: string;
  options: LabelValuePairs;
  onChange?: (e: ReactEvent, value: LabelValues) => void;
  multiple?: boolean;
  size?: 'small' | 'medium';
}
