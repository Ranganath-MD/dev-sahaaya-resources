import type { NextPage } from "next";
import { Banner, Heading, PrimaryButton, SubHeading } from "styles";
import Link from "next/link";
import { Seo } from "components";

const Home: NextPage = () => {
  return (
    <Banner>
      <Seo
        title={"Dev Sahaaya"}
        description={"Resources for Javascript Developers"}
      />
      <Heading>Dev Sahaaya</Heading>
      <SubHeading>Resources for Javascript Developers</SubHeading>
      <Link href="/resources" passHref>
        <PrimaryButton>Resources</PrimaryButton>
      </Link>
    </Banner>
  );
};

export default Home;
