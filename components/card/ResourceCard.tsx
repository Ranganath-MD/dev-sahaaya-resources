import React from "react";
import { Card, CardContent, CardLogo } from "styles";
import Image from "next/image";

export const ResourceCard: React.FC<{ data: IData }> = ({ data }) => {
  const { title, link } = data;
  return (
    <Card>
      <CardLogo>
        <a href={link} target="_blank" rel="noreferrer">
          <Image
            src={`${process.env.CLOUDINARY_URL}/${data.image}`}
            alt={title}
            width={60}
            height={60}
            placeholder="blur"
            blurDataURL={`${process.env.CLOUDINARY_URL}/${data.image}`}
          />
        </a>
      </CardLogo>
      <CardContent>
        <p>{title}</p>
      </CardContent>
    </Card>
  );
};
