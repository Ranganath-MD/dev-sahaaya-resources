import React from "react";
import { Nav } from "./styles";
import { Toggler } from "./Toggler";
import { FiSun, FiMoon } from "react-icons/fi";

export const Header: React.FC<{ toggleTheme: any; theme: boolean }> = ({
  toggleTheme,
  theme,
}) => {
  const icon = theme ? <FiMoon size={26} /> : <FiSun size={26} />;
  return (
    <Nav>
      <p>Dev Sahaaya</p>
      <Toggler onClick={toggleTheme}>{icon}</Toggler>
    </Nav>
  );
};
