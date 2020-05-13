import React, {useEffect, useState} from 'react'
import Table from './../template/table/table'
import api from './../../services/api'


import './home.css'


export default function(){

  const [posts, setPosts] = useState([]);




useEffect(()=>{
  
    api.get("posts/1").then((res)=>{
    
       setPosts(res.data);
    })
}, [])


  return(
    <div className="">

      <div className="headerPage">
            

            <div className="form">
              <input type="text"/>
              <button>Nova Públicação</button>
            </div>

        


      </div>


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