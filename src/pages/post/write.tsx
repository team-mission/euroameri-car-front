import type { NextPage } from 'next';
import Script from 'next/script';

import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';
import PostEditor from '@components/PostEditor';
import Footer from '@components/Footer';

const PostWritePage: NextPage = () => (
  <>
    <Script
      type="text/javascript"
      src="https://www.google.com/recaptcha/api.js?render=6LdvRaEhAAAAAPrzniT5EuQSjH5STEzBPWMX14j0"
    />
    <MainHeader />
    <SubHeader title="게시판" />
    <MainWrapper>
      <PostEditor />
    </MainWrapper>
    <Footer />
  </>
);

export default PostWritePage;
