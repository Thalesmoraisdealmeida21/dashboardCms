import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import HeaderPage from './../../template/headerPage/headerPage'
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-inline'
import { FaFile, FaArrowLeft}from 'react-icons/fa'
import { success, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

import "@pnotify/core/dist/BrightTheme.css";
import '@pnotify/confirm/dist/PNotifyConfirm.css'



import api from './../../../services/api'


import "./updatePost.css"
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function(){


  const { id } = useParams(); 

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [descricao, setDescricao] = useState('');



  const [modeUpdate, setModeUpdate] = useState(false);


  function getDataPost(){
        
        api.get(`post/${id}`).then((ret)=>{

            setTitulo(ret.data.titulo)
            setResumo(ret.data.resumo)
            setDescricao(ret.data.descricao)
        })
  }
  async function saveAndPublish(e){
        e.preventDefault();

        const data = {
          titulo, 
          resumo,
          descricao
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


        <div className="card">
        <form action="container">


        <div className="formGroup">
          <label>Titulo</label>
          <input className="inputControl" onChange={(e)=>{setTitulo(e.target.value)}}  value={titulo} type="text"/>
        </div>

          <div className="formGroup">
            <label>Resumo</label>
            <input className="inputControl" type="text" onChange={(e)=>{setResumo(e.target.value)}} value={resumo}/>
          </div>


            <div className="formGroup textAreaContainer">
           
              <CKEditor className="editorArtigo"
                        editor={ BalloonEditor }  
                        onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          setDescricao(data);
                      } }
                        data={descricao}
                        
                    />
            </div>



          </form>
        </div>





      </div>
    
  )
}