import {createContext, ReactNode, useEffect, useState} from 'react';
import {AlbumsContextValue} from '../model/AlbumInterface';
import supabase from '../../lib/subabase';
import {Album} from '../model/Albums';

export const AlbumContext = createContext<AlbumsContextValue | undefined>(
  undefined,
);

interface AlbumProviderProps {
  children: ReactNode;
}

export const AlbumProvider: React.FC<AlbumProviderProps> = ({children}) => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAlbums = async () => {
    try {
      const {data, error} = await supabase
        .from('albums')
        .select('*')
        .order('release_date', {ascending: false});

      if (error) throw error;
      setAlbums(data || null);
      console.log(data + 'alllll albumsss');
    } catch (error) {
      console.error('Error fetching new albums:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAlbums();
  }, []);
  return (
    <AlbumContext.Provider value={{albums, loading, fetchAlbums}}>
      {children}
    </AlbumContext.Provider>
  );
};
