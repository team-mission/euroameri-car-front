import type { NextPage } from 'next';

import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';
import BenchmarkContainer from '@components/BenchmarkContainer';
import Footer from '@components/Footer';
import GuideMent from '@components/GuideMent';

const BenchmarkPage: NextPage = () => (
  <>
    <MainHeader />
    <SubHeader title="연구용/벤치마킹 부품" />
    <MainWrapper>
      <GuideMent>
        유로아메리카 주식회사는 20년 이상 구축한 유럽, 미국 및 일본의 현지
        네트워크를 활용하여 국내 공공기관 및 자동차 부품 관련 연구소에서
        벤치마킹을 위한 다양한 해외 차량의 부품 및 기타 기계제품을 신속(발주 후,
        7~14일)하게 공금하고 있습니다.
      </GuideMent>
      <BenchmarkContainer />
      <GuideMent>
        필요한 차량 및 기계부품과 부품의 특성을 이메일로 알려주시면, 부품의 도면
        및 부품관련 정보를 제공하고, 견적 및 배송기간을 확인해드립니다.
      </GuideMent>
    </MainWrapper>
    <Footer />
  </>
);

export default BenchmarkPage;
