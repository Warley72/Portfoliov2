import {HeaderContainer, NavContainer, NavLink} from "./style";

export default function Header() {
  return (
    <HeaderContainer>
        <div>
            <img src="./Warley.png" alt="logo aqui" />
        </div>
        <NavContainer>
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink>Portfolio</NavLink></li>
            <li><NavLink>Services</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
        </NavContainer>
    </HeaderContainer>
  );
}
