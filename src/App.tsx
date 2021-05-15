import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { ModalCustom } from './components/ModalCustom';

import ThemeContext from './styles/themes/context';
import usePersistedState from './util/usePersistentState';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { useState } from 'react';

export function App() {
   const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);
   const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] =
      useState(false);

   function handleOpenNewTransactionModal() {
      SetIsNewTransactionModalOpen(true);
   }

   function handleCloseNewTransactionModal() {
      SetIsNewTransactionModalOpen(false);
   }

   function toggleTheme() {
      setTheme(theme.title === 'light' ? dark : light);
   }

   return (
      <>
         <ThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={theme}>
               <Header
                  onOpenNewTransactionModal={handleOpenNewTransactionModal}
               />
               <Dashboard />
               <ModalCustom
                  isOpen={isNewTransactionModalOpen}
                  onRequestClose={handleCloseNewTransactionModal}
               ></ModalCustom>
               <GlobalStyle />
            </ThemeProvider>
         </ThemeContext.Provider>
      </>
   );
}
