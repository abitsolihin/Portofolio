import React from 'react';
import App from './App';
import '../src/index.css';
import { BrowserRouter } from 'react-router-dom';
import { hydrate, render } from 'react-dom';


const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
}
