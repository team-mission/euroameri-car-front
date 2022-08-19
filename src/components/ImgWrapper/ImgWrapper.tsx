import Image from 'next/image';
import * as styles from './ImgWrapper.style';

interface ImgWrapperProps {
  src: string;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  placeholder?: 'blur' | 'empty';
  priority?: boolean;
  width?: string | number | undefined;
  height?: string | number | undefined;
}

const ImgWrapper = ({
  src,
  layout = 'fill',
  width,
  height,
  placeholder = 'blur',
  priority = false,
}: ImgWrapperProps) => (
  <styles.ImgWrapper>
    <Image
      src={src}
      layout={layout}
      placeholder={placeholder}
      blurDataURL={src}
      priority={priority}
      width={width}
      height={height}
    />
  </styles.ImgWrapper>
);

export default ImgWrapper;
