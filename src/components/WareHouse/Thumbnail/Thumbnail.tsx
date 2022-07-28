import * as styles from './Thumbnail.style';

interface ThumbnailProps {
  url: string;
  onClick?: (url: string) => void;
}

const Thumbnail = ({ url, onClick }: ThumbnailProps) => (
  <styles.StyledThumbnail onClick={() => onClick?.(url)}>
    <styles.ThumbnailImg src={url} />
  </styles.StyledThumbnail>
);

export default Thumbnail;
