import React from 'react';
import './App.scss';
import Header from './Header'
import Navbar from './Navbar'
import BoxProduto from './BoxProduto'
import Admin from './Admin'
import VitrinePatrocinados from './VitrinePatrocinados';
import {BrowserRouter, Route} from 'react-router-dom'


class App extends React.Component {
  constructor(props){
    super(props);

    this.updateOfertas = this.updateOfertas.bind(this);
   this.arrTodasOfertas = []
    this.state = {todasOfertas: []};
  }
  adminPage = (props) => {
    return (
      <Admin  ofertas={this.updateOfertas}  />
    );
  }
  organizaDados(a){
    let conteudo = {
      "title": a[0],
      "value": a[1],
      "discount": a[2],
      "image": a[4],
      "description": a[3]
    }
    this.arrTodasOfertas.push(conteudo)
    return this.arrTodasOfertas
  }
  updateOfertas(newArr) {
    this.setState({
      todasOfertas: this.organizaDados(newArr)
    });
  } 
  render(){
   // console.log('este: ', this.state)
    function verificaOfertasCadastradas(){
      
        
    }
    return (
      <div>
        
        <BrowserRouter>
            <Navbar />
            <Header />
            <Route path='/' exact component={VitrinePatrocinados} />
            <Route path='/admin'  render={this.adminPage}  />
            <Route path='/' exact>
                <div className='cont-ofertas-cadastradas'>
                    <div className='wrapper'>
                    {
                      
                      this.state.todasOfertas.map(
                        oferta => {
                            return    <BoxProduto conteudo={oferta}/>          
                        }
                      )
                    }
                    </div>
                </div>
          </Route>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
