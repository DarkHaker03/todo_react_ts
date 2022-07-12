import React, { FC } from 'react';

import input from './index.module.css';

export interface IInput {
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string,
}

export const Input: FC<IInput> = React.memo(({ inputChange, value }) => {
  return (
    <input className={[input.input, input.input_width, 'input'].join(' ')} onChange={inputChange} value={value} />
  );
});