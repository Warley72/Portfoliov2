import React, { useState, useEffect } from 'react';
import { HeaderContainer, NavContainer, NavLink } from './style';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
        <div>
          <img src="./Warley.png" alt="ImaginLogo" />
        </div>
        <NavContainer>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavContainer>
    </HeaderContainer>
  );
}