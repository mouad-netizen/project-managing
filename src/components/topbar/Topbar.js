import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

const Topbar = () => {
    return ( 
        <div className="topbar">
            <div className="topbarWrapper">
                <span className="logo">lamaadmin</span>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <span className="topIconBadge">2</span>
                    <NotificationsIcon/>
                    </div>
                    <div className="topbarIconContainer">
            
                    <SettingsIcon/>
                    </div>
                    <div className="topbarIconContainer">
                        <span className="topIconBadge">2</span>
                    <LanguageIcon/>
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
     );
}
 
export default Topbar;