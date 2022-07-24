import React, { FC } from 'react';

import styles from './index.module.css';

export interface ITextArea {
  textAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

export const TextArea: FC<ITextArea> = React.memo(({ textAreaChange, value }) => {
  return (
    <textarea className={styles.textArea} onChange={textAreaChange} value={value}>
    </textarea>
  );
});