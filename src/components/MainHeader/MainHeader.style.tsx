import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@constants/styles';

export const MainHeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  font-size: 1.05rem;

  ${MEDIA_QUERIES.tablet} {
    font-size: 0.85rem;
  }

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    font-size: 0.6rem;
  }
`;

export const MobileLogoWrapper = styled.div`
  display: none;
  width: 100%;
  height: 60px;
  background-color: rgba(222, 0, 17, 1);

  ${MEDIA_QUERIES.mobile} {
    display: flex;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const LogoWrapper = styled.div`
  height: 100%;
  width: 60px;

  ${MEDIA_QUERIES.mobile} {
    display: none;
  }
`;

export const HeaderImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
`;

export const HeaderTextWrapper = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  ${MEDIA_QUERIES.mobile} {
    display: flex;
  }
`;

export const HeaderText = styled.span`
  color: white;
  font-size: 1.5rem;

  &.second {
    font-size: 1.1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StyledNavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  background-color: black;
  color: rgba(235, 155, 0, 1);
  text-decoration: none;

  :hover {
    opacity: 0.9;
    color: rgba(235, 155, 0, 0.8);
  }

  ${MEDIA_QUERIES.mobile} {
    width: 50%;
    height: 50%;
    background-color: white;
    border-bottom: 0.5px solid #505050;
    color: rgba(80, 80, 80, 1);

    hover: {
      color: orange;
    }
  }
`;

export const Navigation = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;

  ${MEDIA_QUERIES.mobile} {
    height: 20%;

    a:nth-of-type(2n - 1) {
      border-right: 0.5px solid #505050;
    }
  }
`;
