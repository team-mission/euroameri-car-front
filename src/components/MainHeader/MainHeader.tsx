import Link from 'next/link';

import { IMG_URL } from '@constants';
import ImgWrapper from '@components/ImgWrapper';
import * as styles from './MainHeader.style';

interface MainHeaderProps {
  title: string;
}

const MainHeader = ({ title }: MainHeaderProps) => (
  <styles.MainHeaderWrapper>
    <styles.LogoWrapper>
      <ImgWrapper src={IMG_URL.logo_rotated} placeholder="empty" priority />
    </styles.LogoWrapper>
    <styles.MobileLogoWrapper>
      <ImgWrapper
        src={IMG_URL.logo}
        placeholder="empty"
        priority
        layout="intrinsic"
        width={160}
        height={30}
      />
    </styles.MobileLogoWrapper>
    <styles.Wrapper>
      <styles.HeaderImgWrapper>
        <ImgWrapper src={IMG_URL.main_header} placeholder="empty" priority />
        <styles.HeaderTextWrapper>
          <styles.HeaderText>유로아메리카(주)</styles.HeaderText>
          <styles.HeaderText className="second">{title}</styles.HeaderText>
        </styles.HeaderTextWrapper>
      </styles.HeaderImgWrapper>
      <styles.Navigation>
        <Link href="/" passHref>
          <styles.StyledNavItem>유로아메리카(주)</styles.StyledNavItem>
        </Link>
        <Link href="/import" passHref>
          <styles.StyledNavItem>슈퍼카/일반 수입차 부품</styles.StyledNavItem>
        </Link>
        <Link href="/benchmark" passHref>
          <styles.StyledNavItem>연구용/벤치마킹 부품</styles.StyledNavItem>
        </Link>
        <Link href="/board" passHref>
          <styles.StyledNavItem>게시판</styles.StyledNavItem>
        </Link>
      </styles.Navigation>
    </styles.Wrapper>
  </styles.MainHeaderWrapper>
);

export default MainHeader;
