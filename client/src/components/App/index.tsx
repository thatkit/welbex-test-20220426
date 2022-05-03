import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogNotesScreen } from '../../screens/BlogNotesScreen';
import { useGlobalState } from '../../screens/globalState';
import { AuthScreen } from '../../screens/AuthScreen';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const [state] = useState(useGlobalState());

  state.getUsername();
  useEffect(() => {
    console.log(state.isAuth);
  }, [state]);

  return state.isAuth ? <BlogNotesScreen /> : <AuthScreen />;
});

export default App;
