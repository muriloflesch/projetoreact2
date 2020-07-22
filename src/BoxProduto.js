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
            
            return <div className='cont-valores'>
                            <p className='de'>de: <span className='valor-de'>{formatter.format(props.conteudo.value)}</span></p>  
                        <p className='por'>por: <span className='valor-por'>{formatter.format(props.conteudo.value -(props.conteudo.value * props.conteudo.discount)/100)}</span></p>
                    </div>
        }else{
            
            return  <div className='cont-valores'>
                <p className='por'>por: <span className='valor-por'>{formatter.format(props.conteudo.value)}</span></p>
                </div>
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
                { renderDesconto() }
                
                   
                    
               
                <p className='bt-assinar'>assinar</p>
        </div>
    );
}

export default BoxProduto;
