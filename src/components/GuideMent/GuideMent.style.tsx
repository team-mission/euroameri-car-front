import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@constants/styles';

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1rem;

  ${MEDIA_QUERIES.mobile} {
    font-size: 0.8rem;
  }
`;
