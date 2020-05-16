
import React from 'react'


export default function(props){

  const pageName = props.pageName || ""
  const contentHeader = props.contentHeader
  const icon = props.icon 
  return(
        <div className="headerPage">
                
                <div className="titlePage">
                      {icon()}
                      <span>{pageName}</span>

                </div>  

                    

                {contentHeader() || ""}
            </div>
  )
}

