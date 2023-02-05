import { tuple } from '@/utils';

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
export type ButtonType = (typeof ButtonTypes)[number];

const ButtonShapes = tuple('circle', 'round');
export type ButtonShape = (typeof ButtonShapes)[number];

const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

export type SizeType = 'small' | 'middle' | 'large' | undefined;

const colorSchemes = tuple('primary', 'success', 'error', 'warning');
export type colorScheme = (typeof colorSchemes)[number];

type BaseProps = {
  className?: string;
  style?: React.HTMLProps<HTMLStyleElement>;
};

export type BaseButtonProps = {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  loading?: boolean;
  prefixCls?: string;
  colorSchemes?: string;
  danger?: boolean;
  htmlType?: ButtonHTMLType;
  children?: React.ReactNode;
};

export type NativeButtonProps = {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export type ButtonProps = BaseProps & BaseButtonProps & NativeButtonProps;

export type Loading = number | boolean;
