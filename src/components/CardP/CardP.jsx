import React from "react";
import './CardP.css';

const CardP = ({ vetor, selecionar }) => {
    return (
        <div className="CardCompleto">
            {
                vetor.map((obj, indice) => (
                    <div className="cardp">
                        <div className="titulo">
                            <h4 key={indice}>Para: {obj.destino}</h4>
                            <h2>R$: {obj.preco}</h2>
                        </div><div className="descricao">
                            <h5>Do: {obj.partida}</h5>
                            <h5>Data: {obj.data}</h5>
                        </div><button onClick={() => { selecionar(indice) }} className="btn btn-success">Selecionar</button>
                    </div>
                ))
            }
        </div>
    )
}
export default CardP;
