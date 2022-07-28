import type { NextPage } from 'next';
import Head from 'next/head';

import MainHeader from '@components/MainHeader';
import Explanation from '@components/Explanation';
import Footer from '@components/Footer';

const Home: NextPage = () => (
  <>
    <MainHeader />
    <Explanation />
    <Footer />
  </>
);

export default Home;
