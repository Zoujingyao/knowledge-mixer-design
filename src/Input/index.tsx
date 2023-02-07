import React, { FC, PropsWithChildren, useCallback, useMemo, ReactNode } from 'react';
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
    placeholder,
    allowClear = false,
    bordered = true,
    type = 'text',
    status,
    size = 'middle',
    disabled = false,
    addonAfter,
    addonBefore,
    prefix,
    suffix,
  } = props;

  const isAffix = allowClear || prefix !== undefined || suffix !== undefined; // 是否需要元素包裹
  const isGroup = addonAfter !== undefined || addonBefore !== undefined;

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
  const Inputclasses = useMemo(() => {
    return classNames(
      selfPrefixCls,
      {
        [`${selfPrefixCls}-${status}`]: status && !allowClear,
        [`${selfPrefixCls}-${sizeCls}`]: sizeCls,
        [`${selfPrefixCls}-border-none`]: isAffix || isGroup || !bordered,
      },
      className,
    );
  }, [status, sizeCls, className, allowClear, bordered, selfPrefixCls, isAffix, isGroup]);
  // 两个事件的处理
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
  // 基础Input
  const defaultInput = (
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
  );

  // 添加前后元素的处理
  const AffixClasses = classNames({
    [`${selfPrefixCls}-affix-wrapper`]: isAffix,
    [`${selfPrefixCls}-affix-wrapper-${sizeCls}`]: sizeCls,
    [`${selfPrefixCls}-border-none`]: isGroup || !bordered,
  });
  const AffixInput = isAffix && (
    <span className={AffixClasses}>
      {prefix && <span className="km-input-prefix">{prefix}</span>}
      {defaultInput}
      {suffix && <span className="km-input-suffix">{suffix}</span>}
    </span>
  );
  // 添加前后组件的处理

  const finalInput = isGroup ? <></> : isAffix ? AffixInput : defaultInput;

  return <>{finalInput}</>;
};

export default React.memo(Input);
