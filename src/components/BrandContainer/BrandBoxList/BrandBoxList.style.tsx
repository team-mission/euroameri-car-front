import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@constants/styles';

export const BrandBoxListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 20px 15px;

  ${MEDIA_QUERIES.tablet} {
    width: 50%;
    padding: 20px 30px;
  }

  ${MEDIA_QUERIES.mobile} {
    width: 100%;
  }
`;

export const ListTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 500;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
