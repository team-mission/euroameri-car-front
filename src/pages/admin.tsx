import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import { message } from 'antd';
import { useAtom } from 'jotai';

import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';
import InputModal from '@components/InputModal';
import Footer from '@components/Footer';

import { adminModeAtom, setAdminModeOnCookieSet } from '@store/atom';
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
      // 쿠키 설정 후 connect.sid 체크하고 adminMode 설정
      setTimeout(() => {
        setAdminModeOnCookieSet();
      }, 100); // 쿠키 설정 후 약간의 지연을 두고 체크
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
      <MainHeader title="관리자 로그인" />
      <SubHeader title="관리자 로그인" />
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
