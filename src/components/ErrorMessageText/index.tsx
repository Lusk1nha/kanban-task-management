import { Text } from "./style"
import { IErrorMessageTextProps } from './IErrorMessageTextProps';
import { useEffect } from 'react';

export function ErrorMessageText({ message, setHasError}: IErrorMessageTextProps) {
  useEffect(() => {
    if(message != null) {
      return setHasError(true)
    }

    setHasError(false)
  }, [])

  return(
    <Text>
      {message != null ? message : null}
    </Text>
  )
}