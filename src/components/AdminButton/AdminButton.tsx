import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useAtom } from 'jotai';

import { adminModeAtom, handleLogout } from '@store/atom';
import * as styles from './AdminButton.style';

const Adminbutton = () => {
  const router = useRouter();

  const [adminMode, setAdminMode] = useAtom(adminModeAtom);

  const adminBtnClick = useCallback(async () => {
    if (!adminMode) {
      router.push(`/admin`);
      return;
    }

    // 로그아웃 처리
    try {
      // 완전한 로그아웃 처리 (connect.sid, euroameri.sid 모두 삭제)
      await handleLogout();
      
      // 상태 업데이트
      setAdminMode(false);
      
    } catch (error) {
      console.error('Logout failed:', error);
      // 오류가 발생해도 로컬 상태는 정리
      setAdminMode(false);
    }
  }, [adminMode, router, setAdminMode]);

  return (
    <styles.StyledButton onClick={adminBtnClick}>
      {adminMode ? 'LOGOUT' : 'ADMIN'}
    </styles.StyledButton>
  );
};

export default Adminbutton;
