import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useCallback } from 'react';

import { IMG_URL } from '@constants/url';
import MainHeader from '@components/MainHeader';
import MainWrapper from '@components/MainWrapper';
import Explanation from '@components/Explanation';
import Carousel from '@components/Carousel';
import Footer from '@components/Footer';

const Home: NextPage = () => {
  const [imgUrl, setImgUrl] = useState(`${IMG_URL.warehouse_basic}0.png`);

  const onClickThumbnail = useCallback((url: string) => {
    setImgUrl(url);
  }, []);

  return (
    <>
      <MainHeader />
      <MainWrapper>
        <Explanation />
        <Carousel imgUrl={imgUrl} onClickThumbnail={onClickThumbnail} />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Home;
