import { BENCHMARK_BRAND, BENCHMARK_INFO, IMG_URL } from '@constants';
import BenchmarkBox from '@components/BenchmarkBox';
import * as styles from './BenchmarkContainer.style';

const BenchmarkContainer = () => (
  <styles.BenchmarkContainerWrapper>
    {BENCHMARK_BRAND.map((brand) => (
      <BenchmarkBox
        brandImg={`${IMG_URL.benchmark_basic}${brand}.png`}
        benchmarkInfos={BENCHMARK_INFO[brand]}
        key={brand}
      />
    ))}
  </styles.BenchmarkContainerWrapper>
);

export default BenchmarkContainer;
