import { adminLogOutAsync } from '@apis/admin';

// 쿠키에서 connect.sid 체크하는 함수
export const checkConnectSid = (): boolean => {
  if (typeof window === 'undefined') return false;

  const cookies = document.cookie.split(';');
  const connectSidCookie = cookies.find((cookie) =>
    cookie.trim().startsWith('connect.sid='),
  );

  return !!connectSidCookie;
};

// 로그인 상태 확인 함수
export const checkLoginStatus = async (): Promise<boolean> => {
  try {
    // 1. 먼저 쿠키 체크
    const hasConnectSid = checkConnectSid();
    if (!hasConnectSid) {
      return false;
    }

    // 2. 서버에 로그인 상태 확인
    const response = await fetch('/admin/check', {
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      return data.isAuthenticated;
    }

    return false;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Login status check failed:', error);
    return false;
  }
};

// 완전한 로그아웃 처리 함수
export const handleLogout = async (): Promise<void> => {
  if (typeof window !== 'undefined') {
    // 1. 세션 스토리지 삭제
    sessionStorage.removeItem('euroameri.sid');

    // 2. 쿠키 삭제 (connect.sid와 euroameri.sid 모두)
    document.cookie =
      'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie =
      'euroameri.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // 3. 서버 세션 정리 (강제 로그아웃)
    try {
      await adminLogOutAsync();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Force logout failed:', error);
    }
  }
};
