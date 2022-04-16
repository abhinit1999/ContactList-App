import React from 'react'
// import {Icon} from 'react-icons-kit'
// import {trash} from 'react-icons-kit/feather/trash'
import "./style.css";
const DisplayBooks = ({records,deleteRecords,editRecords}) => {
    
    return records.map(record=>(
        
        <tr key={record.mobile} className='trData'>
            <td>{record.mobile}</td>
            <td>{record.name}</td>
            <td>{record.email}</td>
            <td className='delete-btn' >
                
                <i className='fa fa-edit edit' onClick={()=>editRecords(record.mobile)}></i> /{"   "}

                <i className='fa fa-trash del' onClick={()=>deleteRecords(record.mobile)}></i>
                {/* <Icon icon={trash}/> */}
            </td> 
                      
        </tr>            
    
))
}

export default DisplayBooks;