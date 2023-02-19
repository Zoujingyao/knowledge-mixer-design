import React, { useContext } from 'react';
import { TabsProps } from './interface';
import TabNav from './TabNav';
import { TabsContext } from './index';
import styles from './index.less';
import classNames from 'classnames';

const Tabs: React.FC<TabsProps> = (props) => {
  const { selectedKey, tabs } = useContext(TabsContext);

  const activeIdx: number | undefined = React.useMemo(() => {
    if (!tabs.length) return undefined;
    if (!selectedKey) return 0;
    return tabs?.findIndex((tab) => tab.key === selectedKey);
  }, [selectedKey, tabs]);

  return (
    <div className={styles.kmTab}>
      <TabNav {...props} />
      {activeIdx !== undefined && (
        <div className={classNames(styles.kmTabPanel, props?.panelClassName)}>{tabs?.[activeIdx]?.children}</div>
      )}
    </div>
  );
};

export default Tabs;
