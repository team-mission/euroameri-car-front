import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@constants/styles';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 190px;
  padding: 1rem 3rem;
  background-color: rgba(217, 217, 217, 1);

  ${MEDIA_QUERIES.mobile} {
    height: 268px;
  }
`;

export const ImgRowWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${MEDIA_QUERIES.mobile} {
    justify-content: center;
  }
`;

export const InfoRowWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
  }
`;

export const FlagImgWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 60px;

  ${MEDIA_QUERIES.mobile} {
    margin: 0 10px;
  }
`;

export const LogoImgWrapper = styled.a`
  position: relative;
  cursor: pointer;

  ${MEDIA_QUERIES.mobile} {
    display: none;
  }
`;

export const CompInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 330px;
  height: 100%;
  padding: 5px 0;

  :last-child {
    align-items: flex-end;
  }

  ${MEDIA_QUERIES.mobile} {
    align-items: center;

    :last-child {
      align-items: center;
    }
  }
`;

export const AdminInfoWrapper = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  :nth-of-type(2) {
    display: flex;
  }

  ${MEDIA_QUERIES.mobile} {
    display: flex;
    margin-bottom: 10px;

    :nth-of-type(2) {
      display: none;
    }
  }
`;

export const EmailArea = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  height: 100%;

  :hover {
    color: rgba(1, 128, 254, 1);
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;

  ${MEDIA_QUERIES.tablet} {
    font-size: 0.8rem;
  }
`;
