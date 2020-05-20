import React, {useEffect, useState} from 'react'
import Table from './../template/table/table'
import HeaderPage from './../template/headerPage/headerPage'
import {FaRegStickyNote, FaSearch} from 'react-icons/fa'
import api from './../../services/api'

import { success, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

import "@pnotify/core/dist/BrightTheme.css";
import '@pnotify/confirm/dist/PNotifyConfirm.css'


import {useHistory} from 'react-router-dom'


import './home.css'
import { MdCreate, MdDelete, MdAddAlert, MdReport } from 'react-icons/md'


export default function(){

  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const [idPostDelete, setIdPostDelete] = useState();
  const [searchField, setSearchField ] = useState(''); 

  function toNewPost(){
    history.push("/post/new")
  }

  function showModal(idPost){
        const el = document.getElementById('#modal');
        el.style.visibility = "visible"

        document.getElementById('btnYes').focus();

        setIdPostDelete(idPost)
  }



  function deletePost(){
      api.delete(`post/${idPostDelete}`).then((res)=>{
        success('Deletado com sucesso')
        cancel();
        getPosts();
      })
  }


  function cancel(){
    const el = document.getElementById('#modal');
    el.style.visibility = "hidden"
  }

  function getPosts(){
    api.get("posts").then((res)=>{
    
      setPosts(res.data);
   })
  }


  function goToPost(id){
      history.push(`/post/update/${id}`)
  }


  function search(text){
    setSearchField(text)

    api.get(`/post/search/title/${searchField}`).then((ret)=>{
      setPosts(ret.data)
    })
    
  }

useEffect(()=>{
    getPosts();
   
}, [])

  return(








    <div className="">


      <div id="#modal" className="modal">
        aasdsa
        <div className="modalContent">
         <MdReport className="icon-modal"size={40} color={"red"}></MdReport>
         <span>Tem certeza que deseja Excluir ? o registro não poderá ser recuperado.</span>

          <div className="buttons-modal">
            <button onClick={deletePost} id={'btnYes'} className="btn-yes">Sim</button>
            <button  onClick={cancel} className="btn-not">Não</button>
          </div>

        </div>

       
      </div>
 
          <HeaderPage pageName={'Públicações'} icon={()=>{ return(<FaRegStickyNote enableBackground={false}></FaRegStickyNote>)}}contentHeader={()=>{
            return(
              <div className="form">
              <input  onChange={(evt)=>{search(evt.target.value)}} type="text"/>
              <button onClick={toNewPost}>Nova Públicação</button>
            </div>

            )
          }}></HeaderPage>
    

        <div className="card">
          <Table headerTable={['ID','Titulo', 'Opções']} data={()=>{
            return (
              posts.map(item=> (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.titulo}</td>
              
                  <td>
                     
                      <button onClick={()=>{goToPost(item.id)}} className="btn-table-icon">
                        <MdCreate size={20}></MdCreate>
                      </button>
                      <button onClick={()=>{showModal(item.id)}} id="#delete" className="btn-table-icon">
                        <MdDelete size={20}></MdDelete>
                      </button>
                  </td>
                </tr>
                ))
            )
          }}></Table>

        </div>
    </div>
  )
} 