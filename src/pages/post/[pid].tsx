import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';
import PostContent from '@components/PostContent';
import Footer from '@components/Footer';

import { getPostDetailAsync } from '@apis/post';
import { PostDetailType } from '@apis/type';

const PostDetailPage: NextPage = () => {
  const router = useRouter();
  const postId = Number(router.query.pid);

  const [postData, setPostData] = useState<PostDetailType | {}>({});
  const [password, setPassword] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!router.isReady || !postId) {
      return;
    }

    async function updateData() {
      const res = await getPostDetailAsync(postId, password);

      if (res.isSuccess) {
        setPostData(res.result);
      }

      // TODO: 에러 처리 (비밀번호?)
    }

    updateData();
  }, [password, postId, router.isReady]);

  return (
    <>
      <MainHeader />
      <SubHeader title="게시판" />
      <MainWrapper>
        <PostContent data={postData} />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default PostDetailPage;
