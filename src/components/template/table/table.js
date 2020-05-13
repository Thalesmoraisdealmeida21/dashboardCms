import React, {Props} from 'react'


import "./table.css"



export default function(props){

  
  const HeaderTable = props.headerTable
  const data = props.data

  console.log(data)
 
  return(
    <div className="tableContainer">
     
    <table className="table">
          <thead>
              <tr>
                {HeaderTable.map(headItem=>(
                  <th>{headItem}</th>
                ))}
            
             
                 
              </tr> 
          </thead>

          <tbody>


                    {data()}
                  
         

          </tbody>
      </table>
    </div>
  )



}