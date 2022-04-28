import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        style={navData => (navData.isActive ? styles.activeLink : styles.link)}
      >
        Главная
      </NavLink>

      {isLoggedIn && (
        <nav>
          <NavLink
            to="/contacts"
            style={navData =>
              navData.isActive ? styles.activeLink : styles.link
            }
          >
            Contacts
          </NavLink>
        </nav>
      )}
    </nav>
  );
};

export default Navigation;
