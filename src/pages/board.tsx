import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';

import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';
import Board from '@components/Board';
import Footer from '@components/Footer';
import GuideMent from '@components/GuideMent';

import { getPostListAsync } from '@apis/posts';
import { PostType } from '@apis/type';
import { setAdminModeOnCookieSet } from '@store/atom';

const BoardPage: NextPage = () => {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const display = 10;

  const [postList, setPostList] = useState<PostType[]>([]);
  const [totalSize, setTotalSize] = useState<number>(0);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    async function updateData() {
      const res = await getPostListAsync(page, display);

      if (res.isSuccess) {
        const postListWithKey = res.result.data.map((post) => ({
          key: post.id,
          ...post,
        }));

        setPostList(postListWithKey);
        setTotalSize(res.result.count);
      }
    }

    updateData();
  }, [page, router.isReady]);

  // 쿠키 설정 시 connect.sid 체크하고 adminMode 설정
  useEffect(() => {
    setAdminModeOnCookieSet();
  }, []);

  const movePostDetailPage = useCallback(
    (id: number) => {
      router.push(`/post/${id}`);
    },
    [router],
  );

  const changePage = useCallback(
    (pageNum: number) => {
      router.push(
        {
          query: {
            page: pageNum,
          },
        },
        undefined,
        { scroll: false },
      );
    },
    [router],
  );

  return (
    <>
      <MainHeader title="게시판" />
      <SubHeader title="게시판" />
      <MainWrapper>
        <GuideMent>
          부품견적 요청 시, 차대번호, 사고부위 사진 및 연락처를 이메일 혹은
          게시판에 기재해 주세요.
        </GuideMent>
        <Board
          postList={postList}
          currentPage={page}
          totalSize={totalSize}
          movePostDetailPage={movePostDetailPage}
          changePage={changePage}
        />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default BoardPage;
