import { useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";

import {GetData} from '../Finish/Finish.js';

export function SendData(props){
    const {data, title, date} = props;
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    // const [dataNumber, setDataNumber] = useState([]);
    let dataNumber = [];
    let dataId =[];
    const navigate = useNavigate();
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
    
    
    function clear(){
        setName("");
        setCpf("");
    }

    function validate(){
        const regex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
        const cpfText = regex.test(cpf);
        if(!cpfText){
            alert("CPF inválido: '.' e '-' são opcionais");
            return false;
        }
        return true;
    }
    function send_data(e){
        e.preventDefault();
        GetData(title, date, dataNumber, name, cpf);
        Object.keys(data).map(item=>data[item].value?dataNumber.push(data[item].value):null);
        Object.keys(data).map(item=>data[item].id?dataId.push(data[item].id):null);

        if(validate()){
            const promise = axios.post(URL, {
                ids: dataId,
                name: name,
                cpf: cpf
            })
            promise.then(response => {
                navigate("/sucesso"); 
            });
            promise.catch(err => alert(err));
            
        
        console.log(name, cpf);
        clear();
        }
    }
    return(
        <Form>
        <form onSubmit={send_data}>
            <label For="name">Nome do comprador:</label><br/>
            <input type="text" id="name" placeholder="Digite seu nome... " value={name} onChange={e => setName(e.target.value)}/><br/>
            <label For="cpf">CPF do comprador:</label><br/>
            <input type="text" id="cpf" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)}/><br/>
            <button type="submit" >Reservar assento(s)</button>
        </form>
        </Form>
    )
}

const Form = styled.div`
    position: relative;
    bottom:0;
    width: 100%;
    margin-top: 30px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: var(--black);

    input{
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 3px;
    }
    button{
        width: 80%;
        height: 42px;
        background: var(--assets-color);
        border-radius: 3px;
        margin-left: 10%;
        margin-top: 22px;
        margin-bottom: 10px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }    
`;