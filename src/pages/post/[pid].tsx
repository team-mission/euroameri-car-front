import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';

import Footer from '@components/Footer';
import GuideMent from '@components/GuideMent';

import { getPostDetail } from '@service/database';

const PostDetailPage: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [postData, setPostData] = useState({});

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    async function updateData() {
      const postDetailData = await getPostDetail(pid);

      if (postDetailData) {
        setPostData(postDetailData);
      }
    }

    updateData();
  }, [pid, router.isReady]);

  return (
    <>
      <MainHeader />
      <SubHeader title="게시판" />
      <MainWrapper>
        <h1>게시물 작성자: {postData.name}</h1>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default PostDetailPage;
