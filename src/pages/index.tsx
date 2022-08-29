import type { NextPage } from 'next';

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
      <MainHeader title="유럽 미국 일본 외산차 및 부품 유통" />
      <MainWrapper>
        <Explanation />
        <Carousel images={imgUrlArr} title="유로아메리카주식회사" />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Home;
