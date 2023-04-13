import { GenericRecord, StrNum, StrNumNode } from '../../generic.types';

export type Order = 'asc' | 'desc';
export type CellData = { [x: string]: StrNum };
export type RowData = CellData[];

export interface IColumn {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  disableSorting?: boolean;
  format?: (value: StrNumNode, index?: number, data?: GenericRecord) => StrNumNode;
  id: string;
  label: string;
  maxWidth?: number;
  minWidth?: number;
  width?: string;
}

export type Columns = Array<IColumn>;

export interface ITableProps {
  columns: Columns;
  rows: RowData;
  size?: 'small' | 'medium';
  stickyHeader?: boolean;
}

export interface ISortTableProps extends ITableProps {
  defaultSort?: 'asc' | 'desc';
  defaultSortedCol?: string;
}
