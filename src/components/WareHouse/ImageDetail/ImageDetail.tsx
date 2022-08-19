import ImgWrapper from '@components/ImgWrapper';
import * as styles from './ImageDetail.style';

interface ImageDetailProps {
  url: string;
}

const ImageDetail = ({ url }: ImageDetailProps) => (
  <styles.ImgContainer>
    <ImgWrapper src={url} layout="intrinsic" width={1200} height={900} />
  </styles.ImgContainer>
);

export default ImageDetail;
