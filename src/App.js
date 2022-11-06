import React, { useEffect, useState } from 'react';
import StarRating from './components/StarRating';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import '../node_modules/bootstrap/dist/css/bootstrap.css'



const App = () =>{
  //Updating the state
  const [movies,setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  //Using movie api to get movies 
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=fa3f61f4`;

    const response = await fetch(url);
    const responseJson = await response.json()

    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
  };
  useEffect(() =>{
    getMovieRequest();
  })
  return(
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieList heading='Movies' />
        <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} />
      </div>
      <div className='row'>
        <MovieList key={movies.imdbID} movies={movies} />
      </div>
    </div>
  )
}
export default App;
