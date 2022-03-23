import './style.css';
function Home(){
    return(
        <section className='catalog'>
            <h1 className='title'>Selecione o filme</h1>
            <div className="movies">
            <div className="movie">
                <div className="poster"></div>
            </div>
            <div className="movie"></div>
            <div className="movie"></div>
            </div>
        </section>
    )
}

// function movie(){
//     return(
//         <div className="movie"></div>
//     )
// }

export default Home;