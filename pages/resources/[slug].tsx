import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import resourcesItems from "data/resources.json";
import { getDataByParams } from "data/getDataByParams";
import tags from "data/resources.json";
import {
  Container,
  Relative,
  Sticky,
  List,
  A,
  ResourceFlex,
  Section,
} from "styles";
import Link from "next/link";
import { ResourceCard, Seo } from "components";

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
      slug: params?.slug,
      data,
      resourcetags: tags.resources,
    },
  };
};

const getDescription = (slug: string, data: IResourceData[]): string => {
  const sections = data?.map(d => d.section)
  return `${slug}: ${sections}`
}

const ResourceItems: React.FC<{ slug: string; data: IResourceData[]; resourcetags: Tag[] }> =
  ({ slug, data, resourcetags }) => {
    return (
      <Container>
        <Seo
          title={`${slug} Resources`}
          description={getDescription(slug, data)}
        />
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
              <Section key={res.section}>
                <h3>{res.section}</h3>
                <ResourceFlex>
                  {res?.children.map((child) => {
                    return <ResourceCard data={child} key={child.id} />;
                  })}
                </ResourceFlex>
              </Section>
            );
          })}
        </List>
      </Container>
    );
  };

export default ResourceItems;
