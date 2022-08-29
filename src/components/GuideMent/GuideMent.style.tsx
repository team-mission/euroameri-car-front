import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@constants/styles';

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1rem;

  & > a {
    color: black;
    text-decoration: none;

    :hover {
      color: rgba(1, 128, 254, 1);
    }
  }

  ${MEDIA_QUERIES.mobile} {
    font-size: 0.8rem;
  }
`;
