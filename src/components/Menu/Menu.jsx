import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import MenuMobile from "../MenuMobile/MenuMobile";
import { ContainerMenu, Item, Logo, MenuWrapper, MyLink } from "./Menu.styles";

const Menu = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const { pathname } = useLocation();

  return (
    <div>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <ContainerMenu>
        <Logo className="logo"> &lt; Erick Silva /&gt; </Logo>
        <AiOutlineMenu size={25} onClick={() => setMenuIsVisible(true)} />
        <MenuWrapper className="menu">
          <Item>
            {pathname === "/" ? (
              <MyLink to="/blog">BLOG</MyLink>
            ) : (
              <MyLink to="/">HOME</MyLink>
            )}
          </Item>
        </MenuWrapper>
      </ContainerMenu>
    </div>
  );
};

export default Menu;
