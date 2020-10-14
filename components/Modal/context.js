import { createContext } from 'react';

const modalContext = createContext({
  close: () => {},
});

export const ModalProvider = modalContext.Provider;
export const ModalConsumer = modalContext.Consumer;
