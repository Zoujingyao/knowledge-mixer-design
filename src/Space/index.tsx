import React from 'react';
import './index.less';
import type { FC, PropsWithChildren } from 'react';
import { SpaceProps } from './types';

const Space: FC<PropsWithChildren<SpaceProps>> = (props) => {
  const { children, size = 'small', direction = 'horizontal', wrap = false, align } = props;
  let className = 'km';

  if (direction === 'vertical') {
    className += ' km-vertical';
  }
  if (align) {
    className += ` km-align-${align}`;
  }

  let gap = 8;
  if (size || Number(size) >= 0) {
    if (Object.prototype.toString.call(size).includes('String')) {
      const sizeObj: any = { large: 24, middle: 16, small: 8 };
      if (['large', 'middle', 'small'].includes(size)) gap = sizeObj[size];
    }
    if (Object.prototype.toString.call(size).includes('Number')) {
      gap = Number(size);
    }
  }
  const style: any = { gap: `${gap}px` };

  if (wrap && direction === 'horizontal') style.flexWrap = 'wrap';

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Space;
