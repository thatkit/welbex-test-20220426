import React from 'react';
import { Container, Nav, NavItem } from 'reactstrap';
import styles from './styles.module.scss';

export const Navbar = ({ data }: { data: any }) => { // # any
    return (
        <Container>
            <Nav className={styles.nav}>
                <NavItem className={styles.topTitle} tag="h1">Blog</NavItem>
                <NavItem className={styles.authorName} tag="h2">{data}</NavItem>
            </Nav>
        </Container>
    )
}
