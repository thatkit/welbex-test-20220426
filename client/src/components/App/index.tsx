import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogNotesScreen } from '../../screens/BlogNotesScreen';
import { useGlobalState } from '../../screens/globalState';
import { AuthScreen } from '../../screens/AuthScreen';

function App() {
  const [state] = useState(useGlobalState());
  const [isAuth] = useState(state.getAuth());

  useEffect(() => {
    state.getAuth();
    console.log('isAuth: ', isAuth)
  }, [state]);

  return isAuth ? <BlogNotesScreen /> : <AuthScreen />;
}

export default App;
