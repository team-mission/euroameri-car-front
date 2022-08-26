import styled from '@emotion/styled';
import { Form, Input } from 'antd';

export const CommentWriteForm = styled(Form)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 20px 0;
`;

export const CommentInputBox = styled(Input.TextArea)`
  width: 100%;
  margin-right: 10px;
  resize: none;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: rgba(222, 0, 15, 1);
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;
