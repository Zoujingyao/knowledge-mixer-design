import React, { useContext } from 'react';
import classNames from 'classnames';
import type { TabItemType, TabNavProps } from './interface';
import { TabsContext } from './index';
import { getPrefixCls } from '@/utils';
import './index.less';

const TabNav: React.FC<TabNavProps> = (props) => {
  const { selectedKey, tabs, setSelectedKey } = useContext(TabsContext);

  const onTabChange = (tab: TabItemType) => {
    if (tab?.disabled) return;
    setSelectedKey(tab.key);
  };

  const tabNavPrefixCls = `${getPrefixCls('tab')}-nav`;
  const navWrapPrefixCls = classNames(tabNavPrefixCls, {
    [`${tabNavPrefixCls}-centered`]: props?.centered,
  });
  const tabNavListPrefixCls = `${tabNavPrefixCls}-list`;
  const tabNavItemPrefixCls = `${tabNavListPrefixCls}-item`;

  return (
    <div className={navWrapPrefixCls}>
      <div className={tabNavListPrefixCls}>
        {tabs?.map((tab) => {
          const itemClassName = classNames(tabNavItemPrefixCls, {
            [`${tabNavItemPrefixCls}-selected`]: selectedKey === tab.key,
            [`${tabNavItemPrefixCls}-disabled`]: tab?.disabled || false,
          });
          return (
            <div key={tab.key} onClick={() => onTabChange(tab)} className={itemClassName}>
              {tab.label}
            </div>
          );
        })}
      </div>
      {props?.tabBarExtraContent}
    </div>
  );
};

export default TabNav;
