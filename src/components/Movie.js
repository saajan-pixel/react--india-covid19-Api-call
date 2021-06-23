import React from "react";

const Image_api = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title,poster_path,overview,vote_average}) =>{

    const VoteColor = (vote) =>{
       if(vote>=8){
           return "green";
       }else if(vote>=6){
           return "orange";
       }else{
           return "red";
       }
    }

    return (
        <>
        <div className="movie">
            <img src={Image_api + poster_path} alt={title} />
            <div class="movie-info">
                <h3>{title}</h3>
                <span className={`vote ${VoteColor(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-overview">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
            
        </div>
        </>
    )

}
export default Movie;