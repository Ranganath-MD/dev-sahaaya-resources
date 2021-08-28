import { Layout } from "components";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import tags from "data/resources.json";

export const getStaticProps: GetStaticProps = async () => {
  return { props: { resourcetags: tags.resources } };
};

const ResourcesTags: NextPage<Tags> = ({ resourcetags }) => {
  return (
    <Layout>
      <div>
        {resourcetags?.map((tag: Tag) => {
          return <h1 key={tag.value}>{tag.name}</h1>;
        })}
      </div>
    </Layout>
  );
};

export default ResourcesTags;
