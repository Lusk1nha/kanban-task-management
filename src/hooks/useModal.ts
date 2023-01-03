
import { useState } from 'react';

export default function useModal(defaultValue?: boolean) {
  const [on, setOn] = useState<boolean>(defaultValue ?? true);
  const [content, setContent] = useState<React.ReactNode>(null);
  
  return [on, setOn, content, setContent] as const
};