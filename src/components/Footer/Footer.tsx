import { COMP_INFO } from '@constants/compInfo';
import * as styles from './Footer.style';

const Footer = () => (
  <styles.FooterWrapper>
    <styles.CompInfoWrapper>
      <styles.FlagWrapper src="/images/FlagKR.png" />
      <styles.Text>{COMP_INFO.address.office_KR}</styles.Text>
      <styles.Text>{`Tel: ${COMP_INFO.number.tel_KR}`}</styles.Text>
      <styles.Text>{`Fax: ${COMP_INFO.number.fax_KR}`}</styles.Text>
    </styles.CompInfoWrapper>
    <styles.CompInfoWrapper>
      <styles.FlagWrapper src="/images/FlagUS.png" />
      <styles.Text>{COMP_INFO.address.office_US}</styles.Text>
      <styles.Text>{`Tel: ${COMP_INFO.number.tel_US}`}</styles.Text>
      <styles.Text>{`Fax: ${COMP_INFO.number.fax_US}`}</styles.Text>
    </styles.CompInfoWrapper>
  </styles.FooterWrapper>
);

export default Footer;
