import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogNotesScreen } from '../../screens/BlogNotesScreen';
import { GlobalState, GlobalStateProvider } from '../../screens/globalState';
import { AuthScreen } from '../../screens/AuthScreen';

function App() {
  return (
    <GlobalStateProvider value={new GlobalState()}>
      <AuthScreen />
      {/* <BlogNotesScreen /> */}
    </GlobalStateProvider>
  );
}

export default App;
