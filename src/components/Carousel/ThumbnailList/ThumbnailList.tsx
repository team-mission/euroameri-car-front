import Thumbnail from '../Thumbnail/Thumbnail';
import * as styles from './ThumbnailList.style';

interface ThumbnailListProps {
  images: string[];
  title: string;
  onClickThumbnail: (url: string) => void;
}

const ThumbnailList = ({
  images,
  title,
  onClickThumbnail,
}: ThumbnailListProps) => {
  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 828,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <styles.ListSection>
      <styles.Title>{title}</styles.Title>
      <styles.SlideList {...settings}>
        {images.map((url) => (
          <Thumbnail url={url} key={url} onClick={onClickThumbnail} />
        ))}
      </styles.SlideList>
    </styles.ListSection>
  );
};

export default ThumbnailList;
