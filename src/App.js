import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

// Objeto pacote 
const pacote = {
  codigo : 0,
  partida : '',
  destino : '',
  preco : '',
  data : ''
}

//useState
const [btnCadastrar, setBtnCadastrar] = useState(true);
const [pacotes, setPacotes] = useState([]);
const [objPacote, setObjPacote] = useState(pacote); 

  // UseEffect
  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido =>setPacotes(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjPacote({...objPacote, [e.target.name]:e.target.value});
  }

  // Cadastrar produto
  const Cadastrar = () => {
    fetch('http://localhost:8080/cadastrar',{
      method:'post',
      body:JSON.stringify(objPacote),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setPacotes([...pacotes, retorno_convertido]);
        alert('Pacote cadastrado com sucesso!');
        limparFormulario();
      }

    })
  }


   // Alterar produto
   const alterar = () => {
    fetch('http://localhost:8080/alterar',{
      method:'put',
      body:JSON.stringify(objPacote),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
       
        // Mensagem
        alert('Pacote alterado com sucesso!');

        // Cópia do vetor de pacotes
   let vetorTemp = [...pacotes];
   
   // Índice
   let indice = vetorTemp.findIndex((p) =>{
       return p.codigo === objPacote.codigo;
   });

   // Alterar  produto do vetorTemp
   vetorTemp[indice] = objPacote;

   // Atualizar o vetor de produtos
   setPacotes(vetorTemp);

        // Limpar o formulário
        limparFormulario();
      }

    })
  }


// Remover produto
const Remover = () => {
  fetch('http://localhost:8080/remover/'+objPacote.codigo,{
    method:'delete',
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }
  })
  .then(retorno => retorno.json())
  .then(retorno_convertido => {
    
   // Mensagem
   alert(retorno_convertido.mensagem);

   // Cópia do vetor de produtos
   let vetorTemp = [...pacotes];
   
   // Índice
   let indice = vetorTemp.findIndex((p) =>{
       return p.codigo === objPacote.codigo;
   });

   // Remover produto do vetorTemp
   vetorTemp.splice(indice, 1);

   // Atualizar o vetor de produtos
   setPacotes(vetorTemp);

   // Limpar formulário
   limparFormulario();

  })
}

  // Limpar formulário
  const limparFormulario = () => {
    setObjPacote(pacote);
    setBtnCadastrar(true);
  }

  // Selecionar produto
  const selecionarPacote = (indice) => {
    setObjPacote(pacotes[indice]);
    setBtnCadastrar(false);
  }

  // Retorno
  return (
    <div>
     <Tabela vetor={pacotes} selecionar={selecionarPacote} />
     <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={Cadastrar} obj={objPacote} cancelar={limparFormulario} remover={Remover} alterar={alterar} />
    </div>
  );
}

export default App;