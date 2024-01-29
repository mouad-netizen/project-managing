import "./user.css"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import img from '../../images/user.jpg'
import { Link } from "react-router-dom";
const User = () => {
    return ( 
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContatiner">
                <div className="userShow">
                    <div className="userShowTop">
                    
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" className="userShowImg" />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Mouad Majdoubi</span>
                                <span className="userShowUserTitle">Software Enginner</span>
                             </div>
                    
                    </div>
                 
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentityOutlinedIcon className="userShowIcon"/>
                        <span className="userShowIconTitle">mouadmaj97</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarMonthOutlinedIcon className="userShowIcon"/>
                        <span className="userShowIconTitle">19/06/2001</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
        
                        <AddIcCallOutlinedIcon className="userShowIcon"/>
                        <span className="userShowIconTitle">+212 655223561</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutlinedIcon className="userShowIcon"/>
                        <span className="userShowIconTitle">mouadmajdoubi2018@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationOnOutlinedIcon className="userShowIcon"/>
                        <span className="userShowIconTitle">New York | USA </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" placeholder="mouadmaj97" className="userUpdateInpute"/>
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" placeholder="Mouad Majdoubi"  className="userUpdateInpute" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" placeholder="mouadmajdoubi2018@gmail.com"  className="userUpdateInpute"/>
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="text" placeholder="+212 655223561"  className="userUpdateInpute"/>
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type="text" placeholder="New York | USA"  className="userUpdateInpute" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" className="userUpdateImg" />
                            <label htmlFor="file" className="userUpdateIcon"><PublishOutlinedIcon /></label>
                            <input type="file"  id="file" style={{display : "none"}}/>
                                
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default User;