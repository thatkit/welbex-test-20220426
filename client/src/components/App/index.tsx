import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogNotesScreen } from '../../screens/BlogNotesScreen';
import { GlobalState, GlobalStateProvider } from '../../screens/globalState';

function App() {
  return (
    <GlobalStateProvider value={new GlobalState()}>
      <BlogNotesScreen />
    </GlobalStateProvider>
  );
}

export default App;
