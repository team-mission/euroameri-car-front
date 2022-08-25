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

export const PostWriteBtn = styled.button`
  border: none;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
