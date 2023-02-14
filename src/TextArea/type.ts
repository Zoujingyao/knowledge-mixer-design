import React, { ReactNode } from 'react';

export interface TextAreaProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   * @default {}
   */
  moreStyle?: object;
  /**
   * @description 提示
   * @default ''
   */
  placeholder?: string;
  /**
   * @description 文本域内容最大长度
   */
  maxLength?: number;
  /**
   * @description 输入框内容改变回调
   * @params e
   */
  handleIptChange?: (e: string) => void;
  /**
   * @description 输入框聚焦回调
   */
  handleIptFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * @description 输入框点击回调
   */
  handleClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
  /**
   * @description 输入框失去焦点回调
   */
  handleIptBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * @description 输入框键盘监听
   */
  handleKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  /**
   * @description 默认内容
   * @default ''
   */
  defaultValue?: string;
}
