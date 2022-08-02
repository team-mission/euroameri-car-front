import type { NextPage } from 'next';

import SubHeader from '@components/SubHeader';
import BrandWrapper from '@components/BrandContainer';
import MainWrapper from '@components/MainWrapper';
import Footer from '@components/Footer';

const ImportPage: NextPage = () => (
  <>
    <SubHeader title="슈퍼카 및 일반 수입차 부품" />
    <MainWrapper>
      <BrandWrapper />
    </MainWrapper>
    <Footer />
  </>
);

export default ImportPage;
