import React, { useState, useCallback } from 'react';

export default function useField(initialValue: string): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState<string>(initialValue);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return [value, onChange];
}
