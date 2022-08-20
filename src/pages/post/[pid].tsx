import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';

import Footer from '@components/Footer';
import GuideMent from '@components/GuideMent';

const PostDetailPage: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const data = {};

  return (
    <>
      <MainHeader />
      <SubHeader title="게시판" />
      <MainWrapper>
        <h1>게시물 {pid}</h1>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default PostDetailPage;
