import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import HeaderPage from './../../template/headerPage/headerPage'
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-classic'
import { FaFile, FaArrowLeft}from 'react-icons/fa'
import { success, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

import "@pnotify/core/dist/BrightTheme.css";
import '@pnotify/confirm/dist/PNotifyConfirm.css'



import api from './../../../services/api'
import env from './../../../enviroment/environment-dev'


import "./updatePost.css"
import { Link } from 'react-router-dom'
import { useState } from 'react';


 

export default function(){

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


  const { id } = useParams(); 

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imgCapa, setImgCapa] = useState();

  

  const [modeUpdate, setModeUpdate] = useState(false);


   async function getDataPost(e){


        
        const resp = await api.get(`post/${id}`).then((ret)=>{

            setTitulo(ret.data.titulo)
            setResumo(ret.data.resumo)
            setDescricao(ret.data.descricao)
            setImgCapa(ret.data.imgCapa)
            console.log(ret.data.descricao)
            CKEditor.data = ret.data.descricao
        })

      

        
  }


  async function saveAndPublish(e){
        e.preventDefault();

        const data = {
          titulo, 
          resumo,
          descricao,
          imgCapa
        }


   
        if(modeUpdate){

        }else {
          api.put(`/post/update/${id}`, data).then((ret)=>{
            if(ret.status === 200){
              success('Gravou com sucesso !!!!')
              setModeUpdate(true);
            }
        
          })
        }
  }

  useEffect(()=>{
      getDataPost();

  }, [])

  return(
    <div className="">

        <HeaderPage pageName="Editar Públicação" icon={()=>{return(<div><Link style={{color: "white"}} to="/"><FaArrowLeft></FaArrowLeft></Link></div>)}} contentHeader={()=>{
          return(<div> <button className="btn" onClick={saveAndPublish}>Salvar e Públicar</button></div>)
          }}>
        </HeaderPage>


     
        <form>

          <div className="bodyPost">
                <div className="formGroup">
                <label>Titulo</label>
                <input className="inputControl" onChange={(e)=>{setTitulo(e.target.value)}}  value={titulo} type="text"/>
              </div>


              <div className="formGroup">
              
                <div className="containerEditor">
                
                  <CKEditor className="editorArtigo"
                                  editor={BalloonEditor}
                          onChange={ ( event,editor ) => {
                              const dataEditor = editor.getData();
                              setDescricao(dataEditor)
                            
                        } }
                        config={ {
                          height: '100vh'
                      } }

                      data={descricao}  
                          
                      />
                </div>
       
           </div>

           
          </div>
          <div className="menuOptionsPost">
            <div className="formGroup">
              <label>Resumo</label>
              <input className="inputControl" type="text" onChange={(e)=>{setResumo(e.target.value)}} value={resumo}/>
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