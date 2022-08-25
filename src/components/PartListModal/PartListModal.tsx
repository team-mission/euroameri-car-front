import { IMG_URL } from '@constants/url';
import BrandBox from '@components/BrandContainer/BrandBox';
import ImgWrapper from '@components/ImgWrapper';
import * as styles from './PartListModal.style';

interface PartListModalProps {
  brand: string | null;
  closeModal?: () => void;
}

const PartListModal = ({ brand, closeModal }: PartListModalProps) => {
  const partImgUrlArr = Array(4)
    .fill(undefined)
    .map((_, i) => `${IMG_URL.parts_basic}${brand}/${i}.png`);

  const brandLogoImgUrl = `${IMG_URL.brand_basic}${brand}.png`;

  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <styles.PartListModalWrapper visible={!!brand}>
      {brand && (
        <styles.PartListContent>
          <BrandBox brandImg={brandLogoImgUrl} brandName={brand} />
          <styles.SlideList {...settings}>
            {partImgUrlArr.map((partImgUrl) => (
              <styles.PartImgWrapper key={partImgUrl}>
                <ImgWrapper
                  src={partImgUrl}
                  layout="intrinsic"
                  width={1200}
                  height={900}
                />
              </styles.PartImgWrapper>
            ))}
          </styles.SlideList>
        </styles.PartListContent>
      )}
      <styles.CloseBtn onClick={closeModal}>
        <ImgWrapper src={IMG_URL.close_btn} />
      </styles.CloseBtn>
      <styles.Background onClick={closeModal} />
    </styles.PartListModalWrapper>
  );
};

export default PartListModal;
