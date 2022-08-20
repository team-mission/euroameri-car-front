import { useRouter } from 'next/router';

import * as styles from './Board.style';

interface DataType {
  key: number;
  id: number;
  title: string;
  name: string;
  date: string;
}

interface BoardProps {
  postList: DataType[];
}

const Board = ({ postList }: BoardProps) => {
  const router = useRouter();

  const columns = [
    { title: 'No', dataIndex: 'id', key: 'id' },
    { title: '제목', dataIndex: 'title', key: 'title' },
    { title: '성명', dataIndex: 'name', key: 'name' },
    { title: '날짜', dataIndex: 'date', key: ' date' },
  ];

  const movePostPage = (id: number) => {
    router.push(`/post/${id}`);
  };

  return (
    <styles.TableWrapper
      columns={columns}
      dataSource={postList}
      onRow={(record, rowIndex) => ({
        onClick: (e) => {
          e.preventDefault();
          return Number.isInteger(rowIndex) && movePostPage(rowIndex as number);
        },
      })}
    />
  );
};

export default Board;
