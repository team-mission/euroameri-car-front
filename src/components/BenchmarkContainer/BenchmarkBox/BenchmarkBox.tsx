import ImgWrapper from '@components/ImgWrapper';
import * as styles from './BenchmarkBox.style';

interface BenchmarkBoxProps {
  brandImg: string;
  benchmarkInfos: string[];
}

const BenchmarkBox = ({ brandImg, benchmarkInfos }: BenchmarkBoxProps) => (
  <styles.BenchmarkBoxWrapper>
    <styles.BrandImgWrapper>
      <ImgWrapper src={brandImg} />
    </styles.BrandImgWrapper>
    <styles.ContentWrapper>
      {benchmarkInfos.map((info) => (
        <styles.Text key={info}>{`${info}`}</styles.Text>
      ))}
    </styles.ContentWrapper>
  </styles.BenchmarkBoxWrapper>
);

export default BenchmarkBox;
