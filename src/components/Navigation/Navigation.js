import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';



const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink to="/" className={styles.link}>
      Ноme
    </NavLink>


    <NavLink to="/todos" className={styles.link}>
      Todo
    </NavLink>

  </nav>
);

export default Navigation;
