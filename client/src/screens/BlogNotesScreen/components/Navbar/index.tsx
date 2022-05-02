import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import styles from './styles.module.scss';

export const Navbar = ({ data }: { data: any }) => { // # any
    return (
        <Nav className={styles.nav}>
            <NavItem className={styles.topTitle} tag="h1">{data}'s Blog</NavItem>
        </Nav>
    )
}
