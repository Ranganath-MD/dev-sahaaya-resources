import jsItems from "data/javascript.json";
import reactItems from "data/react.json";

export const getDataByParams = (slug: string): IResourceData[] => {
  switch (slug) {
    case "javascript":
      return jsItems;
    case "react-js":
      return reactItems;
    default:
      return [];
  }
};
