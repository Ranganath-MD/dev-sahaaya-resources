import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import tags from "data/resources.json";
import { Flex } from "styles";
import Link from "next/link";
import dynamic from "next/dynamic";

const Tag = dynamic(() => import("styles/Tags"), { ssr: false });

export const getStaticProps: GetStaticProps = async () => {
  return { props: { resourcetags: tags.resources } };
};

const ResourcesTags: NextPage<Tags> = ({ resourcetags }) => {
  return (
    <Flex>
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
