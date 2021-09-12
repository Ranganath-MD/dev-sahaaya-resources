import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Banner } from "styles";

export const Main = dynamic(() => import("../components/globalLayout/Main"), { ssr: false });

const Home: NextPage = () => {
  return (
    <Banner>
      <Main />
    </Banner>
  );
};

export default Home;
