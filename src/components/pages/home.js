import React, {useEffect, useState} from 'react'
import Table from './../template/table/table'
import HeaderPage from './../template/headerPage/headerPage'
import {FaRegStickyNote} from 'react-icons/fa'
import api from './../../services/api'


import {useHistory} from 'react-router-dom'


import './home.css'


export default function(){

  const [posts, setPosts] = useState([]);
  const history = useHistory();

  function toNewPost(){
    history.push("/post/new")
  }


useEffect(()=>{
  
    api.get("posts").then((res)=>{
    
       setPosts(res.data);
    })
}, [])
/**
 * 
 * 
 *   <div className="headerPage">
            
            <div className="titlePage">
              <FaRegStickyNote enableBackground={false}></FaRegStickyNote>
              <span>Públicações</span>
            </div>

            <div className="form">
              <input type="text"/>
              <button onClick={toNewPost}>Nova Públicação</button>
            </div>

        


      </div>

 */

  return(
    <div className="">
          <HeaderPage pageName={'Públicações'} icon={()=>{ return(<FaRegStickyNote enableBackground={false}></FaRegStickyNote>)}}contentHeader={()=>{
            return(
              <div className="form">
              <input type="text"/>
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
                      <button className="btn-custom">Ver Públicação</button>
                      <button className="btn-custom">Editar</button>
                  </td>
                </tr>
                ))
            )
          }}></Table>

        </div>
    </div>
  )
} 