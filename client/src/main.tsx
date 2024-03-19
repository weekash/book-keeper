import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import createTheme
import { StoreProvider } from './context/Context.tsx';
import { setupAxios } from './utils/axios-interceptor.ts';
import axios from 'axios';

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});
setupAxios(axios)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StoreProvider>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
