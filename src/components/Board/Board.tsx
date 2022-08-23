import { PostType } from '@apis/type';

import * as styles from './Board.style';

interface BoardProps {
  postList: PostType[];
  currentPage: number;
  totalSize: number;
  movePostDetailPage: (id: number) => void;
  changePage: (pageNum: number) => void;
}

const Board = ({
  postList,
  currentPage,
  totalSize,
  movePostDetailPage,
  changePage,
}: BoardProps) => {
  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
      ellipsis: true,
      width: 80, // TODO
    },
    { title: '제목', dataIndex: 'title', key: 'title', ellipsis: true },
    {
      title: '작성자',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
      width: 120, // TODO
    },
  ];

  return (
    <>
      <styles.TableWrapper
        columns={columns}
        dataSource={postList}
        onRow={(record: any) => ({
          onClick: (e) => {
            e.preventDefault();
            return Number.isInteger(record.id) && movePostDetailPage(record.id);
          },
        })}
        pagination={false}
        size="middle"
      />
      <styles.PaginiationWrapper
        total={totalSize}
        current={currentPage}
        onChange={changePage}
        pageSize={10}
        showSizeChanger={false}
        hideOnSinglePage
      />
    </>
  );
};

export default Board;
