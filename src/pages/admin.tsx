import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import { message } from 'antd';
import { useAtom } from 'jotai';

import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';
import InputModal from '@components/InputModal';
import Footer from '@components/Footer';

import { adminModeAtom } from '@store/atom';
import { adminLoginAsync } from '@apis/admin';

const AdminLoginPage: NextPage = () => {
  const router = useRouter();

  const [adminMode, setAdminMode] = useAtom(adminModeAtom);

  const [adminId, setAdminId] = useState<string>('');
  const [adminPassword, setAdminPassword] = useState<string>('');

  const onIdChange = useCallback((e: any) => {
    setAdminId(e.target.value);
  }, []);

  const onPasswordChange = useCallback((e: any) => {
    setAdminPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(async () => {
    if (!adminId || !adminPassword) {
      message.warn('아이디, 비밀번호를 입력하세요');
    }

    const res = await adminLoginAsync(adminId, adminPassword);

    if (res.isSuccess) {
      setAdminMode(true);
      router.push('/board');
      return;
    }

    // 로그인 실패
    if (res.result.statusCode === 401) {
      message.warn('로그인 실패');
    }
  }, [adminId, adminPassword, router, setAdminMode]);

  return (
    <>
      <MainHeader />
      <SubHeader title="게시판" />
      <MainWrapper>
        <InputModal
          title="admin"
          onIdChange={onIdChange}
          onPasswordChange={onPasswordChange}
          onSubmit={onSubmit}
        />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default AdminLoginPage;
