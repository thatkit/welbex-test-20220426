import React, { useState } from 'react';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useGlobalState } from '../globalState';
import styles from './styles.module.scss';

export const AuthScreen = () => {
  const [state] = useState(useGlobalState());
  // state.getHello() // # test
  state.registerUser() // # test

  return (
    <Container className={styles.cnt}>
      <Form>
        <FormGroup floating>
          <Input
            id="username"
            name="username"
            placeholder="your username"
            type="text"
            onChange={({ target }) => state.setUsername(target.value)}
          /><Label for="username">Username</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="password"
            name="password"
            placeholder="your password"
            type="text"
            onChange={({ target }) => state.setPassword(target.value)}
          /><Label for="password">Password</Label>
        </FormGroup>
        <div className={styles.btnWrapper}>
          <Button onClick={(e) => state.registerUser()}>Register</Button>
          <Button>Login</Button>
        </div>
      </Form>
    </Container>
  );
};
