import type { NextPage } from "next";
import { Banner } from "styles";
import Link from "next/link";
import dynamic from "next/dynamic";

const PrimaryButton = dynamic(() => import("styles/PrimaryButton"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <Banner>
      <h1>Dev Sahaaya</h1>
      <p>Resources for Javascript Developers</p>
      <Link href="/resources" passHref>
        <PrimaryButton>Resources</PrimaryButton>
      </Link>
    </Banner>
  );
};

export default Home;
