/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './style.css';
function Home(){
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const fetchMovies = async() =>{
            try {
                const {data} = await axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies`);
                setMovie(data);
            }catch (error) {
                alert("Ocorreu um error ao carregar os dados");
            }
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif" alt="Carregando dados" />
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