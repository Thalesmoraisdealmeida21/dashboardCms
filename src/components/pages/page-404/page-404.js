import React from 'react'


import "./page-404.css"
import Loader from './../../../assets/loader.svg'

export default function(){

    return(
      <div className="">
        <div style={{ margin: "auto" }} className="loader" style={{textAlign: "center", marginTop:"20vh"}}>
                <img src={Loader} alt=""/>
                <h3>Carregando</h3>
            </div>
            
      </div>
    )

}