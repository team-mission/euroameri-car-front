import Link from 'next/link';

import * as styles from './MainHeader.style';

const MainHeader = () => (
  <styles.MainHeaderWrapper>
    <styles.LogoWrapper>
      <styles.LogoImg src="/images/LogoRotated.png" />
    </styles.LogoWrapper>
    <styles.Wrapper>
      <styles.HeaderImgWrapper>
        <styles.HeaderImg src="/images/HeaderImg.png" />
      </styles.HeaderImgWrapper>
      <styles.Navigation>
        <Link href="/" passHref>
          <styles.StyledNavItem>유로 아메리카(주)</styles.StyledNavItem>
        </Link>
        <Link href="/import" passHref>
          <styles.StyledNavItem>슈퍼카/일반 수입차 부품</styles.StyledNavItem>
        </Link>
        <Link href="/research" passHref>
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
