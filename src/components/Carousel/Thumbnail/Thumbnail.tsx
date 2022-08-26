import ImgWrapper from '@components/ImgWrapper';
import * as styles from './Thumbnail.style';

interface ThumbnailProps {
  url: string;
  onClick?: (url: string) => void;
}

const Thumbnail = ({ url, onClick }: ThumbnailProps) => (
  <styles.StyledThumbnail onClick={() => onClick?.(url)}>
    <ImgWrapper
      src={url}
      layout="intrinsic"
      width="400"
      height="300"
      priority
    />
  </styles.StyledThumbnail>
);

export default Thumbnail;
