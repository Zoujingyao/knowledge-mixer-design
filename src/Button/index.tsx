import React, { useState } from 'react';
import classNames from 'classnames';
import { Spin } from '@/src';
import { getPrefixCls } from '@/utils';
import type { FC, PropsWithChildren } from 'react';
import type { ButtonProps, Loading } from './types';
import './index.less';

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    htmlType = 'button' as ButtonProps['htmlType'],
    prefixCls,
    type,
    shape,
    size: customizeSize,
    className,
    colorSchemes,
    children,
    loading,
    style: customStyle,
    icon,
  } = props;

  const [innerLoading, setLoading] = useState<Loading>(false);

  let sizeCls = '';

  switch (customizeSize) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    if (innerLoading) return;
    if (loading) {
      setLoading(true);
      await onClick?.(e);
      setLoading(false);
    } else {
      onClick?.(e);
    }
  };

  const selfPrefixCls = getPrefixCls(prefixCls || 'btn');

  const iconType = innerLoading ? 'loading' : icon;

  const iconPrefixCls = getPrefixCls('btn-icon');

  const iconClasses = classNames(
    iconPrefixCls,
    {
      [`${iconPrefixCls}-${sizeCls}`]: sizeCls,
    },
    className,
  );

  const LoadingNode = () => {
    if (icon) return icon;
    return innerLoading && <Spin className={`${iconClasses} icon spin`} />;
  };

  const childrenNode = children || null;

  const classes = classNames(
    selfPrefixCls,
    {
      [`${selfPrefixCls}-${type}`]: type,
      [`${selfPrefixCls}-${shape}`]: shape,
      [`${selfPrefixCls}-${sizeCls}`]: sizeCls,
      [`${selfPrefixCls}-icon-only`]: !children && children !== 0 && iconType,
      [`${selfPrefixCls}-color-${colorSchemes}`]: colorSchemes,
    },
    className,
    LoadingNode() && childrenNode ? `${selfPrefixCls}-has-icon` : '',
  );

  return (
    <button type={htmlType} className={classes} onClick={handleClick} style={customStyle}>
      {LoadingNode()}
      {childrenNode}
    </button>
  );
};

export default Button;
