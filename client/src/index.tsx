import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/index';
import reportWebVitals from './reportWebVitals';
import { GlobalState, GlobalStateProvider } from './screens/globalState';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStateProvider value={new GlobalState()}>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
