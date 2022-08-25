import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@constants/styles';

export const BenchmarkContainerWrapper = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  margin: 40px 10px;

  ${MEDIA_QUERIES.tablet} {
    margin: 40px 15px;
  }

  ${MEDIA_QUERIES.mobile} {
    margin: 30px 15px;
  }
`;
