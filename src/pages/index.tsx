import type { NextPage } from 'next';
import Head from 'next/head';

import MainHeader from '@components/MainHeader';
import Footer from '@components/Footer';

const Home: NextPage = () => (
  <>
    <MainHeader />
    <Footer />
  </>
);

export default Home;
