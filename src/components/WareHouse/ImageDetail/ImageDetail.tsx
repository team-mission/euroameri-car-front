import * as styles from './ImageDetail.style';

interface ImageDetailProps {
  url: string;
}

const ImageDetail = ({ url }: ImageDetailProps) => (
  <styles.ImgWrapper>
    <styles.DetailImg src={url} />
  </styles.ImgWrapper>
);

export default ImageDetail;
