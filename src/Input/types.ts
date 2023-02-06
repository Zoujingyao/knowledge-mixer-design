import React from 'react';

export interface InputProps {
  className?: string;
  value?: string;
  onBlur?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  allowClear?: boolean;
  bordered?: boolean;
  type?: string;
  status?: null | 'error' | 'warning';
  size?: 'large' | 'middle' | 'small';
  disabled?: boolean;
  defaultValue?: string;
  id?: string;
}
