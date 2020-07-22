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
  componentDidMount() {
      // checar o storage
      
      if(localStorage.length > 0){
        var dataImage = JSON.parse(localStorage.getItem('objDados'))
        console.log('localStorage:', dataImage)
        dataImage.map(
          oferta => {
              this.updateOfertas(dataImage,false)           
          }
        )

       
          //console.log(JSON.parse(dataImage))
      }else{
        console.log('storage null')
      }
  }
  adminPage = (props) => {
    return (
      <Admin  ofertas={this.updateOfertas}  />
    );
  }
  organizaDados1(a){
    let arrTodasOfertas = []
      console.log('array de entrada1: ', a) 
    
          let conteudo = {
            "title": a[0],
            "value": a[1],
            "discount": a[2],
            "image": "data:image/png;base64," + a[4],
            "description": a[3]
          }
          //console.log('retorno oferta: ', index)
          this.arrTodasOfertas.push(conteudo)          
   
      console.log('array de saida1:', this.arrTodasOfertas)
    return this.arrTodasOfertas
  }
  organizaDados2(a){
    let arrTodasOfertas = []
      console.log('array de entrada2: ', a) 
      a.map(
        (oferta,index )=> {
          let conteudo = {
            "title": oferta[0],
            "value": oferta[1],
            "discount": oferta[2],
            "image": "data:image/png;base64," + oferta[4],
            "description": oferta[3]
          }
          console.log('retorno oferta: ', index)
          arrTodasOfertas.push(conteudo)          
        }
      )
      console.log('array de saida2:', arrTodasOfertas)
    return arrTodasOfertas
  }
  
  updateOfertas(newArr,isAdmin) {
    if(isAdmin){
      this.setState({
        todasOfertas: this.organizaDados2(newArr)
      });
    }else{
      this.setState({
        todasOfertas: this.organizaDados2(newArr)
      });
    }
    
  } 
  render(){
   // console.log('este: ', this.state)
    
    return (
      <div>
        
        <BrowserRouter>
            <Navbar />
            <Header />
            <Route path='/' exact component={VitrinePatrocinados} />
            <Route path='/admin'  render={this.adminPage}  />
            <Route path='/' exact>
                <div className='cont-frase-importante'> 
                  <div className='wrapper'>
                      <h2 className='frase-importante'>  Sem <span>livros, </span>dificilmente se aprende a gostar de ler</h2>
                  </div>
                   
                </div>
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

          <div className='rodape'>
                  <div className='wrapper'></div>
                </div>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
