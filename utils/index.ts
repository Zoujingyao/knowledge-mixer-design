export const tuple = <T extends string[]>(...args: T) => args;
export const tupleNum = <T extends number[]>(...args: T) => args;
export const getPrefixCls = (prefixCls: string) => {
  return prefixCls ? `km-${prefixCls}` : 'km';
};
