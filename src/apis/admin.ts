import { postAsync } from './apiUtils';
import { LoginInputType } from './type';

/**
 * 관리자 로그인
 * @param uid
 * @param password
 */
export const adminLoginAsync = async (uid: string, password: string) => {
  const result = await postAsync<undefined, LoginInputType>('/admin/login', {
    uid,
    password,
  });

  return result;
};

/**
 * 관리자 로그아웃
 */
export const adminLogOutAsync = async () => {
  const result = await postAsync<undefined, undefined>(
    '/admin/logout',
    undefined,
  );

  return result;
};
