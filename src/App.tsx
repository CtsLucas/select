import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import { ContentsProvider } from './contexts/ContentsContext';

import { Home } from './pages/Home';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ContentsProvider>
        <Home />
      </ContentsProvider>
    </ThemeProvider>
  );
}
