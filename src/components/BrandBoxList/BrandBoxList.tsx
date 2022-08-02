import { IMG_URL } from '@constants/url';
import BrandBox from '@components/BrandBox/BrandBox';
import * as styles from './BrandBoxList.style';

interface BrandBoxListProps {
  title: string;
  list: string[];
  viewModal?: (newBrand: string) => void;
}

const BrandBoxList = ({ title, list, viewModal }: BrandBoxListProps) => (
  <styles.BrandBoxListWrapper>
    <styles.ListTitle>{title}</styles.ListTitle>
    <styles.ListWrapper>
      {list.map((brandName) => (
        <BrandBox
          brandImg={`${IMG_URL.brand_basic}${brandName}.png`}
          brandName={brandName}
          viewModal={viewModal}
          key={brandName}
        />
      ))}
    </styles.ListWrapper>
  </styles.BrandBoxListWrapper>
);

export default BrandBoxList;
