import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@constants/styles';

export const TitleArea = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
  font-size: 1.4rem;

  ${MEDIA_QUERIES.mobile} {
    font-size: 1.2rem;
  }
`;

export const InfoName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;
  font-size: 0.9rem;
  border-right: 0.3px solid #b4adad;

  ${MEDIA_QUERIES.mobile} {
    font-size: 0.7rem;
  }
`;

export const InfoContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 70%;
  font-size: 0.9rem;
  margin: 0 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${MEDIA_QUERIES.mobile} {
    font-size: 0.7rem;
  }
`;

export const InfoArea = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  height: 40px;
  border: 0.3px solid #b4adad;
`;

export const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;

  & > div:nth-of-type(2n) {
    border-left: none;
  }
`;

export const ContentArea = styled.div`
  width: 100%;
  min-height: 40vh;
  padding: 20px;
  margin: 20px 0;
  border: 0.3px solid #b4adad;
  white-space: pre-wrap;
`;

export const DelBtn = styled.button`
  border: 0.3px solid gray;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const TitleBottom = styled.div`
  width: 40px;
  border-radius: 4px;
  border-bottom: 5px solid #de000f;
  margin: auto;
`;
