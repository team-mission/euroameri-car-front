import { PostDetailType } from '@apis/type';
import Carousel from '@components/Carousel';
import { formatDate } from '@utils/date';
import * as styles from './PostContent.style';

interface PostContentProps {
  data?: PostDetailType;
  onDelete?: () => void;
}

const PostContent = ({ data, onDelete }: PostContentProps) => (
  <>
    <styles.TitleArea>{data?.title}</styles.TitleArea>
    <styles.TitleBottom />
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
    <styles.DelBtn onClick={onDelete}>삭제</styles.DelBtn>
    {data && data.images?.length > 0 && (
      <Carousel images={data?.images} title="첨부 사진" />
    )}
  </>
);

export default PostContent;
