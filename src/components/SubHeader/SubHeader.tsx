import { IMG_URL } from '@constants';
import * as styles from './SubHeader.style';

interface SubHeaderProps {
  title: string;
}

const SubHeader = ({ title }: SubHeaderProps) => (
  <styles.SubHeaderWrapper>
    <styles.SubHeaderContent>
      <styles.LogoWrapper>
        <styles.LogoImg src={IMG_URL.logo} />
      </styles.LogoWrapper>
      <styles.Title>{title}</styles.Title>
    </styles.SubHeaderContent>
  </styles.SubHeaderWrapper>
);

export default SubHeader;
