import dynamic from "next/dynamic";

export const Sticky = dynamic(() => import("./Sticky"), { ssr: false });
export const A = dynamic(() => import("./A"), { ssr: false });
export const Toggler = dynamic(() => import("./Toggler"), { ssr: false });
export const Tag = dynamic(() => import("./Tags"), { ssr: false });
export const PrimaryButton = dynamic(() => import("./PrimaryButton"), { ssr: false });
export const Card = dynamic(() => import("./resourceCard"), { ssr: false });

export { GlobalStyles } from "styles/globalStyles";
export {
  Banner,
  ColorLine,
  Container,
  Flex,
  List,
  Logo,
  Relative,
  CardLogo,
  CardContent,
  ResourceFlex,
  H2,
  Section
} from "./components";
export { Content, Nav } from "./layout";
