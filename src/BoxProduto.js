import React from 'react';
import './App.scss';


function BoxProduto(props) {
    function renderDesconto(obj){
        if(props.conteudo.discount !== 0 ){
            return<p className='de'>de: <span className='valor-de'>{props.conteudo.value}</span></p>  
        }else{
            return null
        }
    }

    return (
        <div className="cont-box-produto">
                <div className='seloDesconto'>
                    <p>{props.conteudo.discount}</p>
                </div>
                <div className='cont-image'>
                        <img src={props.conteudo.image} alt='produto'/>
                </div>
                <h3 className='nome-oferta'>{props.conteudo.title}</h3>
                <p className='descricao-oferta'>{props.conteudo.description}</p>
                <div className='cont-valores'>
                    { renderDesconto() }
                    <p className='por'>por: <span className='valor-por'>{props.conteudo.value}</span></p>
                </div>
                <p className='bt-assinar'>assinar</p>
        </div>
    );
}

export default BoxProduto;
