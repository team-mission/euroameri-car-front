import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import { message } from 'antd';

import MainHeader from '@components/MainHeader';
import SubHeader from '@components/SubHeader';
import MainWrapper from '@components/MainWrapper';
import InputModal from '@components/InputModal';
import Footer from '@components/Footer';

import { adminLoginAsync } from '@apis/admin';

const AdminLoginPage: NextPage = () => {
  const router = useRouter();

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
      return;
    }

    const res = await adminLoginAsync(adminId, adminPassword);

    if (res.isSuccess) {
      // 로그인 성공 시 바로 board 페이지로 이동
      // connect.sid 쿠키는 서버에서 자동으로 설정됨
      router.push('/board');
      return;
    }

    // 로그인 실패
    if (res.result.statusCode === 401) {
      message.warn('로그인 실패');
    }
  }, [adminId, adminPassword, router]);

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
