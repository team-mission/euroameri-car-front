import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import { message } from 'antd';
import { useAtom } from 'jotai';

import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';
import PostContent from '@components/PostContent';
import Comments from '@components/Comments';
import Footer from '@components/Footer';
import InputModal from '@components/InputModal';

import { getPostDetailAsync } from '@apis/post';
import { getCommentsAsync } from '@apis/comment';
import { PostDetailType, CommentType } from '@apis/type';
import { adminModeAtom } from '@store/atom';

const PostDetailPage: NextPage = () => {
  const router = useRouter();
  const postId = Number(router.query.pid);

  const [adminMode, setAdminMode] = useAtom(adminModeAtom);

  const [postData, setPostData] = useState<PostDetailType | undefined>();
  const [commentsData, setCommentsData] = useState<CommentType[]>([]);
  const [password, setPassword] = useState<string>('');
  const [showPwdInput, setShowPwdInput] = useState<boolean>(false);
  const [isWrongPwd, setIsWrongPwd] = useState<boolean>(false);

  useEffect(() => {
    if (!router.isReady || !postId) {
      return;
    }

    async function updateData() {
      const res = await getPostDetailAsync(postId, password);

      if (res.isSuccess) {
        setShowPwdInput(false);
        setIsWrongPwd(false);
        setPostData(res.result);

        const commRes = await getCommentsAsync(postId);
        if (commRes.isSuccess) {
          setCommentsData(commRes.result);
        }
        return;
      }

      // 비밀번호 입력 띄우기
      if (res.result.statusCode === 401) {
        setShowPwdInput(true);

        if (isWrongPwd) message.info('올바르지 않은 비밀번호입니다.');
        setIsWrongPwd(true);
      }
    }

    updateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, postId, router.isReady]);

  const submitPassword = useCallback((pwd: string) => {
    setPassword(pwd);
  }, []);

  const refetch = useCallback(async () => {
    const commRes = await getCommentsAsync(postId);
    if (commRes.isSuccess) {
      setCommentsData(commRes.result);
    }
  }, [postId]);

  return (
    <>
      <MainHeader />
      <SubHeader title="게시판" />
      <MainWrapper>
        {showPwdInput && (
          <InputModal title="password" submitPassword={submitPassword} />
        )}
        <PostContent data={postData} />
        <Comments data={commentsData} postId={postId} refetch={refetch} />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default PostDetailPage;
