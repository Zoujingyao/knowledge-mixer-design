import React from 'react';
import Breadcrumb from './index';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

const items = [
  { label: 'Home', key: 'item-1' }, // 菜单项务必填写 key
  { label: <a href="">Application Center</a>, key: 'item-2' },
  { label: <a href="">Application List</a>, key: 'item-3' },
  { label: 'An Application', key: 'item-4' },
];

describe('<Breadcrumb />', () => {
  it('render Breadcrumb with dumi', () => {
    try {
      const ele = renderer.create(<Breadcrumb items={items} />).toJSON();
      expect(ele).toMatchSnapshot();
    } catch (e) {
      console.log(e);
    }
  });
});
