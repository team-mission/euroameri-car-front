import { useCallback, useState } from 'react';

import { BRAND_LIST, BRAND_LIST_TITLE } from '@constants/brand';
import BrandBoxList from '@components/BrandBoxList';
import PartListModal from '@components/PartListModal';
import * as styles from './BrandContainer.style';

const BrandContainer = () => {
  const [brand, setBrand] = useState<string | null>(null);

  const viewModal = useCallback((newBrand: string) => {
    if (newBrand) {
      setBrand(newBrand);
    }
  }, []);

  const closeModal = useCallback(() => {
    setBrand(null);
  }, []);

  return (
    <>
      <styles.BrandContainerWrapper>
        <BrandBoxList
          title={BRAND_LIST_TITLE.supercar}
          list={BRAND_LIST.supercar}
          viewModal={viewModal}
        />
        <BrandBoxList
          title={BRAND_LIST_TITLE.europe}
          list={BRAND_LIST.europe}
          viewModal={viewModal}
        />
        <BrandBoxList
          title={BRAND_LIST_TITLE.us}
          list={BRAND_LIST.us}
          viewModal={viewModal}
        />
        <BrandBoxList
          title={BRAND_LIST_TITLE.japan}
          list={BRAND_LIST.japan}
          viewModal={viewModal}
        />
      </styles.BrandContainerWrapper>
      <PartListModal brand={brand} closeModal={closeModal} />
    </>
  );
};

export default BrandContainer;
