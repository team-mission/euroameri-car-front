import { getAsync, ApiResult } from './apiUtils';
import { PostListType } from './type';

/**
 * 게시물 목록 조회
 * @param page
 * @param display
 */
export const getPostListAsync = async (
  page: number,
  display: number,
): ApiResult<PostListType> => {
  const result = await getAsync<PostListType, any>(`/posts/`, {
    params: { page, display },
  });

  return result;
};
