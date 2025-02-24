import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes, { renderRoutes } from './routes';
import './App.css'

const App = () => {
  return <BrowserRouter basename={import.meta.env.APP_BASE_NAME}>{renderRoutes(routes)}</BrowserRouter>;
};

export default App
