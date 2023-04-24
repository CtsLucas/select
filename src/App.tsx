import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactGA from 'react-ga';

import { Router } from '@/Router';
import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';

import { ContentsProvider } from '@contexts/ContentsContext';
import { AuthProvider } from '@contexts/AuthContext';

export function App() {
  const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
  ReactGA.initialize(TRACKING_ID);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ContentsProvider>
        <AuthProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AuthProvider>
      </ContentsProvider>
      <ToastContainer position="top-right" theme="dark" />
    </ThemeProvider>
  );
}
