import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.625rem 5rem;
background-color: ${({ theme }) => theme.colors.primary};
`
export const NavContainer = styled.div`
 display: flex;
 flex-direction: row;
 gap: 0.625rem;
 font-size: 0.98rem;
 list-style: none;
 text-decoration: none;
`
export const NavLink = styled.a`
 cursor: pointer;
 color: ${({ theme }) => theme.colors.text};
 transition: color 0.3s ease;

&:hover {
  color: ${({ theme }) => theme.colors.secondary}; 
}
`