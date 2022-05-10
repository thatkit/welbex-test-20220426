import React, { useState } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { useAuthState } from '../../../AuthScreen/authState';
import styles from './styles.module.scss';

export const Navbar = (): JSX.Element => {
  const [state] = useState(useAuthState());

  return (
    <Nav className={styles.nav}>
      <NavItem className={styles.topTitle} tag="h1">
        {state.getUsername || 'The best human being'}'s Blog
      </NavItem>
    </Nav>
  );
};
