import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme, isScrolled }) => 
    isScrolled ? theme.colors.primary : theme.colors.trasparent};
  box-shadow: ${({ isScrolled }) => 
    isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.2)' : 'none'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 10;
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 1rem;
  padding-bottom: 5px;
`;

export const NavLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary}; 
  }
`;