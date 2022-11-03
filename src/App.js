import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading';
import Search from './components/Search';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')
  
  const getMovie = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=fa3f61f4`

    const response = await fetch(url);
    const responseJson = await response.json;

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  }

    useEffect( () =>{
      getMovie(searchValue);
    }, [searchValue])
  

	 
	return (
		<div className='container-fluid'>
			<div className='row'>
        <MovieListHeading heading='Movies'/>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
      <div className='row'>
        <MovieList movies = {movies} />
      </div>
		</div>
	);
};

export default App;
