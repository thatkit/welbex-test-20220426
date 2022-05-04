import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { observer } from 'mobx-react-lite';
import { useAuthState } from '../../state/authState';
import { BlogNotesScreen } from '../../screens/BlogNotesScreen';
import { AuthScreen } from '../../screens/AuthScreen';

const App = observer(() => {
  const [state] = useState(useAuthState());
  
  useEffect(() => {
    state.validateToken();
  }, []); // # INVOKED TWICE

  return state.isAuthorised
    ? <BlogNotesScreen />
    : <AuthScreen />;
});

export default App;
