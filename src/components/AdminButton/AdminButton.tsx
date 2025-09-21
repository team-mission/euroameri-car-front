import { useRouter } from 'next/router';
import { useCallback, useState, useEffect } from 'react';

import { checkConnectSid, handleLogout } from '@store/atom';
import * as styles from './AdminButton.style';

const Adminbutton = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 쿠키 상태 확인
  useEffect(() => {
    setIsLoggedIn(checkConnectSid());

    // 1초마다 쿠키 상태 체크
    const interval = setInterval(() => {
      setIsLoggedIn(checkConnectSid());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const adminBtnClick = useCallback(async () => {
    if (!isLoggedIn) {
      router.push(`/admin`);
      return;
    }

    // 로그아웃 처리
    try {
      // 완전한 로그아웃 처리 (connect.sid, euroameri.sid 모두 삭제)
      await handleLogout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }, [isLoggedIn, router]);

  return (
    <styles.StyledButton onClick={adminBtnClick}>
      {isLoggedIn ? 'LOGOUT' : 'ADMIN'}
    </styles.StyledButton>
  );
};

export default Adminbutton;
