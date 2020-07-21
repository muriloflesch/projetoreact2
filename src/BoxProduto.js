import React from 'react';
import './App.scss';


function BoxProduto(props) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL',
      });
      
    function renderSelo(obj){
        if(props.conteudo.discount != 0 && props.conteudo.discount != undefined){
            return <div className='seloDesconto'>
                        <p>{-props.conteudo.discount + '%'}</p>
                    </div> 
        }else{
            return null
        }
    }
    function renderDesconto(obj){
        console.log('desconto: ' , props.conteudo.discount)
        if(props.conteudo.discount != 0 && props.conteudo.discount != undefined){
            return<p className='de'>de: <span className='valor-de'>{formatter.format(props.conteudo.value)}</span></p>  
        }else{
            return null
        }
    }

    return (
        <div className="cont-box-produto">

                {renderSelo()}
                
                <div className='cont-image'>
                    
                        <img src={props.conteudo.image} alt='produto'/>
                </div>
                <h3 className='nome-oferta'>{props.conteudo.title}</h3>
                <p className='descricao-oferta'>{props.conteudo.description}</p>
                <div className='cont-valores'>
                    { renderDesconto() }
                    <p className='por'>por: <span className='valor-por'>{formatter.format(props.conteudo.value)}</span></p>
                </div>
                <p className='bt-assinar'>assinar</p>
        </div>
    );
}

export default BoxProduto;
