import type { AppProps } from 'next/app';
import '@constants/styles/global.css';
import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
