import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { ThemeProvider } from '@emotion/react';
import { theme } from './components/Theme';
const clientId =
  '183537649326-lgcq87ah6lomoonfm4ekmbf1b7o3fn3l.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/slim-moms-frontend">
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
