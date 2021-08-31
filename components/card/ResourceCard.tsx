import React from "react";
import { CardContent, CardLogo } from "styles/resourceCard";
import Image from "next/image";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("styles/resourceCard"), { ssr: false });

export const ResourceCard: React.FC<{ data: IData }> = ({ data }) => {
  const { title } = data;
  return (
    <Card>
      <CardLogo>
        <Image
          src={`${process.env.CLOUDINARY_URL}/${data.image}`}
          alt={title}
          width={60}
          height={60}
        />
      </CardLogo>
      <CardContent>
        <p>{title}</p>
      </CardContent>
    </Card>
  );
};
