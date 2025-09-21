import { atomWithStorage } from 'jotai/utils';
import { adminLogOutAsync } from '@apis/admin';

// connect.sid 쿠키 상태에 따라 adminMode 초기값 설정
const getInitialAdminMode = (): boolean => {
  if (typeof window === 'undefined') return false;

  const hasConnectSid = checkConnectSid();
  return hasConnectSid;
};

// 쿠키에서 connect.sid 체크하는 함수
export const checkConnectSid = (): boolean => {
  if (typeof window === 'undefined') return false;

  const cookies = document.cookie.split(';');
  const connectSidCookie = cookies.find((cookie) =>
    cookie.trim().startsWith('connect.sid='),
  );

  return !!connectSidCookie;
};

export const adminModeAtom = atomWithStorage<boolean>(
  'adminMode',
  getInitialAdminMode(),
);

// adminMode를 쿠키 상태에 따라 업데이트
export const updateAdminModeByCookie = (): boolean => {
  if (typeof window === 'undefined') return false;

  const hasConnectSid = checkConnectSid();

  // connect.sid 상태에 따라 localStorage의 adminMode 업데이트
  localStorage.setItem('adminMode', JSON.stringify(hasConnectSid));

  return hasConnectSid;
};

// connect.sid가 없으면 adminMode 자동 제거
export const checkAndClearAdminModeByCookie = (): boolean => {
  if (typeof window === 'undefined') return false;

  const hasConnectSid = checkConnectSid();

  if (!hasConnectSid) {
    // connect.sid가 없으면 adminMode 제거
    localStorage.setItem('adminMode', JSON.stringify(false));
    return false;
  }

  return true;
};

// 로그인 상태 확인 함수 (개선된 버전)
export const checkLoginStatus = async (): Promise<boolean> => {
  try {
    // 1. 먼저 쿠키 체크
    const hasConnectSid = checkAndClearAdminModeByCookie();
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
    // 1. adminMode를 false로 설정
    localStorage.setItem('adminMode', JSON.stringify(false));

    // 2. 세션 스토리지 삭제
    sessionStorage.removeItem('euroameri.sid');

    // 3. 쿠키 삭제 (connect.sid와 euroameri.sid 모두)
    document.cookie =
      'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie =
      'euroameri.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // 4. 서버 세션 정리 (강제 로그아웃)
    try {
      await adminLogOutAsync();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Force logout failed:', error);
    }
  }
};

// 쿠키 설정 시 connect.sid 체크하고 adminMode를 업데이트
export const setAdminModeOnCookieSet = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const hasConnectSid = checkConnectSid();

  // connect.sid 상태에 따라 adminMode 업데이트
  localStorage.setItem('adminMode', JSON.stringify(hasConnectSid));

  return hasConnectSid;
};

// 쿠키 변경 감지를 위한 폴링 함수
export const startCookieMonitoring = (): (() => void) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  // 1초마다 쿠키 상태 체크
  const intervalId = setInterval(() => {
    updateAdminModeByCookie();
  }, 1000);

  // 정리 함수 반환
  return () => {
    clearInterval(intervalId);
  };
};

// 앱 초기화 시 쿠키 상태 체크하는 함수
export const initializeAuthState = (): void => {
  if (typeof window !== 'undefined') {
    updateAdminModeByCookie();
  }
};
