import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@constants/styles';

export const BenchmarkBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  height: 170px;
  margin: 1%;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);

  ${MEDIA_QUERIES.tablet} {
    width: 31%;
    margin: 1%;
  }

  ${MEDIA_QUERIES.mobile} {
    width: 48%;
    margin: 1%;
  }
`;

export const BrandImgWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 60px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top: none;
`;

export const Text = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;

  ${MEDIA_QUERIES.mobile} {
    font-size: 0.6rem;
  }
`;
