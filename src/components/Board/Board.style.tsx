import styled from '@emotion/styled';
import { Table } from 'antd';

export const TableWrapper = styled(Table)`
  margin-top: 30px;

  & tbody > tr {
    cursor: pointer;
  }
`;
