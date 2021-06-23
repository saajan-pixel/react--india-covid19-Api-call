import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const Fetch_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity_desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const Search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
  const [movie, setMovie] = useState([]);
  const[searchitem,setSearchItem]=useState("");

  useEffect(() => {
    fetch(Fetch_api)
      .then((response) => response.json())
      .then((movies) => {
        console.log(movies);
        setMovie(movies.results);
      });
  }, []);
  

  const submit = (event) =>{
    event.preventDefault();
    if(searchitem){
      fetch(Search_api + searchitem)
      .then((response) => response.json())
      .then((movies) => {
        console.log(movies);
        setMovie(movies.results);
      });
  
        setSearchItem("")

    }

  }

  const onSearch = (event) =>{
    setSearchItem(event.target.value)
  }

  return (
    <>
      <form onSubmit={submit}>
        <header class="search">
          <input type="search" value={searchitem} onChange={onSearch} placeholder="search"></input>
        </header>
      </form>

      <div className="movie-container">
        {movie.map((movie) => {
          return <Movie key={movie.id} {...movie}></Movie>;
        })}
      </div>
    </>
  );
};

export default App;
