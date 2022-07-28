import { useState, useCallback } from 'react';

import { IMG_URL } from '@constants/url';
import ThumbnailList from './ThumbnailList';
import ImageDetail from './ImageDetail';

const WareHouse = () => {
  const [imgUrl, setImgUrl] = useState(`${IMG_URL.warehouse_basic}0.png`);

  const onClickThumbnail = useCallback((url: string) => {
    setImgUrl(url);
  }, []);

  return (
    <>
      <ThumbnailList onClickThumbnail={onClickThumbnail} />
      <ImageDetail url={imgUrl} />
    </>
  );
};

export default WareHouse;
