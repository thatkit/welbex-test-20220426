import React, { useState } from 'react';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useAuthState } from '../../state/authState';
import styles from './styles.module.scss';

export const AuthScreen = () => {
  const [state] = useState(useAuthState());

  return (
    <Container className={styles.cnt}>
      <Form>
        <FormGroup floating>
          <Input
            id="username"
            name="username"
            placeholder="your username"
            type="text"
            onChange={({ target }) => state.setUsernameInput(target.value)}
          />
          <Label for="username">Username</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="password"
            name="password"
            placeholder="your password"
            type="text"
            onChange={({ target }) => state.setPasswordInput(target.value)}
          />
          <Label for="password">Password</Label>
        </FormGroup>
        <div className={styles.btnWrapper}>
          <Button onClick={() => state.registerUser()}>Register</Button>
          <Button onClick={() => state.loginUser()}>Login</Button>
        </div>
      </Form>
    </Container>
  );
};
