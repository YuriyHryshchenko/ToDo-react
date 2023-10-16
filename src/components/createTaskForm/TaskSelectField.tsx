import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { ISelectField } from './interfaces/ISelectField';

const TaskSelectField: React.FC<ISelectField> = (
  props,
): React.ReactElement => {
  const {
    name = 'selectBox',
    label = 'Select Box',
    value = '',
    items = [
      {
        value: '',
        label: 'Add Items',
      },
    ],
    disabled = false,
    onChange,
  } = props;
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        name={name}
        label={label}
        value={value}
        disabled={disabled}
        onChange={onChange}
      >
        {items.map((item, index) => (
          <MenuItem
            key={item.value + index}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TaskSelectField;
