/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './style.css';
function Home(){
    const [movie, setMovie] = useState({});
    useEffect(() => {//TODO Tratar erros do catch
        const fetchMovies = async() =>{
            const {data} = await axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
            setMovie(data);
        }
        fetchMovies();
    }, []);
    console.log(movie)
    return movie.length > 0?(
        <section className='catalog'>
            <h1 className='title'>Selecione o filme</h1>
            <div className="movies">
                {movie.map(item=><Movie poster={item.posterURL} id = {item.id} alt = {item.title}/>)}
            </div>
        </section>
    ):(
        <div className="loading">
            <img src="https://i.pinimg.com/originals/2b/02/15/2b02159fee58d573c079ad5212d56b63.gif" alt="Carregando dados" />
        </div>
    )
}

function Movie(props){
    const {poster, id, alt} = props;
    const link = `/movie/${id}`
    return(
        <Link to= {link}>
            <div className="movie">
                <img src={poster} alt={alt} className="poster" />       
            </div>
        </Link>
    )
}

export default Home;