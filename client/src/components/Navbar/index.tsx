import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import styles from './styles.module.scss';

export const Navbar = ({ data }: { data: any }) => { // # any
    return (
        <Nav className={styles.nav}>
            <NavItem className={styles.topTitle} tag="h1">Blog</NavItem>
            <NavItem className={styles.authorName} tag="h2">{data}</NavItem>
        </Nav>
    )
}
