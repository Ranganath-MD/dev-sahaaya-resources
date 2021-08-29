type Tag = {
  name: string;
  value: string;
}

interface Tags {
  resourcetags: Tag[];
}

interface IData {
  title: string;
  link: string;
  image: string;
  initial: string;
  description: string;
  id: string
}
interface IResourceData {
    section: string;
    children: IData[]
}