import { Seo } from "components";
import Link from "next/link";
import React from "react";
import { Heading, SubHeading, PrimaryButton } from "styles";

const Main = () => {
  return (
    <>
      <Seo
        title={"Dev Sahaaya"}
        description={"Resources for Javascript Developers"}
      />
      <Heading>Dev Sahaaya</Heading>
      <SubHeading>Resources for Javascript Developers</SubHeading>
      <Link href="/resources" passHref>
        <PrimaryButton>Resources</PrimaryButton>
      </Link>
    </>
  );
};

export default Main;
