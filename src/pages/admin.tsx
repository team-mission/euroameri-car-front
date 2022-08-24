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

  const submitAdminId = useCallback((id: string) => {
    setAdminId(id);
  }, []);

  const submitAdminPassword = useCallback((pwd: string) => {
    setAdminPassword(pwd);
  }, []);

  useEffect(() => {
    if (!adminId || !adminPassword) {
      return;
    }

    async function login() {
      const res = await adminLoginAsync(adminId, adminPassword);

      if (res.isSuccess) {
        setAdminMode(true);
        router.push('/board');
        return;
      }

      // 로그인 실패
      if (res.result.statusCode === 401) {
        message.info('로그인 실패');
      }
    }

    login();
  }, [adminId, adminPassword, router, setAdminMode]);

  return (
    <>
      <MainHeader />
      <SubHeader title="게시판" />
      <MainWrapper>
        <InputModal
          title="admin"
          submitId={submitAdminId}
          submitPassword={submitAdminPassword}
        />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default AdminLoginPage;
