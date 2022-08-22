import ThumbnailList from './ThumbnailList';
import ImageDetail from './ImageDetail';

interface CarouselProps {
  imgUrl: string;
  onClickThumbnail: (url: string) => void;
}

const Carousel = ({ imgUrl, onClickThumbnail }: CarouselProps) => (
  <>
    <ThumbnailList onClickThumbnail={onClickThumbnail} />
    <ImageDetail url={imgUrl} />
  </>
);

export default Carousel;
