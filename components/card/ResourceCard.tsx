import React from "react";
import { CardContent, CardLogo } from "styles/resourceCard";
import Image from "next/image";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("styles/resourceCard"), { ssr: false });

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
          />
        </a>
      </CardLogo>
      <CardContent>
        <p>{title}</p>
      </CardContent>
    </Card>
  );
};
