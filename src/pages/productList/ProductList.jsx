import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import img from "../../images/user.jpg"
import DeleteIcon from '@mui/icons-material/Delete';
import { productRows } from '../../dummyData';
import {Link} from 'react-router-dom'
import { useState } from "react";

const ProductList = () => {

    const [data,setData]= useState(productRows);

    const handleDelete =(id)=>{
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 170 },
        { field: 'product', headerName: 'Product', width: 230,renderCell:(params)=>{
          return(
              <div className="userListUser">
                  <img  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005" alt="" className="userImg"/>
                  {params.row.name} 
              </div>
          )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 160,
          renderCell : (params)=>{
             return(
              <>
              <Link to={"/product/"+params.row.id}>
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
        <div className="productList">
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
 
export default ProductList;