import jsItems from "data/javascript.json";
import reactItems from "data/react.json";
import nodeItems from "data/node.json";
import databases from "data/databases.json";

export const getDataByParams = (slug: string): IResourceData[] => {
  switch (slug) {
    case "javascript":
      return jsItems;
    case "react-js":
      return reactItems;
    case "node-js":
      return nodeItems;
    case "database":
      return databases;
    default:
      return [];
  }
};