import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@constants/styles';

export const StyledMain = styled.main`
  position: relative;
  max-width: 1200px;
  min-height: 400px;
  padding: 30px 50px;
  margin: auto;

  ${MEDIA_QUERIES.tablet} {
    padding: 30px;
  }

  ${MEDIA_QUERIES.mobile} {
    padding: 20px;
  }
`;
