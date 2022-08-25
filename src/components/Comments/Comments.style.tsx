import styled from '@emotion/styled';

export const CommentItem = styled.li`
  width: 100%;

  & .ant-comment-content-detail {
    white-space: pre-wrap;
  }
`;

export const CommentDelBtn = styled.button`
  border: 0.3px solid gray;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
