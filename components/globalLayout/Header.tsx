import React from "react";
import { Nav, Logo } from "./styles";
import { Toggler } from "./Toggler";
import { FiSun, FiMoon } from "react-icons/fi";
import Link from "next/link";

const Header: React.FC<{ toggleTheme: any; theme: boolean }> = ({
  toggleTheme,
  theme,
}) => {
  const icon = theme ? <FiSun size={26} /> : <FiMoon size={26} />;
  return (
    <Nav>
      <Link href="/" passHref>
        <Logo>{`{ ...💻DS }`}</Logo>
      </Link>
      <Toggler onClick={toggleTheme}>{icon}</Toggler>
    </Nav>
  );
};

export default Header;
