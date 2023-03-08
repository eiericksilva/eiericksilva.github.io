import { useLocation } from "react-router-dom";
import { ContainerMenu, Item, Logo, MenuWrapper, MyLink } from "./Menu.styles";

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <ContainerMenu>
        <Logo className="logo"> &lt; Erick Silva /&gt; </Logo>
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
