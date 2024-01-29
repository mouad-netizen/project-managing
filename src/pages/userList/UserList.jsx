import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import img from "../../images/user.jpg"
import DeleteIcon from '@mui/icons-material/Delete';
import { userRows } from '../../dummyData';
import {Link} from 'react-router-dom'
import { useState } from "react";
const UserList = () => {
    const [data,setData]= useState(userRows);

    const handleDelete =(id)=>{
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
      { field: 'id', headerName: 'ID', width: 170 },
      { field: 'user', headerName: 'Username', width: 230,renderCell:(params)=>{
        return(
            <div className="userListUser">
                <img  src={img} alt="" className="userImg"/>
                {params.row.username} 
            </div>
        )
      } },
      { field: 'email', headerName: 'Email', width: 200 },
      {
        field: 'status',
        headerName: 'Status',
        width: 90,
      },
      {
        field: 'transaction',
        headerName: 'Transaction',
        width: 160,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 160,
        renderCell : (params)=>{
           return(
            <>
            <Link to={"/user/"+params.row.id}>
            <button className="userListEdit">Edit</button>
            </Link>
           
            <DeleteIcon className="userListDelete" onClick = {()=>{
                handleDelete(params.row.id)
            }}/>
            </>
           )
        }
      },

    ];
    

    

    return ( 
        <div className="userList">

      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    
     );
}
 
export default UserList;