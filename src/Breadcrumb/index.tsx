import React from 'react';
import { BreadcrumbProps } from './types';
import './index.less';
function Breadcrumb(props: BreadcrumbProps) {
  const { items, separator = '/' } = props;
  return (
    <nav className="km-breadcrumb">
      <ol>
        {items.map((el) => (
          <li key={el.key}>
            <span className="km-breadcrumb-link">{el.label}</span>
            <span className="km-breadcrumb-separator">{separator}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
