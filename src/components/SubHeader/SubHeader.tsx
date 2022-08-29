import { IMG_URL } from '@constants';
import ImgWrapper from '@components/ImgWrapper';
import * as styles from './SubHeader.style';

interface SubHeaderProps {
  title: string;
}

const SubHeader = ({ title }: SubHeaderProps) => (
  <styles.SubHeaderWrapper>
    <styles.SubHeaderContent>
      <styles.LogoWrapper>
        <ImgWrapper
          src={IMG_URL.logo}
          placeholder="empty"
          priority
          layout="intrinsic"
          width={170}
          height={30}
        />
      </styles.LogoWrapper>
      <styles.Title>{title}</styles.Title>
    </styles.SubHeaderContent>
  </styles.SubHeaderWrapper>
);

export default SubHeader;
