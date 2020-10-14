import { useState } from 'react';

const useModal = (initial) => {
  const [isOpen, setIsOpen] = useState(initial);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(state => !state);
  };

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

export default useModal;
