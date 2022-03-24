/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

import {Footer} from '../objects/Footer/index.js';

import "./style.css"

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const getData = async() =>{
            const {data} = await axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);
            setMovie(data);
        }
        getData();
    }, []);
    console.log("sessão", movie.posterURL);
    return movie.days?(
        <>
            <main>
                
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
    <img src="https://i.pinimg.com/originals/2b/02/15/2b02159fee58d573c079ad5212d56b63.gif" alt="Carregando dados" />
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

