import type { AppProps } from "next/app";
import { Layout } from "components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>
          Dev Sahaaya
        </title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
