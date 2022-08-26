import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@constants/styles';

export const ExplainWrapper = styled.section`
  position: relative;
  width: 100%;
  margin-top: 40px;

  ${MEDIA_QUERIES.mobile} {
    margin-top: 20px;
  }
`;

export const Text = styled.p`
  width: 100%;
  font-size: 1rem;

  ${MEDIA_QUERIES.tablet} {
    font-size: 0.9rem;
  }

  ${MEDIA_QUERIES.mobile} {
    font-size: 0.8rem;
  }
`;
