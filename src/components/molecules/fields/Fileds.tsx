import React, { FC } from 'react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import { TextArea } from '../../atoms/textArea/TextArea';

import styles from './index.module.css';

export interface IChildrens {
  input?: {
    inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
  },
  buttons?: {
    button1?: {
      onClick: () => void,
      text: string
    },
    button2?: {
      onClick: () => void
      text: string
    },
  },
  select?: {
    selectedValue: string[],
    optionsValue: string[],
    selectValueChange: (event: React.MouseEvent<HTMLDivElement>) => void
  },
  textArea?: {
    textAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    textAreaValue: string,
  },
  text?: string
}

export interface IFields {
  childrens: IChildrens
}

export const Fields: FC<IFields> = React.memo(({ childrens: { input, select, buttons, textArea, text } }) => {
  return (
    <div>
      <h3>{text}</h3>
      <div className={styles.block}>
        {input && <Input inputChange={input.inputChange} value={input.value} />}
        {/* {select && <Select selectedValue={select.selectedValue} optionsValue={select.optionsValue} selectValueChange={select.selectValueChange} />} */}
        {buttons?.button1 && <Button onClick={buttons.button1.onClick}>
          {buttons.button1.text}
        </Button>}
        {buttons?.button2 && <Button onClick={buttons.button2.onClick}>
          {buttons.button2.text}
        </Button>}
      </div>
      { textArea && <TextArea textAreaChange={textArea.textAreaChange} value={textArea.textAreaValue} />}
    </div>
  );
});