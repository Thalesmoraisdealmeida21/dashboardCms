import React from 'react'
import HeaderPage from './../../template/headerPage/headerPage'
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-inline'
import { FaFile, FaArrowLeft}from 'react-icons/fa'
import { success, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

import "@pnotify/core/dist/BrightTheme.css";
import '@pnotify/confirm/dist/PNotifyConfirm.css'



import api from './../../../services/api'


import "./newPost.css"
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function(){

 

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [descricao, setDescricao] = useState('');


  async function saveAndPublish(e){
        e.preventDefault();

        const data = {
          titulo, 
          resumo,
          descricao
        }



        api.post('post', data).then((ret)=>{
          console.log(ret);
        })

        success('Gravou com sucesso !!!!')



  }

  return(
    <div className="">

        <HeaderPage pageName="Nova Públicação" icon={()=>{return(<div><Link style={{color: "white"}} to="/"><FaArrowLeft></FaArrowLeft></Link></div>)}} contentHeader={()=>{
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
              <h1 htmlFor="" style={{marginLeft:"auto", marginRight: "auto"}}>ÁRTIGO</h1>
              <CKEditor className="editorArtigo"
                        editor={ BalloonEditor }  
                        onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          setDescricao(data);
                      } }
                        data={"Digite seu ártigo aqui !!"}
                        
                    />
            </div>



          </form>
        </div>





      </div>
    
  )
}