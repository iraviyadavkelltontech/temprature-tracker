import React from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

import {Register} from './modules/register';

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <Register />,
    children: [
      {path: '/', element: <Navigate to='/register' />},
      {path: '/register', element: <Navigate to='/register' />},
    ],
  };


  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>;
};

export default App;