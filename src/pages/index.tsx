import type { NextPage } from 'next';
import Head from 'next/head';

import MainHeader from '@components/MainHeader';
import MainWrapper from '@components/MainWrapper';
import Explanation from '@components/Explanation';
import WareHouse from '@components/WareHouse';
import Footer from '@components/Footer';

const Home: NextPage = () => (
  <>
    <MainHeader />
    <MainWrapper>
      <Explanation />
      <WareHouse />
    </MainWrapper>
    <Footer />
  </>
);

export default Home;
