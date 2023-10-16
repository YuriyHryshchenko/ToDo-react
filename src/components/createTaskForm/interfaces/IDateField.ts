import { IDisabled } from './IDisabled';

export interface IDateField extends IDisabled {
  date?: Date | null;
  onChange?: (newValue: Date | null) => void;
}
