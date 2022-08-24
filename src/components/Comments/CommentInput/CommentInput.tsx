import { useCallback, useState } from 'react';
import { addCommentAsync } from '@apis/comment';
import { message } from 'antd';
import * as styles from './CommentInput.style';

interface CommentInputProps {
  postId: number;
  refetch: () => void;
}

const CommentInput = ({ postId, refetch }: CommentInputProps) => {
  const [comment, setComment] = useState('');

  const onCommentChange = useCallback((e: any) => {
    setComment(e.target.value);
  }, []);

  const onSubmit = useCallback(async () => {
    const res = await addCommentAsync(postId, comment);

    if (res.isSuccess) {
      setComment('');
      refetch();
      return;
    }

    message.warning('댓글 작성 실패');
  }, [comment, postId, refetch]);

  return (
    <styles.CommentWriteForm onFinish={onSubmit}>
      <styles.CommentInputBox
        required
        value={comment}
        onChange={onCommentChange}
      />
      <styles.StyledButton type="submit">확인</styles.StyledButton>
    </styles.CommentWriteForm>
  );
};

export default CommentInput;
