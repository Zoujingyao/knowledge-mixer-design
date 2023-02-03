import { useEffect, useRef } from 'react';

import type { ModalProps } from './types';

export const useModal = (props: ModalProps) => {
  const {
    open,
    keyboard = true,

    onCancel,
    onOk,
  } = props;

  const modalRef = useRef<any>();

  useEffect(() => {
    if (!modalRef.current) return;

    modalRef.current.style.display = open ? 'block' : 'none';
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!keyboard) return;
    if (e.key === 'Escape') {
      e.stopPropagation();
      onCancel?.();
    }
  };

  const handleClose = () => {
    onCancel?.();
  };

  const handleOk = () => {
    onOk?.();
  };

  return {
    modalRef,
    handleKeyDown,
    handleClose,
    handleOk,
  };
};
