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

  & .ant-pagination-item-active,
  .ant-pagination-item-active > a {
    color: #ce6326;
    border-color: #ce6326;
  }

  & .ant-pagination-item > a,
  .ant-pagination-next > button,
  .ant-pagination-prev > button {
    :hover {
      color: #ce6326;
      fill: #ce6326;
    }
  }
`;

export const PostWriteBtn = styled.button`
  border: 0.3px solid gray;
  border-radius: 3px;
  margin-top: 20px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
