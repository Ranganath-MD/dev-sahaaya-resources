import type { AppProps } from "next/app";
import { Layout } from "components";
import { DefaultSeo } from "next-seo";
import { seoConfig } from "components/Seo/seo.config"
import { Seo } from "components/Seo/Seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo
        {...seoConfig}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
