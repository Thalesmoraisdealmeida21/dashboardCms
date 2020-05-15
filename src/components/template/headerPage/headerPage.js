
import React from 'react'


export default function(props){

  const pageName = props.pageName
  const contentHeader = props.contentHeader


  return(
        <div className="headerPage">
                
                <div className="titlePage">
                      <span>{pageName}</span>

                </div>  



                {contentHeader()}
            </div>
  )
}

