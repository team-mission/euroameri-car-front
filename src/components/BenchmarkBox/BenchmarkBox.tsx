import * as styles from './BenchmarkBox.style';

interface BenchmarkBoxProps {
  brandImg: string;
  benchmarkInfos: string[];
}

const BenchmarkBox = ({ brandImg, benchmarkInfos }: BenchmarkBoxProps) => (
  <styles.BenchmarkBoxWrapper>
    <styles.BrandImgWrapper>
      <styles.BrandImg src={brandImg} />
    </styles.BrandImgWrapper>
    <styles.ContentWrapper>
      {benchmarkInfos.map((info) => (
        <styles.Text key={info}>{`- ${info}`}</styles.Text>
      ))}
    </styles.ContentWrapper>
  </styles.BenchmarkBoxWrapper>
);

export default BenchmarkBox;
