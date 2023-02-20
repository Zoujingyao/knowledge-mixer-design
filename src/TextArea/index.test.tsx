import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import TextArea from './index';

describe('<TextArea />', () => {
  it('render TextArea with dumi', () => {
    try {
      const ele = renderer.create(<TextArea />).toJSON();
      expect(ele).toMatchSnapshot();
    } catch (e) {
      console.log(e);
    }
  });
});
