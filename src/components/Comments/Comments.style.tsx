import styled from '@emotion/styled';

export const CommentItem = styled.li`
  width: 100%;

  & .ant-comment-content-detail {
    white-space: pre-wrap;
  }
`;

export const CommentDelBtn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 2px;

  :hover {
    opacity: 0.7;
  }
`;
