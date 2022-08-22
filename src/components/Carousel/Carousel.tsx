import { useState, useCallback } from 'react';

import { IMG_URL } from '@constants';
import ThumbnailList from './ThumbnailList';
import ImageDetail from './ImageDetail';

interface CarouselProps {
  images: string[];
  title: string;
}

const Carousel = ({ images, title }: CarouselProps) => {
  const [imgUrl, setImgUrl] = useState(images[0]);

  const onClickThumbnail = useCallback((url: string) => {
    setImgUrl(url);
  }, []);

  return (
    <>
      <ThumbnailList
        images={images}
        title={title}
        onClickThumbnail={onClickThumbnail}
      />
      <ImageDetail url={imgUrl} />
    </>
  );
};

export default Carousel;
