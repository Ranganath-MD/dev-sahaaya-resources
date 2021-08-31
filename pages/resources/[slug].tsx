import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import resourcesItems from "data/resources.json";
import { getDataByParams } from "data/getDataByParams";
import tags from "data/resources.json";
import { Container, Relative, Sticky, A, List } from "styles";
import Link from "next/link";
import { ResourceCard } from "components/card/ResourceCard";
import { ResourceFlex } from "styles/resourceCard";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = resourcesItems?.resources.map((res) => ({
    params: { slug: res.value },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const data: IResourceData[] = getDataByParams(params?.slug as string);
  return {
    props: {
      data,
      resourcetags: tags.resources,
    },
  };
};

const ResourceItems: React.FC<{ data: IResourceData[]; resourcetags: Tag[] }> =
  ({ data, resourcetags }) => {
    return (
      <Container>
        <Relative>
          <Sticky>
            {resourcetags.map((res) => {
              return (
                <Link key={res.value} href={`/resources/${res.value}`} passHref>
                  <A>{res.name}</A>
                </Link>
              );
            })}
          </Sticky>
        </Relative>
        <List>
          {data?.map((res) => {
            return (
              <div key={res.section}>
                <h3>{res.section}</h3>
                <ResourceFlex>
                  {res?.children.map((child) => {
                    return (
                      <ResourceCard
                        key={child.id}
                        data={child}
                      />
                    );
                  })}
                </ResourceFlex>
              </div>
            );
          })}
        </List>
      </Container>
    );
  };

export default ResourceItems;
