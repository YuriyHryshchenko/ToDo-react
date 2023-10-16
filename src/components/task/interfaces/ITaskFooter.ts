import React from 'react';

export interface ITaskFooter {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}
