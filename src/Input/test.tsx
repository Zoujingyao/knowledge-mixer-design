import React from 'react';
import { Input } from 'antd';

const fath = () => {
  const onChange = (val: any) => {
    console.log(val);
  };
  return <Input onChange={onChange} />;
};
