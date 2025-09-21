import { atomWithStorage } from 'jotai/utils';

export const adminModeAtom = atomWithStorage<boolean>('adminMode', false);

// 쿠키에서 connect.sid 체크하는 함수
export const checkConnectSid = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const cookies = document.cookie.split(';');
  const connectSidCookie = cookies.find(cookie => 
    cookie.trim().startsWith('connect.sid=')
  );
  
  return !!connectSidCookie;
};

// connect.sid가 없으면 adminMode 자동 제거
export const checkAndClearAdminModeByCookie = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const hasConnectSid = checkConnectSid();
  
  if (!hasConnectSid) {
    // connect.sid가 없으면 adminMode 제거
    localStorage.removeItem('adminMode');
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
      credentials: 'include'
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.isAuthenticated;
    }
    
    return false;
  } catch (error) {
    console.error('Login status check failed:', error);
    return false;
  }
};

// 완전한 로그아웃 처리 함수
export const handleLogout = async () => {
  if (typeof window !== 'undefined') {
    // 1. 프론트엔드 데이터 삭제
    localStorage.removeItem('adminMode');
    sessionStorage.removeItem('euroameri.sid');
    
    // 2. 쿠키 삭제 (connect.sid와 euroameri.sid 모두)
    document.cookie = 'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'euroameri.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    // 3. 서버 세션 정리 (강제 로그아웃)
    try {
      await fetch('/admin/logout', { 
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error('Force logout failed:', error);
    }
  }
};

// 앱 초기화 시 쿠키 상태 체크하는 함수
export const initializeAuthState = () => {
  if (typeof window !== 'undefined') {
    checkAndClearAdminModeByCookie();
  }
};
