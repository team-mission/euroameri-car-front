import { PostDetailType } from '@apis/type';
import Carousel from '@components/Carousel';
import * as styles from './PostContent.style';

interface PostContentProps {
  data?: PostDetailType;
}

const PostContent = ({ data }: PostContentProps) => {
  const formatDate = (date: string | undefined) => {
    if (date) {
      const dateData = new Date(date);

      const setTwoDigit = (time: string | number) => `0${time}`.slice(-2);
      const year = setTwoDigit(dateData.getFullYear());
      const month = setTwoDigit(dateData.getMonth() + 1);
      const day = setTwoDigit(dateData.getDate());
      const hour = setTwoDigit(dateData.getHours());
      const min = setTwoDigit(dateData.getMinutes());
      return `${year}/${month}/${day} ${hour}:${min}`;
    }

    return undefined;
  };

  return (
    <>
      <styles.TitleArea>{data?.title}</styles.TitleArea>
      <styles.InfoWrapper>
        <styles.InfoArea>
          <styles.InfoName>작성자</styles.InfoName>
          <styles.InfoContent>{data?.name}</styles.InfoContent>
        </styles.InfoArea>
        <styles.InfoArea>
          <styles.InfoName>시간</styles.InfoName>
          <styles.InfoContent>{formatDate(data?.createdAt)}</styles.InfoContent>
        </styles.InfoArea>
        {data?.phone && data?.email && (
          <>
            <styles.InfoArea>
              <styles.InfoName>전화번호</styles.InfoName>
              <styles.InfoContent>{data?.phone}</styles.InfoContent>
            </styles.InfoArea>
            <styles.InfoArea>
              <styles.InfoName>이메일</styles.InfoName>
              <styles.InfoContent>{data?.email}</styles.InfoContent>
            </styles.InfoArea>
          </>
        )}
        <styles.ContentArea>{data?.content}</styles.ContentArea>
      </styles.InfoWrapper>
      {data && data.images?.length > 0 && (
        <Carousel images={data?.images} title="첨부 사진" />
      )}
    </>
  );
};

export default PostContent;
