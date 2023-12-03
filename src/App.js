import { useState } from 'react';
import imagenRickMorty from './img/rick-morty.png';
import Characters from './components/Characters';
import './App.css';

function App() {
  const [characters, setCharacters] = useState(null)

  const reqApi = async() => {
    let counter = 1;
    let data = [];

    for(counter; counter <= 45; counter++){
      const link = 'https://rickandmortyapi.com/api/character/' + counter.toString();
      const api = await fetch(link);
      const caracterApi = await api.json();
      data.push(caracterApi);
    }

    setCharacters(data);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imagenRickMorty} alt='Rick & Morty' className='img-home'></img>
            <button onClick={reqApi} className='btn-search'>Search Characters</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
