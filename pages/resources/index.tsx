import { GetStaticProps, NextPage } from "next";
import React from "react";
import tags from "data/resources.json";
import { Flex, Tag } from "styles";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  return { props: { resourcetags: tags.resources } };
};

const ResourcesTags: NextPage<Tags> = ({ resourcetags }) => {
  return (
      <Flex>
        {resourcetags?.map((tag: Tag) => {
          return (
            <Link href="/resources" key={tag.value} passHref>
              <Tag>{tag.name}</Tag>
            </Link>
          );
        })}
      </Flex>
  );
};

export default ResourcesTags;
