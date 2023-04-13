import { SelectChangeEvent } from '@mui/material';

import { IconNameValues, Sx } from '../../generic.types';

export interface IDrop {
  defaultValue?: string;
  disabled?: boolean;
  dropDownLabel: string;
  onChangeCallback?: (event: SelectChangeEvent) => void;
  selectOption: IconNameValues;
  sx?: Sx;
  translate?: boolean;
}
