import BrandBox from '@components/BrandBox/BrandBox';
import * as styles from './BrandBoxList.style';

interface BrandBoxListProps {
  title: string;
  list: string[];
}

const BrandBoxList = ({ title, list }: BrandBoxListProps) => (
  <styles.BrandBoxListWrapper>
    <styles.ListTitle>{title}</styles.ListTitle>
    <styles.ListWrapper>
      {list.map((brandName) => (
        <BrandBox
          brandImg={`/images/brands/${brandName}.png`}
          brandName={brandName}
        />
      ))}
    </styles.ListWrapper>
  </styles.BrandBoxListWrapper>
);

export default BrandBoxList;
