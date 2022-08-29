import type { NextPage } from 'next';
import Link from 'next/link';

import { COMP_INFO } from '@constants';
import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';
import BrandContainer from '@components/BrandContainer';
import Footer from '@components/Footer';
import GuideMent from '@components/GuideMent';

const ImportPage: NextPage = () => (
  <>
    <MainHeader title="슈퍼카 및 일반 수입차 부품" />
    <SubHeader title="슈퍼카 및 일반 수입차 부품" />
    <MainWrapper>
      <GuideMent>
        부품견적 요청 시, 차대번호, 사고부위 사진 및 연락처를 이메일 혹은
        게시판에 기재해 주세요.
      </GuideMent>
      <BrandContainer />
      <GuideMent>
        <Link href="mailto:sales@euroamericar.com" passHref>
          {COMP_INFO.email.main}
        </Link>
      </GuideMent>
    </MainWrapper>
    <Footer />
  </>
);

export default ImportPage;
