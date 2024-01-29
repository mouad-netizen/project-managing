import "./product.css"
import  {Link} from 'react-router-dom'
import Chart from "../../components/chart/Chart"
import {productdata} from "../../dummyData"
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
const Product = () => {
    return ( 
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link>
                    <button className="productAddButton">Create</button>
                </Link>

            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productdata}  datakey={"Sales"} dataname={"Sales"}/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005" alt="" className="productInfoImg" />
                        <div className="productName">Apple Airpds</div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id :</span>
                            <span className="productInfovalue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales :</span>
                            <span className="productInfovalue">1113</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfovalue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfovalue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form  className="productForm">
                    <div className="productFormLeft">
                        <label >Product Name</label>
                        <input type="text" placeholder="Apple Airpods" />
                        <label >In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label >Active</label>
                        <select name="active" id="Active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005" className="imgProductUpload" alt="" />
                            <label for="file">
                                <PublishOutlinedIcon className="publishIcon"/>
                            </label>
                            <input type="file"  id="file" style={{display:"none"}}/>

                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Product;