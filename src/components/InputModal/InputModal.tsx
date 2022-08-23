import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import * as styles from './InputModal.style';

interface InputModalProps {
  title: string;
  submitPassword?: (pwd: string) => void;
  submitId?: (id: string) => void;
}

const InputModal = ({ title, submitPassword, submitId }: InputModalProps) => {
  const router = useRouter();

  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  const onSubmit = useCallback(() => {
    if (submitPassword) submitPassword(inputPwd);
    if (submitId) submitId(inputId);
  }, [inputId, inputPwd, submitId, submitPassword]);

  const onChangePwd = useCallback((e: any) => {
    setInputPwd(e.target.value);
  }, []);

  const onChangeId = useCallback((e: any) => {
    setInputId(e.target.value);
  }, []);

  const onClickBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <styles.ModalArea>
      <styles.Wrapper>
        <styles.Title>{title}</styles.Title>
        <styles.FormWrapper name="login" onFinish={onSubmit}>
          {submitId && (
            <styles.InputWrapper
              placeholder="아이디"
              onChange={onChangeId}
              autoFocus
              required
              bordered={false}
            />
          )}
          <styles.InputWrapper
            type="password"
            placeholder="비밀번호"
            onChange={onChangePwd}
            autoFocus
            required
            bordered={false}
          />
          <styles.ButtonWrapper>
            <styles.Button type="button" onClick={onClickBack}>
              취소
            </styles.Button>
            <styles.Button type="submit" className="ok">
              확인
            </styles.Button>
          </styles.ButtonWrapper>
        </styles.FormWrapper>
      </styles.Wrapper>
    </styles.ModalArea>
  );
};

export default InputModal;
