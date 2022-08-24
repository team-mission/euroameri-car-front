import { List, Comment } from 'antd';
import { useAtom } from 'jotai';

import { adminModeAtom } from '@store/atom';
import { CommentType } from '@apis/type';
import CommentInput from './CommentInput';
import * as styles from './Comments.style';

interface CommentsProps {
  postId: number;
  data: CommentType[];
  refetch: () => void;
}

const Comments = ({ postId, data, refetch }: CommentsProps) => {
  const [adminMode, setAdminMode] = useAtom(adminModeAtom);

  return (
    <>
      {adminMode && <CommentInput postId={postId} refetch={refetch} />}
      {data.length > 0 && (
        <List
          header="관리자 답변"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <styles.CommentItem key={item.id}>
              <Comment author="관리자" content={item.content} />
            </styles.CommentItem>
          )}
        />
      )}
    </>
  );
};

export default Comments;
