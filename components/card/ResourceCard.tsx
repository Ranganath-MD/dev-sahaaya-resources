import React from "react";
import { Card, CardContent, CardLogo, H2 } from "styles";
import Image from "next/image";

export const ResourceCard: React.FC<{ data: IData }> = ({ data }) => {
  const { title, link } = data;
  return (
    <Card>
      <CardLogo>
        <a href={link} target="_blank" rel="noreferrer">
          {data.image === "" ? (
            <H2>{data.initial}</H2>
          ) : (
            <Image
              src={`${process.env.CLOUDINARY_URL}/${data.image}`}
              alt={title}
              width={40}
              height={40}
              placeholder="blur"
              blurDataURL={`${process.env.CLOUDINARY_URL}/${data.image}`}
            />
          )}
        </a>
      </CardLogo>
      <CardContent>
        <p>{title}</p>
      </CardContent>
    </Card>
  );
};
