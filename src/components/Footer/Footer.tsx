import Link from 'next/link';
import dynamic from 'next/dynamic';

import { COMP_INFO, IMG_URL } from '@constants';
import ImgWrapper from '@components/ImgWrapper';
import * as styles from './Footer.style';

const AdminButton = dynamic(() => import('@components/AdminButton'), {
  ssr: false,
});

const Footer = () => (
  <styles.FooterWrapper>
    <styles.AdminInfoWrapper>
      <styles.EmailArea>
        <styles.Text>{COMP_INFO.email.main}</styles.Text>
      </styles.EmailArea>
      <AdminButton />
    </styles.AdminInfoWrapper>
    <styles.ImgRowWrapper>
      <styles.FlagImgWrapper>
        <ImgWrapper src={IMG_URL.flag_KR} />
      </styles.FlagImgWrapper>
      <Link href="mailto:sales@euroamericar.com" passHref>
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
      </Link>
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
        <Link href="mailto:sales@euroamericar.com" passHref>
          <styles.EmailArea>
            <styles.Text>{COMP_INFO.email.main}</styles.Text>
          </styles.EmailArea>
        </Link>
        <AdminButton />
      </styles.AdminInfoWrapper>
      <styles.CompInfoWrapper>
        <styles.Text>{COMP_INFO.address.office_US}</styles.Text>
        <styles.Text>{`Tel: ${COMP_INFO.number.tel_US}`}</styles.Text>
        <styles.Text>{`Fax: ${COMP_INFO.number.fax_US}`}</styles.Text>
      </styles.CompInfoWrapper>
    </styles.InfoRowWrapper>
  </styles.FooterWrapper>
);

export default Footer;
