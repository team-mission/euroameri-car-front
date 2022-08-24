import { useCallback } from 'react';
import { List, Comment, Tooltip, message } from 'antd';
import { useAtom } from 'jotai';

import { adminModeAtom } from '@store/atom';
import { CommentType } from '@apis/type';
import { formatDate } from '@utils/date';
import { deleteCommentAsync } from '@apis/comment';
import CommentInput from './CommentInput';
import * as styles from './Comments.style';

interface CommentsProps {
  postId: number;
  data: CommentType[];
  refetch: () => void;
}

const Comments = ({ postId, data, refetch }: CommentsProps) => {
  const [adminMode, setAdminMode] = useAtom(adminModeAtom);

  const onDelte = useCallback(
    async (commId: number) => {
      const res = await deleteCommentAsync(postId, commId);

      if (res.isSuccess) {
        refetch();
        return;
      }

      message.warn('삭제 실패');
    },
    [postId, refetch],
  );

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
              <Comment
                author="관리자"
                content={item.content}
                datetime={
                  <Tooltip>
                    <span>{formatDate(item.createdAt)}</span>
                  </Tooltip>
                }
                actions={
                  adminMode
                    ? [
                        <styles.CommentDelBtn
                          key="list-loadmore-edit"
                          onClick={() => onDelte(item.id)}
                        >
                          삭제
                        </styles.CommentDelBtn>,
                      ]
                    : undefined
                }
              />
            </styles.CommentItem>
          )}
        />
      )}
    </>
  );
};

export default Comments;
