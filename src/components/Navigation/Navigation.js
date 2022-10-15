import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import s from './Navigation.module.css';

const StyledLink = styled(NavLink)`
  color: #ffffff;
  &.active {
    color: orange;
  }
`;

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <StyledLink to="/" className={s.home} end>
        Home
      </StyledLink>
      <StyledLink to="/movies" className={s.movies}>
        Movies
      </StyledLink>
    </nav>
  );
}
