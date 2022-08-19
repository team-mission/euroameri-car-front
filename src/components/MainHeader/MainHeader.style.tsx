import styled from '@emotion/styled';

export const MainHeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  width: 5%;
`;

export const HeaderImgWrapper = styled.div`
  width: 100%;
  height: 90%;
`;

// TODO: 네이밍
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
`;

export const StyledNavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  background-color: black;
  color: orange;
  text-decoration: none;
`;

export const Navigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
`;
