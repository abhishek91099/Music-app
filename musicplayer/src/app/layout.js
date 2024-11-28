import { useContext } from 'react';
import { PlaylistProvider } from './Context/playerlistcontext';
import './globals.css'
import {MusicbarProvider} from './Context/musicbarcontext';
export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <body>
      <MusicbarProvider>
      <PlaylistProvider>
        {children}
      </PlaylistProvider>
      </MusicbarProvider>
      </body>
     
    </html>

  );
}
