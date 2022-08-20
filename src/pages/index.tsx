import type { NextPage } from 'next';
import Head from 'next/head';

import MainHeader from '@components/MainHeader';
import MainWrapper from '@components/MainWrapper';
import Explanation from '@components/Explanation';
import WareHouse from '@components/WareHouse';
import Footer from '@components/Footer';
import { db } from 'src/service/firebase';
import { collection } from 'firebase/firestore/lite';


console.log('Firebase connected succesfully : '+ collection(db, "id"));

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
