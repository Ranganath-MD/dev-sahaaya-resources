import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import resourcesItems from "data/resources.json";
import { getDataByParams } from "data/getDataByParams";

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
    },
  };
};
const ResourceItems: React.FC<{ data: IResourceData[] }> = (props) => {
  return (
    <div>
      {
        props.data?.map(res => {
          return (
            <div key={res.section}>
              <h3>{res.section}</h3>
              <div>
                {
                  res?.children.map(child => {
                    return (
                      <p key={child.id}>{child.title}</p>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default ResourceItems;
