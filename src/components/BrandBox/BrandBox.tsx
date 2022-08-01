import * as styles from './BrandBox.style';

interface BrandBoxProps {
  brandImg: string;
  brandName: string;
}

const BrandBox = ({ brandImg, brandName }: BrandBoxProps) => (
  <styles.BrandBoxWrapper>
    <styles.BrandLogo>
      <styles.BrandLogoImg src={brandImg} />
    </styles.BrandLogo>
    <styles.BrandName>{brandName.replace('_', ' ')}</styles.BrandName>
  </styles.BrandBoxWrapper>
);

export default BrandBox;
