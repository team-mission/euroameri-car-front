import { getAsync, postAsync, deleteAsync, ApiResult } from './apiUtils';
import { CommentType, AddCommentInputType } from './type';

/**
 * 게시물에 대한 댓글 조회
 * @param postId
 * @returns
 */
export const getCommentsAsync = async (
  postId: number,
): ApiResult<CommentType[]> => {
  const result = await getAsync<CommentType[], any>(`/post/${postId}/comment`);

  return result;
};

/**
 * 댓글 작성
 * @param postId
 * @param content
 * @returns
 */
export const addCommentAsync = async (
  postId: number,
  content: string,
): ApiResult<undefined> => {
  const result = await postAsync<undefined, AddCommentInputType>(
    `/post/${postId}/comment`,
    {
      content,
    },
  );

  return result;
};

export const deleteCommentAsync = async (
  postId: number,
  commId: number,
): ApiResult<undefined> => {
  const result = await deleteAsync<undefined, undefined>(
    `/post/${postId}/comment/${commId}`,
  );

  return result;
};
