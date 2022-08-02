import type { NextPage } from 'next';

import SubHeader from '@components/SubHeader';
import BrandWrapper from '@components/BrandContainer';
import MainWrapper from '@components/MainWrapper';
import Footer from '@components/Footer';
import GuideMent from '@components/GuideMent';

const ImportPage: NextPage = () => (
  <>
    <SubHeader title="슈퍼카 및 일반 수입차 부품" />
    <MainWrapper>
      <GuideMent>해당 브랜드를 클릭하여 샘플 도면 참조</GuideMent>
      <BrandWrapper />
      <GuideMent>
        부품견적 요청 시, 차대번호, 사고부위 사진 및 연락처를 이메일 혹은
        게시판에 기재해 주세요.
      </GuideMent>
    </MainWrapper>
    <Footer />
  </>
);

export default ImportPage;
