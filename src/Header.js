import React from 'react';
import './App.scss';

function Header(props) {
   // console.log('fora do header: ', props)
  return (
    
      <header className="App-header">
            <div className='wrapper'>
                <div className='header-top'>
                    <div className='fundo-logo'>
                     {
                        // console.log('dentro do header: ', props)
                     }
                    </div>

                    <div className='texto-header'>
                        <h2></h2>
                    </div>

                    
                </div>
            </div>
           
      </header>
  );
}

export default Header;
