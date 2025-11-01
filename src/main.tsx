import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize theme class on document
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.classList.add(savedTheme);
} else {
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
