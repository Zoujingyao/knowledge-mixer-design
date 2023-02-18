import React, { FC, PropsWithChildren, useCallback, useMemo, ReactNode, useRef } from 'react';
import { InputProps } from './types';
import { getPrefixCls } from '@/utils';
import { isFunction } from 'lodash-es';
import classNames from 'classnames';
import { Close } from '@/src';
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
    prefix,
    suffix,
  } = props;

  const iptRef = useRef<HTMLInputElement | null>(null);

  const isAffix = allowClear || prefix !== undefined || suffix !== undefined; // 是否需要元素包裹

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
        [`${selfPrefixCls}-${status}`]: status && !allowClear && !prefix && !suffix,
        [`${selfPrefixCls}-${sizeCls}`]: sizeCls,
        [`${selfPrefixCls}-border-none`]: isAffix || !bordered,
      },
      className,
    );
  }, [selfPrefixCls, status, allowClear, prefix, suffix, sizeCls, isAffix, bordered, className]);
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
  const defaultInput = useMemo(
    () => (
      <input
        ref={iptRef}
        type={type}
        onChange={onChange ? handleOnChange : undefined}
        onBlur={onBlur ? handleOnBlur : undefined}
        className={Inputclasses}
        placeholder={placeholder}
        disabled={disabled}
        value={textValue}
        id={id}
        defaultValue={defaultValue || undefined}
      />
    ),
    [
      Inputclasses,
      defaultValue,
      disabled,
      handleOnBlur,
      handleOnChange,
      id,
      onBlur,
      onChange,
      placeholder,
      textValue,
      type,
    ],
  );
  // 处理清空输入框
  const handleClearClick = useCallback(() => {
    (iptRef.current as any).value = '';

    // handleOnChange(iptRef.current);
  }, [iptRef]);

  // 添加前后元素的处理
  const AffixClasses = useMemo(
    () =>
      classNames({
        [`${selfPrefixCls}-affix-wrapper-${status}`]: status,
        [`${selfPrefixCls}-affix-wrapper`]: isAffix,
        [`${selfPrefixCls}-affix-wrapper-${sizeCls}`]: sizeCls,
        [`${selfPrefixCls}-border-none`]: !bordered,
      }),
    [bordered, isAffix, selfPrefixCls, sizeCls, status],
  );

  const clearIconClassName = useMemo(
    () => classNames('km-input-clear-icon', { ['km-input-clear-icon-hidden']: value === '' }),
    [value],
  );
  const suffixSpan = useMemo(
    () =>
      !allowClear
        ? suffix && <span className="km-input-suffix">{suffix}</span>
        : suffix && (
            <span className="km-input-suffix">
              <span className={clearIconClassName}>
                {
                  <Close
                    onClick={() => {
                      handleClearClick();
                    }}
                  />
                }
              </span>
              {suffix}
            </span>
          ),
    [allowClear, suffix, clearIconClassName, handleClearClick],
  );
  const AffixInput = isAffix && (
    <span className={AffixClasses}>
      {prefix && <span className="km-input-prefix">{prefix}</span>}
      {defaultInput}
      {suffixSpan}
    </span>
  );

  return <>{isAffix ? AffixInput : defaultInput}</>;
};

export default React.memo(Input);
