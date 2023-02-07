import React, { FC, PropsWithChildren, useCallback, useMemo } from 'react';
import { InputProps } from './types';
import { getPrefixCls } from '../../utils';
import { isFunction } from 'lodash-es';
import classNames from 'classnames';
import { Close } from '../../assets/';
import './index.less';

const Input: FC<PropsWithChildren<InputProps>> = (props) => {
  const {
    className = '',
    id,
    onBlur,
    onChange,
    value,
    defaultValue,
    placeholder = '',
    allowClear = false,
    bordered = true,
    type = 'text',
    status,
    size = 'middle',
    disabled = false,
  } = props;
  const selfPrefixCls = useMemo(() => getPrefixCls('input'), []);

  const sizeCls = useMemo(() => {
    switch (size) {
      case 'middle':
        return 'md';
      case 'large':
        return 'lg';
      case 'small':
        return 'sm';
      default:
        return 'md';
    }
  }, [size]);
  // 类名汇总
  const Inputclasses = useMemo(
    () =>
      classNames(
        selfPrefixCls,
        {
          [`${selfPrefixCls}-${status}`]: status && !allowClear,
          [`${selfPrefixCls}-${sizeCls}`]: sizeCls,
          [`${selfPrefixCls}-border-none`]: !bordered,

          // [`${selfPrefixCls}-icon-only`]: !children && children !== 0 && iconType,
        },
        className,
        // LoadingNode() && childrenNode ? `${selfPrefixCls}-has-icon` : '',
      ),
    [status, size],
  );
  // onChange的处理
  const handleOnChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      if (isFunction(onChange)) {
        onChange(e.target.value);
      } else {
      }
    },
    [onChange],
  );
  const handleOnBlur = useCallback(
    (e: any) => {
      if (isFunction(onBlur)) onBlur(e);
    },
    [onBlur],
  );

  const textValue = value || undefined;
  return (
    <>
      <input
        type={type}
        onChange={onChange ? handleOnChange : undefined}
        onBlur={onBlur ? handleOnBlur : undefined}
        className={Inputclasses}
        placeholder={placeholder}
        disabled={disabled}
        value={textValue}
        id={id}
        defaultValue={defaultValue}
      />
      {!allowClear || <Close className="icon kw-ipt-close" onClick={() => console.log(111)} />}
    </>
  );
};

export default React.memo(Input);
