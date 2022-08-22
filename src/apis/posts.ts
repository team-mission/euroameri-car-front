import { getAsync, ApiResult } from './apiUtils';
import { PostType } from './type';

/**
 * 게시물 목록 조회
 * @param page
 * @param display
 */
export const getPostListAsync = async (
  page: number,
  display: number,
): ApiResult<PostType[]> => {
  const result = await getAsync<PostType[], any>(`/posts/`, {
    params: { page, display },
  });

  return result;
};
