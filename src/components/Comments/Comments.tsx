import { useCallback, useState, useEffect } from 'react';
import { List, Comment, Tooltip, message } from 'antd';

import { checkConnectSid } from '@store/atom';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 쿠키 상태 확인
  useEffect(() => {
    setIsLoggedIn(checkConnectSid());

    // 1초마다 쿠키 상태 체크
    const interval = setInterval(() => {
      setIsLoggedIn(checkConnectSid());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      {isLoggedIn && <CommentInput postId={postId} refetch={refetch} />}
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
                  isLoggedIn
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
