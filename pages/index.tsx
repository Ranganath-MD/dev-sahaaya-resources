import { Layout } from "components";
import type { NextPage } from "next";
import { Banner, PrimaryButton } from "styles";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner>
        <h1>Dev Sahaaya</h1>
        <p>Resources for Javascript Developers</p>
        <Link href="/resources" passHref>
          <PrimaryButton>Resources</PrimaryButton>
        </Link>
      </Banner>
    </Layout>
  );
};

export default Home;
