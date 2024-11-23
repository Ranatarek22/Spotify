import React, {useEffect, useState} from 'react';
import {AlbumProvider} from './src/context/AlbumsContext';
import {AuthProvider} from './src/context/AuthContext';
import AppNav from './src/Navigation/AppNav';
import useNotifications from './src/hooks/useNotifications';

const App = () => {
  useNotifications();
  return (
    <AuthProvider>
      <AlbumProvider>
        <AppNav />
      </AlbumProvider>
    </AuthProvider>
  );
};

export default App;
