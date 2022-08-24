import styled from '@emotion/styled';
import { Form, Input, Button } from 'antd';

export const PostWriteForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

export const InfoInputListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
`;

export const InputName = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 80px;
`;

export const InputBox = styled(Input)`
  border-bottom: 1px solid rgba(222, 0, 17, 1);

  &:focus {
    border-bottom: 1px solid rgba(222, 0, 17, 1);
  }

  &:hover {
    border-bottom: 1px solid rgba(222, 0, 17, 1);
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  margin-top: 10px;
`;

export const ContentInputBox = styled(Input.TextArea)`
  width: 100%;
  height: 100%;
`;

export const ImageInputButton = styled(Button)``;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  margin-top: 30px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 40px;
  border: none;
  background-color: rgba(217, 217, 217, 1);
  color: white;
  font-size: 1.2rem;
  border-radius: 40px;
  cursor: pointer;

  &.ok {
    background-color: rgba(222, 0, 17, 1);
  }
`;
