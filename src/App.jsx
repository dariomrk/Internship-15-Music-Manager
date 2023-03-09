import React from 'react';
import CardContainer from './components/cardContainer/CardContainer';
import { albums } from './lib/sampleAlbums';

function App() {
  return (
    <CardContainer albums={albums} />
  );
}

export default App;
