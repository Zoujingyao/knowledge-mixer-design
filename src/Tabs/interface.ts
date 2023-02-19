import React from 'react';

export type TabItemType = {
  /** 对应 activeKey */
  key: string;
  /** 选项卡头显示文字 */
  label: React.ReactNode;
  /** 选项卡面板显示内容 */
  children: React.ReactNode;
};

export type TabsProps = {
  /** 当前激活 tab 面板的 key, 默认激活第一项 */
  activeKey?: string;
  /** 配置选项卡内容 */
  items?: TabItemType[];
  /** 切换面板的回调 */
  onChange?: (activeKey: string) => void;
};

export type TabNavProps = Pick<TabsProps, 'activeKey'> & {
  tabs?: TabItemType[];
};

export type TabContext = {
  selectedKey: string;
  setSelectedKey: (selectedKey: string) => void;
  tabs: TabItemType[];
  setTabs: (tabs: TabItemType[]) => void;
};
