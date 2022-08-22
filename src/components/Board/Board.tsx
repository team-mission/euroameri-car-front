import { PostType } from '@apis/type';
import { useRouter } from 'next/router';

import * as styles from './Board.style';

interface BoardProps {
  postList: PostType[];
  currentPage: number;
  totalSize: number;
}

const Board = ({ postList, currentPage, totalSize }: BoardProps) => {
  const router = useRouter();

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

  const movePostPage = (id: number) => {
    router.push(`/post/${id}`);
  };

  const changePage = (page: number) => {
    router.push(
      {
        query: {
          page,
        },
      },
      undefined,
      { scroll: false },
    );
  };

  return (
    <>
      <styles.TableWrapper
        columns={columns}
        dataSource={postList}
        onRow={(record: any) => ({
          onClick: (e) => {
            e.preventDefault();
            return Number.isInteger(record.id) && movePostPage(record.id);
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
