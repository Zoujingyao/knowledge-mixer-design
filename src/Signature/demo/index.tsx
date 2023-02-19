/**
 * title: 自定义
 * description: 自定义操作栏和样式。
 */
import React from 'react';
import { Button, Signature, IconFont } from '@/src';
import styles from './index.less';

export default () => {
  return (
    <Signature
      tipText="子定义提示"
      footer={
        <div className={styles.options}>
          <Button>提交</Button>
          <Button>自定义1</Button>
          <Button>自定义2</Button>
        </div>
      }
      clearIcon={<IconFont type="icon-changyonggoupiaorenshanchu" className={styles.icon} />}
      className={styles.signature}
    />
  );
};
