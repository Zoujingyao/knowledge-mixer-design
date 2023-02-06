import React, { FC, PropsWithChildren, useCallback } from 'react';
import { InputProps } from './types';
import { getPrefixCls } from '../../utils';
import { isFunction } from 'lodash-es';
import classNames from 'classnames';
import './index.less';

const Input: FC<PropsWithChildren<InputProps>> = (props) => {
  const {
    className = '',
    id,
    onBlur,
    onChange,
    value,
    defaultValue = '',
    placeholder = '',
    allowClear = false,
    bordered = true,
    type = 'text',
    status,
    size = 'middle',
    disabled = false,
  } = props;
  const selfPrefixCls = getPrefixCls('input');

  let sizeCls = '';
  switch (size) {
    case 'middle':
      sizeCls = 'md';
      break;
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      sizeCls = 'md';
      break;
  }
  // 类名汇总
  const classes = classNames(
    selfPrefixCls,
    {
      [`${selfPrefixCls}-${status}`]: status,
      [`${selfPrefixCls}-${sizeCls}`]: sizeCls,
      [`${selfPrefixCls}-border-none`]: !bordered,

      // [`${selfPrefixCls}-icon-only`]: !children && children !== 0 && iconType,
    },
    className,
    // LoadingNode() && childrenNode ? `${selfPrefixCls}-has-icon` : '',
  );
  // onChange的处理
  const handleOnChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      if (isFunction(onChange)) onChange(e.target.value);
    },
    [onChange],
  );
  const handleOnBlur = useCallback(
    (e: any) => {
      if (isFunction(onBlur)) onBlur(e);
    },
    [onBlur],
  );

  const textValue = value || defaultValue;
  return (
    <input
      type={type}
      onChange={handleOnChange}
      className={classes}
      placeholder={placeholder}
      disabled={disabled}
      value={textValue}
      onBlur={handleOnBlur}
      id={id}
    />
  );
};

const fath = () => {
  const onChange = (e: any) => {
    console.log(e);
  };
  return <Input />;
};

export default React.memo(Input);
