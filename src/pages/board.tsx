import type { NextPage } from 'next';

import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';
import Board from '@components/Board';
import Footer from '@components/Footer';
import GuideMent from '@components/GuideMent';

const BoardPage: NextPage = () => {
  const data = [];

  for (let i = 0; i < 30; i += 1) {
    data.push({
      key: i,
      id: i,
      title: `${i}번째 제목`,
      name: `${i}번째 작성자`,
      date: 'String(new Date())',
    });
  }

  return (
    <>
      <MainHeader />
      <SubHeader title="게시판" />
      <MainWrapper>
        <GuideMent>
          부품견적 요청 시, 차대번호, 사고부위 사진 및 연락처를 이메일 혹은
          게시판에 기재해 주세요.
        </GuideMent>
        <Board postList={data} />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default BoardPage;
