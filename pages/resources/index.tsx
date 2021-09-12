import { GetStaticProps, NextPage } from "next";
import React from "react";
import tags from "data/resources.json";
import { Flex, Tag } from "styles";
import Link from "next/link";
import { Seo } from "components";

export const getStaticProps: GetStaticProps = async () => {
  return { props: { resourcetags: tags.resources } };
};

const ResourcesTags: NextPage<Tags> = ({ resourcetags }) => {
  return (
    <Flex>
      <Seo
        title={"Tags: Dev Sahaaya"}
        description={"All Tags for the Resources"}
      />
      {resourcetags?.map((tag: Tag) => {
        return (
          <Link href={`/resources/${tag.value}`} key={tag.value} passHref>
            <Tag>{tag.name}</Tag>
          </Link>
        );
      })}
    </Flex>
  );
};

export default ResourcesTags;
