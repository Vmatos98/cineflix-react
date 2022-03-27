/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import Header from '../objects/Header/Header.js';
import {Footer} from '../objects/Footer/index.js';

import "./style.css"

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const getData = async() =>{
            try {
                const {data} = await axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);
                setMovie(data);
            }catch (error) {
                alert("Ocorreu um error ao carregar os dados");
            }
        }
        getData();
    }, []);
    console.log("sessão", movie.posterURL);
    return movie.days?(
        <>  

            <main>
                <Header visible={true}/>
                <section className="sessions">
                    <h1 className="title">Selecione o horário</h1>
                    {movie.days.map(item=>
                        <Session date= {item}
                        time={item.showtimes}/>
                    ) }
                </section>
            </main>
            <Footer poster={movie.posterURL} title={movie.title} />
        </>
    ):(<div className="loading">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif" alt="Carregando dados" />
</div>)
}


function Session(props){
    const {date, time} = props
    const day = `${date.weekday} - ${date.date}`
    return(
        <div className="session">
            <h1 className="date">{day}</h1>
            <div className="time">
                {time.map(item=>
                    <AvailableDates data={item} />
                )}
            </div>
        </div>
    )
}

function AvailableDates(props){
    const {data} = props;
    const link = `/session/${data.id}`
    return(
        <Link to= {link}>
            <button>{data.name}</button>
        </Link>
    )
}

export default Movie;

