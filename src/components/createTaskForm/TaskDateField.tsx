import React from 'react';
import {
  DesktopDatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IDateField } from './interfaces/IDateField';

const TaskDateField: React.FC<IDateField> = (
  props,
): React.ReactElement => {
  const {
    disabled = false,
    onChange,
    date = new Date(),
  } = props;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          value={date}
          format="dd/MM/yyyy"
          onChange={onChange}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};

export default TaskDateField;
