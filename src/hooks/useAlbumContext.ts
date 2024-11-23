import {useContext} from 'react';
import {AlbumsContextValue} from '../model/AlbumInterface';
import {AlbumContext} from '../context/AlbumsContext';

export const useAlbumContext = (): AlbumsContextValue => {
  const context = useContext(AlbumContext);
  if (!context) {
    throw new Error('useAlbumContext must be used within an AlbumProvider');
  }
  return context;
};
