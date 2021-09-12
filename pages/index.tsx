import type { NextPage } from "next";
import { Banner, PrimaryButton } from "styles";
import Link from "next/link";
import { Seo } from "components";

const Home: NextPage = () => {
  return (
    <Banner>
      <Seo
        title={"Dev Sahaaya"}
        description={"Resources for Javascript Developers"}
      />
      <h1>Dev Sahaaya</h1>
      <p>Resources for Javascript Developers</p>
      <Link href="/resources" passHref>
        <PrimaryButton>Resources</PrimaryButton>
      </Link>
    </Banner>
  );
};

export default Home;
