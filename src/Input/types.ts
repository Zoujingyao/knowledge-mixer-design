import React, { ReactNode } from 'react';

export interface InputProps {
  /** 类名  */
  className?: string;
  /** 输入框的值  */
  value?: string;
  /** 输入框失去焦点的回调事件  */
  onBlur?: any;
  /** 输入框改变的回调事件  */
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** 提示文字  */
  placeholder?: string;
  /**
   * 允许清空
   * @default false
   */
  allowClear?: boolean;
  /**
   * 是否有边框
   * @default true
   */
  bordered?: boolean;
  /**
   * 和原生input的type一样
   *  @default text
   */
  type?: string;
  /** 输入框状态  */
  status?: null | 'error' | 'warning';
  /** 输入框大小，默认为middle  */
  size?: 'large' | 'middle' | 'small';

  disabled?: boolean;
  defaultValue?: string;
  id?: string;
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
}
