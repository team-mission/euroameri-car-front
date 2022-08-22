import styled from '@emotion/styled';
import { Table, Pagination } from 'antd';

export const TableWrapper = styled(Table)`
  width: 100%;
  margin-top: 30px;

  & tbody > tr {
    cursor: pointer;
  }
`;

export const PaginiationWrapper = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
