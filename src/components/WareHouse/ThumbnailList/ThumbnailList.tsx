import { WAREHOUSE_IMG_COUNT, IMG_URL } from '@constants';
import Thumbnail from '../Thumbnail/Thumbnail';
import * as styles from './ThumbnailList.style';

const ThumbnailList = () => {
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

  const imgUrlArr = Array(WAREHOUSE_IMG_COUNT)
    .fill(undefined)
    .map((_, i) => `${IMG_URL.warehouse_basic}${i}.png`);

  return (
    <styles.ListSection>
      <styles.Title>창고 사진</styles.Title>
      <styles.SlideList {...settings}>
        {imgUrlArr.map((url) => (
          <Thumbnail url={url} key={url} />
        ))}
      </styles.SlideList>
    </styles.ListSection>
  );
};

export default ThumbnailList;
