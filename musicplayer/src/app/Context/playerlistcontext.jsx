
'use client'
import { createContext, useEffect,useState } from "react";
export const PlaylistContext = createContext();
export const PlaylistProvider = ({ children }) => {
  const [playlistData, setPlaylistData] = useState({
    artists: [],
    song: [],
    album: [],
  });
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    Promise.all([
      fetch("http://127.0.0.1:8000/api/song").then((res) => res.json()),
      fetch("http://127.0.0.1:8000/api/artist").then((res) => res.json()),
      fetch("http://127.0.0.1:8000/api/album").then((res) => res.json()),
    ])
      .then(([song, artists, album]) => {
        // console.log("API response:", { song, artists, album });
        setPlaylistData({ song, artists, album });
        setLoading(false); // Data loaded, stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  return (
    <PlaylistContext.Provider value={{ playlistData, loading }}>
      {children}
    </PlaylistContext.Provider>
  );
};
