import React, { useEffect, useState } from 'react';
import { TabContext, TabItemType, TabsProps } from './interface';
import Tabs from './Tabs';

export const TabsContext = React.createContext<TabContext>({
  selectedKey: '',
  setSelectedKey: () => {
    return;
  },
  tabs: [],
  setTabs: () => {
    return;
  },
});

function TabsWrapper(props: React.PropsWithChildren<TabsProps>) {
  const { activeKey, items } = props;

  const [tabs, setTabs] = useState<TabItemType[]>([]);
  const [selectedKey, setSelectedKey] = useState<string>(activeKey || '');

  useEffect(() => {
    setTabs((items || []).filter((item) => item && typeof item === 'object' && 'key' in item));
  }, [items]);

  useEffect(() => {
    if (!selectedKey) setSelectedKey(tabs?.[0]?.key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs]);

  return (
    <TabsContext.Provider
      value={{
        selectedKey,
        setSelectedKey,
        tabs,
        setTabs,
      }}
    >
      <Tabs {...props} />
    </TabsContext.Provider>
  );
}

export default TabsWrapper;
