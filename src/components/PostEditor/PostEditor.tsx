import { useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import { addPostAsync } from '@apis/post';
import { message } from 'antd';

import * as styles from './PostEditor.style';

const PostEditor = () => {
  const router = useRouter();

  const [writeData, setWriteData] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    content: '',
    images: [],
    secret: false,
  });

  const onSubmit = async () => {
    const { grecaptcha }: any = window;
    grecaptcha.ready(async () => {
      const token = await grecaptcha.execute(
        '6LdvRaEhAAAAAPrzniT5EuQSjH5STEzBPWMX14j0',
        {
          action: 'verify_gcaptcha',
        },
      );

      const res = await addPostAsync(
        writeData.title,
        writeData.content,
        writeData.name,
        writeData.email,
        writeData.phone,
        writeData.images,
        writeData.secret,
        writeData.password,
        token,
      );

      if (res.isSuccess) {
        router.push(`/post/${res.result.id}`);
        return;
      }

      message.warning('게시물 작성 실패');
    });
  };

  const onTitleChange = useCallback((e: any) => {
    setWriteData((prev) => ({ ...prev, title: e.target.value }));
  }, []);

  const onNameChange = useCallback((e: any) => {
    setWriteData((prev) => ({ ...prev, name: e.target.value }));
  }, []);

  const onEmailChange = useCallback((e: any) => {
    setWriteData((prev) => ({ ...prev, email: e.target.value }));
  }, []);

  const onPhoneChange = useCallback((e: any) => {
    setWriteData((prev) => ({ ...prev, phone: e.target.value }));
  }, []);

  const onPasswordChange = useCallback((e: any) => {
    setWriteData((prev) => ({ ...prev, password: e.target.value }));
  }, []);

  const onContentChange = useCallback((e: any) => {
    setWriteData((prev) => ({ ...prev, content: e.target.value }));
  }, []);

  // TODO: images, secret

  const onClickBack = useCallback(() => {
    router.push('/board');
  }, [router]);

  return (
    <styles.PostWriteForm onFinish={onSubmit}>
      <styles.InfoInputListWrapper>
        <styles.InfoWrapper>
          <styles.InputName>제목</styles.InputName>
          <styles.InputBox
            value={writeData.title}
            onChange={onTitleChange}
            required
            bordered={false}
          />
        </styles.InfoWrapper>
        <styles.InfoWrapper>
          <styles.InputName>작성자</styles.InputName>
          <styles.InputBox
            value={writeData.name}
            onChange={onNameChange}
            required
            bordered={false}
          />
        </styles.InfoWrapper>
        <styles.InfoWrapper>
          <styles.InputName>이메일</styles.InputName>
          <styles.InputBox
            value={writeData.email}
            onChange={onEmailChange}
            type="email"
            required
            bordered={false}
          />
        </styles.InfoWrapper>
        <styles.InfoWrapper>
          <styles.InputName>전화번호</styles.InputName>
          <styles.InputBox
            value={writeData.phone}
            onChange={onPhoneChange}
            required
            bordered={false}
          />
        </styles.InfoWrapper>
        <styles.InfoWrapper>
          <styles.InputName>비밀번호</styles.InputName>
          <styles.InputBox
            value={writeData.password}
            onChange={onPasswordChange}
            type="password"
            required
            bordered={false}
          />
        </styles.InfoWrapper>
      </styles.InfoInputListWrapper>
      <styles.ContentWrapper>
        <styles.InputName>내용</styles.InputName>
        <styles.ContentInputBox
          value={writeData.content}
          onChange={onContentChange}
          required
          showCount
          maxLength={255}
        />
      </styles.ContentWrapper>
      <input type="hidden" id="catcha-res" name="catcha-res" />
      <input type="hidden" name="action" value="verify_gcaptcha" />
      <styles.ButtonWrapper>
        <styles.StyledButton type="button" onClick={onClickBack}>
          취소
        </styles.StyledButton>
        <styles.StyledButton type="submit" className="ok">
          확인
        </styles.StyledButton>
      </styles.ButtonWrapper>
    </styles.PostWriteForm>
  );
};

export default PostEditor;
