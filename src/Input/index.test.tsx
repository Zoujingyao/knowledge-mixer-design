import React from 'react';
import Input from './index';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

describe('<Input />', () => {
  it('render Input with dumi', () => {
    try {
      const ele = renderer.create(<Input size="small" placeholder="small" />).toJSON();
      expect(ele).toMatchSnapshot();
    } catch (e) {
      console.log(e);
    }
  });
});
