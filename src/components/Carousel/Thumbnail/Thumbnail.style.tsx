import styled from '@emotion/styled';

export const StyledThumbnail = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  & span {
    box-shadow: 0 0 8px rgb(0 0 0 / 15%);
  }
`;
