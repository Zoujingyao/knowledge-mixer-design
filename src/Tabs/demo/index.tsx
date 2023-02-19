/**
 * title: 自定义样式
 * description: 自定义面板样式。
 */

import React from 'react';
import { Tabs } from '@/src';
import styles from './index.less';

export default () => {
  return (
    <Tabs
      items={new Array(3).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `Tab ${id}`,
          key: id,
          children: `Content of Tab Pane ${id}`,
        };
      })}
      panelClassName={styles.panel}
    />
  );
};
