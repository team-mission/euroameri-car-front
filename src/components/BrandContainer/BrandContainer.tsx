import { BRAND_LIST, BRAND_LIST_TITLE } from '@constants/brand';
import BrandBoxList from '@components/BrandBoxList';
import * as styles from './BrandContainer.style';

const BrandWrapper = () => (
  <styles.BrandContainerWrapper>
    <BrandBoxList
      title={BRAND_LIST_TITLE.supercar}
      list={BRAND_LIST.supercar}
    />
    <BrandBoxList title={BRAND_LIST_TITLE.europe} list={BRAND_LIST.europe} />
    <BrandBoxList title={BRAND_LIST_TITLE.us} list={BRAND_LIST.us} />
    <BrandBoxList title={BRAND_LIST_TITLE.japan} list={BRAND_LIST.japan} />
  </styles.BrandContainerWrapper>
);

export default BrandWrapper;
