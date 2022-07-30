import React, { FC } from 'react';

import styles from './index.module.css';

export interface ITextArea {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

export const TextArea: FC<ITextArea> = ({ onChange, value }) => {
  console.log("textArea")
  return (
    <textarea className={styles.textArea} onChange={onChange} value={value} />
  );
};