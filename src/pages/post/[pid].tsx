import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import { message } from 'antd';
import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';
import PostContent from '@components/PostContent';
import Comments from '@components/Comments';
import Footer from '@components/Footer';
import InputModal from '@components/InputModal';

import { deletePostAsync, getPostDetailAsync } from '@apis/post';
import { getCommentsAsync } from '@apis/comment';
import { PostDetailType, CommentType } from '@apis/type';
import { checkConnectSid } from '@store/atom';

const PostDetailPage: NextPage = () => {
  const router = useRouter();
  const postId = Number(router.query.pid);

  const [postData, setPostData] = useState<PostDetailType | undefined>();
  const [commentsData, setCommentsData] = useState<CommentType[]>([]);
  const [password, setPassword] = useState<string>('');
  const [showPwdInput, setShowPwdInput] = useState<boolean>(false);
  const [delMode, setDelMode] = useState<boolean>(false);

  useEffect(() => {
    if (!router.isReady || !postId) {
      return;
    }

    async function updateData() {
      const res = await getPostDetailAsync(postId, password);

      if (res.isSuccess) {
        setPostData(res.result);

        const commRes = await getCommentsAsync(postId);
        if (commRes.isSuccess) {
          setCommentsData(commRes.result);
          setPassword('');
        }
        return;
      }

      // 비밀번호 입력 띄우기
      if (res.result.statusCode === 401) {
        setShowPwdInput(true);
        message.info('비밀글입니다.');
      }
    }

    updateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId, router.isReady]);

  const onPasswordChange = useCallback((e: any) => {
    setPassword(e.target.value);
  }, []);

  const onDelete = useCallback(async () => {
    const delRes = await deletePostAsync(postId, password);

    if (delRes.isSuccess) {
      setShowPwdInput(false);
      message.info('삭제 성공');
      router.push('/board');
      return;
    }

    // 비밀번호 입력 띄우기
    if (delRes.result.statusCode === 401) {
      setShowPwdInput(true);
      setDelMode(true);
    }
  }, [password, postId, router]);

  const onSubmit = useCallback(async () => {
    const res = await getPostDetailAsync(postId, password);

    if (res.isSuccess) {
      setShowPwdInput(false);
      setPostData(res.result);

      const commRes = await getCommentsAsync(postId);
      if (commRes.isSuccess) {
        setCommentsData(commRes.result);
        setPassword('');
      }

      return;
    }

    if (res.result.statusCode === 401) {
      message.warn('잘못된 비밀번호입니다.');
    }
  }, [password, postId]);

  const onClickCancel = useCallback(() => {
    setShowPwdInput(false);
    setDelMode(false);
    setPassword('');
  }, []);

  const refetchByComment = useCallback(async () => {
    const commRes = await getCommentsAsync(postId);
    if (commRes.isSuccess) {
      setCommentsData(commRes.result);
    }
  }, [postId]);

  return (
    <>
      <MainHeader title="게시판" />
      <SubHeader title="게시판" />
      <MainWrapper>
        {showPwdInput && (
          <InputModal
            title="password"
            onSubmit={delMode ? onDelete : onSubmit}
            onPasswordChange={onPasswordChange}
            onClickCancel={delMode ? onClickCancel : undefined}
          />
        )}
        <PostContent data={postData} onDelete={onDelete} />
        <Comments
          data={commentsData}
          postId={postId}
          refetch={refetchByComment}
        />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default PostDetailPage;
