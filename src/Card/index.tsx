import React from 'react';
import classnames from 'classnames';
import { CardProps } from './types';
import { getPrefixCls } from '../../utils';
import { Skeleton } from 'antd';
import './index.less';

const Card = React.forwardRef((props: CardProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    headClassName,
    title,
    extra,
    cover,
    loading,
    bodyClassName,
    children,
    styleClassName,
    bordered = true,
    hoverable = false,
    cardSize = 'normal',
  } = props;
  const selfPrefixCls = getPrefixCls('card');
  let head: React.ReactNode;
  if (title || extra) {
    const headClass = classnames(headClassName, `${selfPrefixCls}-head`);
    const headWrapClass = classnames(`${selfPrefixCls}-head-wrapper`);
    head = (
      <div className={headClass}>
        <div className={headWrapClass}>
          {title && <div className={`${selfPrefixCls}-head-title`}>{title}</div>}
          {extra && <div className={`${selfPrefixCls}-extra`}>{extra}</div>}
        </div>
      </div>
    );
  }
  const loadingBlock = (
    <Skeleton loading active paragraph={{ rows: 4 }} title={false}>
      {children}
    </Skeleton>
  );
  const coverDom = cover ? <div className={classnames(`${selfPrefixCls}-cover`)}>{cover}</div> : null;
  const body = (
    <div className={classnames(bodyClassName, `${selfPrefixCls}-body`)}>{loading ? loadingBlock : children}</div>
  );
  const extraStyle = classnames(
    {
      [`${selfPrefixCls}-border`]: bordered,
      [`${selfPrefixCls}-hover`]: hoverable,
      [`${selfPrefixCls}-body`]: true,
      [`${selfPrefixCls}-body--${cardSize}`]: true,
    },
    styleClassName,
  );
  return (
    <div ref={ref} className={classnames(extraStyle, `${selfPrefixCls}-cover`)}>
      {head}
      {coverDom}
      {body}
    </div>
  );
});

export default Card;
