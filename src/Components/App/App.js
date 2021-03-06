import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from '../objects/Header/Header.js';
import Home from "../Home/Home.js"
import Movie from '../Movie/index.js';
import Session from '../Session/index.js';
import Finish from '../Finish/Finish.js';
import './style.css';
// import { matchPath } from 'react-router-dom';

function App() {
    return (
        <>
        <Router>
            <Header visible={false}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Movie/>} />
                <Route path="/session/:id" element={<Session/>}/>
                <Route path="/sucesso" element={<Finish/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default App;