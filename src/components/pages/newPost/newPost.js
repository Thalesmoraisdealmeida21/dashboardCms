import React from 'react'
import HeaderPage from './../../template/headerPage/headerPage'

import CKEditor from 'ckeditor4-react';
import { FaFile, FaArrowLeft}from 'react-icons/fa'
import { success, defaultModules, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

import "@pnotify/core/dist/BrightTheme.css";
import '@pnotify/confirm/dist/PNotifyConfirm.css'

import env from './../../../enviroment/environment-dev'


import api from './../../../services/api'

import "./newPost.css"
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';



export default function(){

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imgCapa, setImgCapa] = useState();
  const [modeUpdate, setModeUpdate] = useState(false);


  const history = useHistory()


  async function saveAndPublish(e){
        e.preventDefault();

        const data = {
          titulo, 
          resumo,
          descricao,
          imgCapa
        }



    
          api.post('post', data).then((ret)=>{
            if(ret.status === 201){
              success('Gravou com sucesso !!!!')
              history.push(`./update/${ret.data.id}`)
              
            }
        
          }).catch((e)=>{
                error("Você não está autenticado")
          })
        

    
        




  }

  function uploadImage(event){
    const imagemCapa = event;
      
    const formData = new FormData();
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  };
  formData.append('capa', imagemCapa);

        api.post('/upload', formData, config).then((ret)=>{
                setImgCapa(env.api + "/" + ret.data.pathImg)
        })
  } 


  return(
    <div className="">
      <script src="custom-ckeditor.js"></script>
        <script src="node_modules/react/react.production.min.js"></script>
        <script src="node_modules/react-dom/react-dom.production.min.js"></script>
        <script src="node_modules/ckeditor4-react/dist/ckeditor.js"></script>
        <script src="app.js"></script>

        <HeaderPage pageName="Nova Públicação" icon={()=>{return(<div><Link style={{color: "white"}} to="/"><FaArrowLeft></FaArrowLeft></Link></div>)}} contentHeader={()=>{
          return(<div> <button className="btn" onClick={saveAndPublish}>Salvar e Públicar</button></div>)
          }}>
        </HeaderPage>



        <form action="">


          <div className="bodyPost">
             <div className="formGroup">
              <label>Titulo</label>
              <input className="inputControl" onChange={(e)=>{setTitulo(e.target.value)}}  value={titulo} type="text"/>
            </div>

            <div className="formGroup">
              
            <div className="containerEditor">
            
              <CKEditor className="editorArtigo"

                      onChange={ ( event ) => {
                          const dataEditor = event.editor.getData();
                          setDescricao(dataEditor)
                        
                    } }
                    config={ {
                      height: '50vh'
                  } }
                      data={"Digite seu ártigo aqui !!"}
                      
                  />
            </div>
     
         </div>

          </div>
         
       

                    <div className="menuOptionsPost">

                    <div className="formGroup">
                        <label>Resumo</label>
                        <textarea  placeholder="Digite o resumo do seu artigo" className="inputControl" type="text" onChange={(e)=>{setResumo(e.target.value)}} value={resumo}></textarea>
                    </div>

  

                      <div className="formGroup formImage">
                          <label>Imagem Capa</label>
                          <input name="myImage" onChange={(e)=>{uploadImage(e.target.files[0])}} className="inputFile" type="file"/>
                          <img src={imgCapa} />
                      </div>

                    </div>
           

      


         


          </form>
   





      </div>
    
  )
}