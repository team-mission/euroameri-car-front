import { ReactNode } from 'react';

import * as styles from './MainWrapper.style';

interface MainWrapperProps {
  children: ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps) => (
  <styles.StyledMain>{children}</styles.StyledMain>
);

export default MainWrapper;
