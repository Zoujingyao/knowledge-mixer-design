import { TupleToUnion } from './../../utils/index';
export type CustomCardSize = TupleToUnion<['large', 'normal', 'small']>;
export type CardProps = {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  headClassName?: string;
  bodyClassName?: string;
  styleClassName?: string;
  loading?: boolean;
  hoverable?: boolean;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  bordered?: boolean;
  cover?: React.ReactNode;
  cardSize?: CustomCardSize;
};
