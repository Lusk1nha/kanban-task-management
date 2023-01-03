
import useModal from '../../../hooks/useModal';

import { createContext } from 'react';
import { ModalProviderProps } from './ModalProviderProps';
import { IModalContext } from './../../../shared/models/IModalContext';
import { Modal } from '../../../components/Modal';

export const ModalContext = createContext<IModalContext | null>(null)

export function ModalProvider({ children }: ModalProviderProps) {
  const [opened, setOpened, content, setContent] = useModal();

  return (
    <ModalContext.Provider value={{ opened, setOpened, content, setContent }}>
      {children}
      
      <Modal on={opened}>
        {content}
      </Modal>
    </ModalContext.Provider>
  )
}