import React from 'react';
import './App.scss';
import BoxProduto from './BoxProduto';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import api from './Api'




class VitrinePatrocinados extends React.Component {

    state = {
        ofertas: []
    }

    constructor(props){
        super(props);
        // install Swiper components
        SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

       
       // this.referencia = React.createRef();
      // console.log('constructor: ', this)
       // document.querySelector .appendChild(oldParent.childNodes[0]);
    }

    async componentDidMount() {
        const response = await api.get('');
        //console.log('retorno da api: ', response.data)
        this.setState({ofertas: response.data})
        //console.log('componentDidMount: ', document.querySelector('.cont-patrocinados'))
        
    }

    render(){

        const {ofertas} =  this.state
        const params = {     
            slidesPerView: 3,
            pagination: {
              
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30
        }
      
        return (      
            <div className='cont-patrocinados' >
                <div className='wrapper'>
                      <Swiper {...params}>
                            
                            {
                                ofertas.map(
                                    oferta => {
                                        return  <SwiperSlide key={oferta.id} >
                                                        <BoxProduto conteudo={oferta}/>
                                                </SwiperSlide>
                                    }
                                )
                            }
                             
                              
                      </Swiper>
                      <div className="swiper-button-prev"></div>
                      <div className="swiper-button-next"></div>        
                </div>

               
            </div>
        );
    }
  
}

export default VitrinePatrocinados;
