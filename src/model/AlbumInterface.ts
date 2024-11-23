import { Album } from "./Albums";


export interface AlbumsContextValue {
  albums: Album[];
  loading: boolean;
  fetchAlbums: () => Promise<void>;
}


