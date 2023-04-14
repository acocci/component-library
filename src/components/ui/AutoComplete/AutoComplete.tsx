import { Autocomplete, TextField } from '@mui/material';

import { LabelValues, ReactEvent } from '../../generic.types';

import IAutoComplete from './AutoComplete.types';

const AutoComplete = ({ label, multiple = false, onChange, options, size }: IAutoComplete) => (
  <>
    <Autocomplete
      size={size}
      disablePortal
      filterSelectedOptions={multiple}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      multiple={multiple}
      onChange={(e: ReactEvent, value: LabelValues) => {
        if (onChange && value) onChange(e, value);
      }}
      options={options}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderInput={(params: any) => <TextField {...params} label={label} />}
    />
  </>
);

export default AutoComplete;
