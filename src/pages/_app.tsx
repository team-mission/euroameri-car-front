import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@constants/styles/global.css';
import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>유로아메리카</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="슈퍼카 및 유럽 미국 일본 수입차 부품 유통"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta property="og:title" content="유로아메리카" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/sns.png" />
        <meta
          property="og:description"
          content="슈퍼카 및 유럽 미국 일본 수입차 부품 유통"
        />
        <meta property="og:site_name" content="유로아메리카" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="유로아메리카" />
        <meta
          name="twitter:description"
          content="슈퍼카 및 유럽 미국 일본 수입차 부품 유통"
        />
        <meta name="twitter:image" content="/images/sns.png" />

        <meta
          name="naver-site-verification"
          content="cd3ec593ae93038fdf99c2ee6b2a2e2c35735a90"
        />
        <meta
          name="google-site-verification"
          content="nLVdsdqM3BmqoHt3EO-E9YimaXTlbZqtHVM5R4k4V3g"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
