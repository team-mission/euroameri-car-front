import type { NextPage } from 'next';

import SubHeader from '@components/SubHeader';
import BrandWrapper from '@components/BrandContainer';
import Footer from '@components/Footer';

const ImportPage: NextPage = () => (
  <>
    <SubHeader title="슈퍼카 및 일반 수입차 부품" />
    <BrandWrapper />
    <Footer />
  </>
);

export default ImportPage;
