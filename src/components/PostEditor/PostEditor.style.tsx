import styled from '@emotion/styled';
import { Form, Input, Button } from 'antd';
import { MEDIA_QUERIES } from '@constants/styles';

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

  ${MEDIA_QUERIES.mobile} {
    width: 90%;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 35px;
`;

export const InputName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
  width: 80px;

  &.content {
    justify-content: flex-start;
  }
`;

export const InputBox = styled(Input)`
  border-bottom: 1px solid rgba(222, 0, 17, 1);
  border-radius: 0;

  &:focus {
    border-bottom: 1px solid rgba(222, 0, 17, 1);
  }

  &:hover {
    border-bottom: 1px solid rgba(222, 0, 17, 1);
  }

  &.password {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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

  & > textarea {
    resize: none;

    :hover {
      border-color: rgba(217, 217, 217, 1);
    }

    :focus {
      border-color: rgba(217, 217, 217, 1);
      box-shadow: none;
    }
  }
`;

export const ImageInputButton = styled(Button)``;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  margin-top: 30px;

  ${MEDIA_QUERIES.mobile} {
    width: 50%;
  }
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

  :hover {
    opacity: 0.9;
  }

  ${MEDIA_QUERIES.mobile} {
    border-radius: 20px;
    height: 30px;
    font-size: 0.9rem;
  }
`;

export const SecretCheckboxArea = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
