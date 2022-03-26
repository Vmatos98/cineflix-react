
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';


let data= {};
let seats = [];
function Finish(){
    const navigate = useNavigate();
    return seats.length>0? (
        <>
        <Title>
            <h1>Pedido feito<br></br>com sucesso!</h1>
        </Title>
        <Content>
            <h1>Filme e sessão</h1>
                <p>{data.title}</p>
                <p>{data.date}</p>
            <h1>Ingressos</h1>
            <ul>
                {seats.map(item=> <><li>Assento {item}</li><br /></>)}
            </ul>
            <h1>Comprador</h1>
            <p>Nome: {data.name}</p>
            <p>CPF: {data.cpf}</p>
            <Link to= '/'>
                <button>Voltar pra Home</button>
            </Link>
        </Content>
        </>
        )
        :
        (
            <Title>
                <h1>Nada para ver aqui</h1>
                {navigate("/")}
            </Title>
        )

}
export default Finish;


export function GetData(title, date, seat, name, cpf){
    
    data.title = title;
    data.date = date;
    seats = seat;
    data.name = name;
    data.cpf = cpf;
}


const Title= styled.div `
    position: absolute;
    width: 100vw;
    height: 110px;
    left: 0%;
    top: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;

`;
const Content= styled.div `
    position: absolute;
    width: 90vw;
    top: calc(67px + 110px);
    left: 10%;
    font-family: 'Roboto';
    font-style: normal;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    h1{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: var(--black);
        margin-top: 30px;
    }
    p{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: var(--black);
    }
    button{
        position: relative;
        width: 50%;
        left: 23%;
        max-width: 225px;
        height: 42px;
        margin-top: 70px;
        background: #E8833A;
        border-radius: 3px;
    }
`;