import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useAtom } from 'jotai';

import { COMP_INFO, IMG_URL } from '@constants';
import ImgWrapper from '@components/ImgWrapper';
import { adminModeAtom } from '@store/atom';
import { adminLogOutAsync } from '@apis/admin';
import * as styles from './Footer.style';

const Footer = () => {
  const router = useRouter();

  const [adminMode, setAdminMode] = useAtom(adminModeAtom);

  const adminBtnClick = useCallback(async () => {
    if (!adminMode) {
      router.push(`/admin`);
      return;
    }

    const result = await adminLogOutAsync();
    if (result.isSuccess) {
      setAdminMode(false);
    }
  }, [adminMode, router, setAdminMode]);

  return (
    <styles.FooterWrapper>
      <styles.AdminInfoWrapper>
        <styles.EmailArea>
          <styles.Text>{COMP_INFO.email.main}</styles.Text>
        </styles.EmailArea>
        <styles.AdminButton onClick={adminBtnClick}>
          {adminMode ? 'LOGOUT' : 'ADMIN'}
        </styles.AdminButton>
      </styles.AdminInfoWrapper>
      <styles.ImgRowWrapper>
        <styles.FlagImgWrapper>
          <ImgWrapper src={IMG_URL.flag_KR} />
        </styles.FlagImgWrapper>
        <styles.LogoImgWrapper>
          <ImgWrapper
            src={IMG_URL.logo}
            placeholder="empty"
            priority
            layout="intrinsic"
            width={160}
            height={30}
          />
        </styles.LogoImgWrapper>
        <styles.FlagImgWrapper>
          <ImgWrapper src={IMG_URL.flag_US} />
        </styles.FlagImgWrapper>
      </styles.ImgRowWrapper>
      <styles.InfoRowWrapper>
        <styles.CompInfoWrapper>
          <styles.Text>{COMP_INFO.address.office_KR}</styles.Text>
          <styles.Text>{`Tel: ${COMP_INFO.number.tel_KR}`}</styles.Text>
          <styles.Text>{`Fax: ${COMP_INFO.number.fax_KR}`}</styles.Text>
        </styles.CompInfoWrapper>
        <styles.AdminInfoWrapper>
          <styles.EmailArea>
            <styles.Text>{COMP_INFO.email.main}</styles.Text>
          </styles.EmailArea>
          <styles.AdminButton onClick={adminBtnClick}>
            {adminMode ? 'LOGOUT' : 'ADMIN'}
          </styles.AdminButton>
        </styles.AdminInfoWrapper>
        <styles.CompInfoWrapper>
          <styles.Text>{COMP_INFO.address.office_US}</styles.Text>
          <styles.Text>{`Tel: ${COMP_INFO.number.tel_US}`}</styles.Text>
          <styles.Text>{`Fax: ${COMP_INFO.number.fax_US}`}</styles.Text>
        </styles.CompInfoWrapper>
      </styles.InfoRowWrapper>
    </styles.FooterWrapper>
  );
};

export default Footer;
