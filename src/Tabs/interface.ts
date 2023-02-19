import React from 'react';

export type TabItemType = {
  /** 对应 activeKey */
  key: string;
  /** 选项卡头显示文字 */
  label: React.ReactNode;
  /** 选项卡面板显示内容 */
  children: React.ReactNode;
  /** 是否禁用该面板 */
  disabled?: boolean;
};

export type TabsProps = {
  /** 配置选项卡内容 */
  items?: TabItemType[];
  /** 当前激活 tab 面板的 key, 默认激活第一项 */
  activeKey?: string;
  /** 切换面板的回调 */
  onChange?: (activeKey: string) => void;
  /** 标签居中展示 */
  centered?: boolean;
  /** tab bar 上额外的元素 */
  tabBarExtraContent?: React.ReactNode;
  /** 面板样式类名 */
  panelClassName?: string;
};

export type TabNavProps = Omit<TabsProps, 'items'> & {
  tabs?: TabItemType[];
};

export type TabContext = {
  selectedKey: string;
  setSelectedKey: (selectedKey: string) => void;
  tabs: TabItemType[];
  setTabs: (tabs: TabItemType[]) => void;
};
