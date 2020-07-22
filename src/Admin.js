import React from 'react';
import './App.scss';

class Admin extends React.Component {

    

    constructor(props){
        super(props);
       
        //mthis = this
        this.arrCadastroGeral = []
    }

    onSubmitCadastrar(e) {
        e.preventDefault();
        //const data = this.formToJSON(e.target.children[0].children);
        var myImg = document.createElement("img");
        //console.dir(e.target.children[0])
       // console.log('escoppo: ', this.props)
       let todosCadastros = []
        let arrCadastroUnico = []
        this.arrCadastroGeral.push(arrCadastroUnico)

        const listArray = Array.from(e.target.children[0].children);
        listArray.push(Array.from(e.target.children[1].children)[0])
        listArray.forEach(myFunction.bind(this));

        console.log('listArray:', listArray)
        function myFunction(item, index) {
 
            if(index < 3 || index > 5){
                arrCadastroUnico.push(item.value)
                //todosCadastros = JSON.parse(localStorage.getItem('objDados'));
                if(todosCadastros != null){
                    //todosCadastros.push(arrCadastroUnico)
                }else{
                   // todosCadastros = arrCadastroUnico
                }
               // console.log('todosCadastros: ', todosCadastros)
                
             //   localStorage.setItem("objDados", JSON.stringify(arrCadastroUnico) );
            }else if(index == 3){
            // se for o input file

                //console.log('item file: ', item.files[0] == undefined)
                if(item.files[0] == undefined){
                    document.querySelector('.imageValidate').classList.remove("hide");
                    return
                }else{
                    document.querySelector('.imageValidate').classList.add("hide");
                }
                const reader = new FileReader();
                reader.readAsDataURL(item.files[0]);


                const _this = this
                reader.onload = function (e2) {
                    myImg.src =  e2.target.result;
                    myImg.onload = function(){
                        let dados = _this.getBase64Image(myImg)
                        arrCadastroUnico.push(dados)
                        todosCadastros = JSON.parse(localStorage.getItem('objDados'));
                        
                        let newArr3 = []
                        console.log('todosCadastros: ', todosCadastros)
                        if(todosCadastros != null){
                           
                            todosCadastros.push(arrCadastroUnico)
                       }else{
                           // todosCadastros.push(arrCadastroUnico) 
                            newArr3.push(arrCadastroUnico)
                            todosCadastros = newArr3
                        }

                        //todosCadastros.push(arrCadastroUnico)
                        localStorage.setItem("objDados", JSON.stringify(todosCadastros) );

                        var dataImage = JSON.parse(localStorage.getItem('objDados'))
                        console.log('saida admin:', dataImage)
                       
                         _this.props.ofertas(dataImage,true)          
                       
                        
                         document.querySelector('.cont-over').classList.remove("hide");
                    }
                    //console.log('resultadoL ', _this.getBase64Image(myImg))
                    

                  
                }

                
               // console.log('index: ', index)
                //console.log('dentro do each: ', item.value) 
            }
        }
        //console.log('Formulario ubmetido!:', data);
 //console.log('Formulario ubmetido2!:', data);
        //console.log('Formulario ubmetido3!:', e.elements);
    }
    getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
    
        var dataURL = canvas.toDataURL("image/png");
    
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
    closeMsg(e){
        document.querySelector('.cont-over').classList.add("hide");
        document.querySelector('.cadastro-descricao').value = '';
        document.querySelector('.cadastro-titulo').value = '';
        document.querySelector('.cadastro-valor').value = '';
        document.querySelector('.cadastro-desconto').value = '';
        

    }   
    render() {
       // console.log('entrando no render')
       // console.log('dentro do admin:', this.props)
        return (
            <div className='cont-form'>
                <div className='wrapper'>
                    <h2> Cadastrar nova oferta </h2>
                    <form className='form-cadastro' id='form-cadastro' onSubmit={this.onSubmitCadastrar.bind(this)}>
                        <div>
                            <input  className='cadastro-titulo' type="text" name="cadastro-titulo"  placeholder='título' />
                            <input className='cadastro-valor' type="number" id="valor" name="valor" placeholder='valor'/>
                            <input className='cadastro-desconto' type="number" max='100' id="desconto" name="desconto" placeholder='desconto'/>
                            <input className='cadastro-upload' type="file" name="fileToUpload" id="cadastro-upload" placeholder='imagem' id='fileToUpload'/>
                            <label name='cadastro-upload-label' className='cadastro-upload-label' htmlFor="fileToUpload">escolha sua imagem</label>
                            <p className='imageValidate hide'>Cadastre uma imagem!</p>
                            
                        </div>
                        <div>
                            <textarea className='cadastro-descricao' rows="10" cols="30" placeholder='descricao'></textarea>
                        
                        
                            <input className='cadastro-submit'  type="submit"  name="submit" value='cadastrar'/>
                        </div>
                        
                    </form>
                    <div className='cont-over hide'>
                        <p className='mensagem'> Cadastro realizado <br/> com sucesso! </p>
                        <p className='bt-mensagem'  onClick={this.closeMsg}> Cadastrar outra oferta</p>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Admin;