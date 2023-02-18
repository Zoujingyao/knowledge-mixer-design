import type { CSSProperties, ReactNode } from 'react';
import type { ButtonProps } from '../Button/types';

type BaseProps = {
  className?: string;
  style?: React.HTMLProps<HTMLStyleElement>;
};

export type ModalProps = {
  wrapClassName?: string;
  getContainer?: HTMLElement | (() => HTMLElement) | false;
  mask?: boolean;
  maskClosable?: boolean;
  maskStyle?: CSSProperties;
  keyboard?: boolean;
  bodyStyle?: CSSProperties;
  width?: string | number;
  zIndex?: number;
  cancelText?: ReactNode;
  okText?: ReactNode;
  title?: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  confirmLoading?: boolean;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  closable?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
} & BaseProps;
