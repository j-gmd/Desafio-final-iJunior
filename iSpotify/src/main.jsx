import React from 'react';
import ReactDOM from 'react-dom/client';

// Packages Import
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages Import
import Home from './pages/Home/Home.jsx';
import Playlist from './pages/Playlist/Playlist.jsx';
import LikedMusics from './pages/LikedMusics/LikedMusics.jsx';
import Register from './pages/Register/Register.jsx';
import ArtistsPage from './pages/Artists/ArtistsPage.jsx';
import MyAccount from './pages/MyAccount/MyAccount.jsx';
import ChangeEmail from './pages/ChangeEmail/ChangeEmail';
import ChangePassword from './pages/ChangePassword/ChangePassword';

//Lógica de Autenticação Cadastral
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import './index.css';
import ArtistTracksPage from './pages/ArtistTracksPage/ArtistTracksPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ArtistsPage />,
    errorElement: <div>404 Not Found  <a href="/">Go To Main Page</a> </div>
  },
  /*
  {
    path: '/playlist',
    element: <Playlist />,
  },
  {
    path: '/liked-musics',
    element: <LikedMusics />,
  },*/
  {
    path: '/playlist',
    element: <PrivateRoute><Playlist /></PrivateRoute>,
  },
  {
    path: '/liked-musics',
    element: <PrivateRoute><LikedMusics /></PrivateRoute>,
  },
  
  {
    path: '/register',
    element: <Register />,
  },
  /*
  {
    path: '/artists',
    element: <ArtistsPage />,
  },
  {
    path: '/artist-tracks-page/:artistId',
    element: <ArtistTracksPage />
  },
  {
    path: '/my-account',
    element: <MyAccount />
  },
  {
    path: '/change-email',
    element: <ChangeEmail />, 
  },
  {
    path: '/change-password',
    element: <ChangePassword />, 
  },
  */
  {
    path: '/artists',
    element: <PrivateRoute><ArtistsPage /></PrivateRoute>,
  },
  {
    path: '/artist-tracks-page/:artistId',
    element: <PrivateRoute><ArtistTracksPage /></PrivateRoute>,
  },
  {
    path: '/my-account',
    element: <PrivateRoute><MyAccount /></PrivateRoute>,
  },
  {
    path: '/change-email',
    element: <PrivateRoute><ChangeEmail /></PrivateRoute>,
  },
  {
    path: '/change-password',
    element: <PrivateRoute><ChangePassword /></PrivateRoute>,
  },
  //Lógica de Autenticação aqui
  {
    path: '/login',
    element: <LoginForm />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

/*import React from 'react';
import ReactDOM from 'react-dom/client';

// Packages Import
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages Import
import Home from './pages/Home/Home.jsx';
import Playlist from './pages/Playlist/Playlist.jsx';
import LikedMusics from './pages/LikedMusics/LikedMusics.jsx';


import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not Found  <a href="/">Go To Main Page</a> </div>
  },
  {
    path: '/playlist',
    element: <Playlist/>,
  },
  {
    path: '/liked-musics',
    element: <LikedMusics/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);*/
