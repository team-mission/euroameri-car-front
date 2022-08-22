import type { NextPage } from 'next';
import Head from 'next/head';

import { WAREHOUSE_IMG_COUNT, IMG_URL } from '@constants';
import MainHeader from '@components/MainHeader';
import MainWrapper from '@components/MainWrapper';
import Explanation from '@components/Explanation';
import Carousel from '@components/Carousel';
import Footer from '@components/Footer';

const Home: NextPage = () => {
  const imgUrlArr = Array(WAREHOUSE_IMG_COUNT)
    .fill(undefined)
    .map((_, i) => `${IMG_URL.warehouse_basic}${i}.png`);

  return (
    <>
      <MainHeader />
      <MainWrapper>
        <Explanation />
        <Carousel images={imgUrlArr} title="창고 사진" />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Home;
