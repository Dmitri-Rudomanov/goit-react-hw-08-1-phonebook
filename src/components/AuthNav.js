import React from 'react';
import { NavLink } from 'react-router-dom';

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

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        style={navData => (navData.isActive ? styles.activeLink : styles.link)}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        style={navData => (navData.isActive ? styles.activeLink : styles.link)}
      >
        Логин
      </NavLink>
    </div>
  );
}
