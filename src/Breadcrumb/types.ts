import { ReactNode } from 'react';

export interface BreadcrumbProps {
  items: { key: any; label: ReactNode }[];
  separator?: string | ReactNode;
}
