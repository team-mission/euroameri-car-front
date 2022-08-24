import { postAsync, deleteAsync, ApiResult } from './apiUtils';
import {
  PostDetailType,
  AddPostType,
  AddPostInputType,
  PasswordInputType,
} from './type';

/**
 * 게시물 정보 조회
 * @param postId
 * @param password
 */
export const getPostDetailAsync = async (postId: number, password?: string) => {
  const result = await postAsync<PostDetailType, PasswordInputType>(
    `/post/${postId}`,
    {
      password,
    },
  );

  return result;
};

/**
 * 게시물 작성
 * @param title
 * @param content
 * @param name
 * @param email
 * @param phone
 * @param images
 * @param secret
 * @param password
 */
export const addPostAsync = async (
  title: string,
  content: string,
  name: string,
  email: string,
  phone: string,
  images: string[],
  secret: boolean,
  password: string,
  token: string,
): ApiResult<AddPostType> => {
  const result = await postAsync<AddPostType, AddPostInputType>('/post', {
    title,
    content,
    name,
    email,
    phone,
    images,
    secret,
    password,
    token,
  });

  return result;
};

/**
 * 게시물 삭제
 * @param postId
 * @param password
 */
export const deletePostAsync = async (
  postId: number,
  password?: string,
): ApiResult<undefined> => {
  const result = await deleteAsync<undefined, PasswordInputType>(
    `/post/${postId}`,
    {
      data: {
        password,
      },
    },
  );

  return result;
};
