import React, { useCallback, useState } from 'react';

export const useInput = () => {
  const [input, setInput] = useState<string>('');
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const value: string = e.target.value;
    setInput(value);
  }, []);
  return [input, setInput, onChange] as const;
};