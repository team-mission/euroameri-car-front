import { useRouter } from 'next/router';
import { useCallback } from 'react';
import * as styles from './InputModal.style';

interface InputModalProps {
  title: string;
  onIdChange?: (e: any) => void;
  onPasswordChange?: (e: any) => void;
  onSubmit?: () => void;
  onClickCancel?: () => void;
}

const InputModal = ({
  title,
  onIdChange,
  onPasswordChange,
  onSubmit,
  onClickCancel,
}: InputModalProps) => {
  const router = useRouter();

  const onClickBack = useCallback(() => {
    router.push('/board');
  }, [router]);

  return (
    <styles.ModalArea>
      <styles.Wrapper>
        <styles.Title>{title}</styles.Title>
        <styles.FormWrapper name="login" onFinish={onSubmit}>
          {onIdChange && (
            <styles.InputBox
              placeholder="아이디"
              onChange={onIdChange}
              required
              autoFocus
              bordered={false}
            />
          )}
          <styles.InputBox
            type="password"
            className="password"
            placeholder="비밀번호"
            onChange={onPasswordChange}
            required
            autoFocus
            bordered={false}
          />
          <styles.ButtonWrapper>
            <styles.Button type="button" onClick={onClickCancel ?? onClickBack}>
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
