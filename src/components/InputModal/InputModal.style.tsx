import styled from '@emotion/styled';
import { Form, Input } from 'antd';

export const ModalArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const FormWrapper = styled(Form)`
  width: 100%;
`;

export const InputBox = styled(Input)`
  width: 100%;
  border-bottom: 1px solid rgba(222, 0, 17, 1);

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

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

export const Button = styled.button`
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
