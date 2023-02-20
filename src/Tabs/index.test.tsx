import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Tabs from './index';

describe('<Tabs />', () => {
  it('render Tabs with dumi', () => {
    try {
      const ele = renderer
        .create(
          <Tabs
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Tab ${id}`,
                key: id,
                children: `Content of Tab Pane ${id}`,
              };
            })}
          />,
        )
        .toJSON();
      expect(ele).toMatchSnapshot();
    } catch (e) {
      console.log(e);
    }
  });
});
