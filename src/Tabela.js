function Tabela({vetor, selecionar}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>partida</th>
                    <th>destino</th>
                    <th>preco</th>
                    <th>data</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
               {
                vetor.map((obj, indice) => (
                    <tr key={indice}>
                    <td>{indice+1}</td>
                    <td>{obj.partida}</td>
                    <td>{obj.destino}</td>
                    <td>{obj.preco}</td>
                    <td>{obj.data}</td>
                    <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
                </tr>
                ))
               }
            </tbody>
        </table>
    )
}

export default Tabela;