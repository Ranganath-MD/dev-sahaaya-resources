import React from "react";
import { Card, CardContent, CardLogo } from "styles/resourceCard";

export const ResourceCard: React.FC<{ data: IData }> = ({ data }) => {
  const { title, description } = data;
  return (
    <Card>
      <CardLogo>
        <img src="https://findicons.com/files/icons/1072/face_avatars/300/i03.png" width={"100%"} height="auto" alt={title} />
      </CardLogo>
      <CardContent>
        <p>{title}</p>
        <span>{description}</span>
      </CardContent>
    </Card>
  );
};
