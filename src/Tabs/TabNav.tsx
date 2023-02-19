import React, { useContext } from 'react';
import classNames from 'classnames';
import type { TabNavProps } from './interface';
import { TabsContext } from './index';
import styles from './index.less';

const TabNav: React.FC<TabNavProps> = () => {
  const { selectedKey, tabs, setSelectedKey } = useContext(TabsContext);

  const onTabChange = (curKey: string) => {
    setSelectedKey(curKey);
  };

  return (
    <div className={styles.nav}>
      {tabs?.map((tab) => (
        <div
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={classNames(styles.navItem, selectedKey === tab.key && styles.navItemSelected)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default TabNav;
