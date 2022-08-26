import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useAtom } from 'jotai';

import { adminModeAtom } from '@store/atom';
import { adminLogOutAsync } from '@apis/admin';
import * as styles from './AdminButton.style';

const Adminbutton = () => {
  const router = useRouter();

  const [adminMode, setAdminMode] = useAtom(adminModeAtom);

  const adminBtnClick = useCallback(async () => {
    if (!adminMode) {
      router.push(`/admin`);
      return;
    }

    const result = await adminLogOutAsync();
    if (result.isSuccess) {
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
