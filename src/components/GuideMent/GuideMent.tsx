import { ReactNode } from 'react';

import * as styles from './GuideMent.style';

interface GuideMentProps {
  children: ReactNode;
  className?: string;
}

const GuideMent = ({ children, className }: GuideMentProps) => (
  <styles.Text className={className}>{children}</styles.Text>
);

export default GuideMent;
