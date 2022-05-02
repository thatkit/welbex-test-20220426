import React from 'react';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import styles from './styles.module.scss';

export const AuthScreen = () => {
  return (
    <Container className={styles.cnt}>
      <Form>
        <FormGroup floating>
          <Input
            id="username"
            name="username"
            placeholder="your username"
            type="text"
          /><Label for="username">Username</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="password"
            name="password"
            placeholder="your password"
            type="text"
          /><Label for="password">Password</Label>
        </FormGroup>
        <div className={styles.btnWrapper}>
          <Button>Register</Button>
          <Button>Login</Button>
        </div>
      </Form>
    </Container>
  );
};
