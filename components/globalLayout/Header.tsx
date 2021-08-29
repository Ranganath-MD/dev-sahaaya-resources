import React from "react";
import { Nav, Logo } from "./styles";
import { Toggler } from "./Toggler";
import { FiSun, FiMoon } from "react-icons/fi";

export const Header: React.FC<{ toggleTheme: any; theme: boolean }> = ({
  toggleTheme,
  theme,
}) => {
  const icon = theme  ? <FiSun size={26} /> : <FiMoon size={26} />;
  return (
    <Nav>
      <Logo>{`{ ...💻DS }`}</Logo>
      <Toggler onClick={toggleTheme}>{icon}</Toggler>
    </Nav>
  );
};
