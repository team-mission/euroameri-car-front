import ImgWrapper from '@components/ImgWrapper';
import * as styles from './BrandBox.style';

interface BrandBoxProps {
  brandImg: string;
  brandName: string;
  viewModal?: (newBrand: string) => void;
}

const BrandBox = ({ brandImg, brandName, viewModal }: BrandBoxProps) => (
  <styles.BrandBoxWrapper>
    <styles.BrandBoxContent onClick={() => viewModal?.(brandName)}>
      <styles.BrandLogo>
        <ImgWrapper src={brandImg} />
      </styles.BrandLogo>
      <styles.BrandName>{brandName.replace('_', ' ')}</styles.BrandName>
    </styles.BrandBoxContent>
  </styles.BrandBoxWrapper>
);

export default BrandBox;
