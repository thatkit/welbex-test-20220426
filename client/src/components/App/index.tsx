import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogNotesScreen } from '../../screens/BlogNotesScreen';
import { AuthScreen } from '../../screens/AuthScreen';
import { observer } from 'mobx-react-lite';
import { useAuthState } from '../../state/authState';

const App = observer(() => {
  const [state] = useState(useAuthState());
  
  // state.getUsername();
  useEffect(() => {
    console.log(state);
  }, []); // ################# insert clg's and implements the logic

  return state.isAuthorised
    ? <BlogNotesScreen />
    : <AuthScreen />;
});

export default App;
