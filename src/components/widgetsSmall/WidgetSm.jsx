import "./widgetsm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import img from "../../images/user.jpg"
const WidgetSm = () => {
    return ( 
        <div className="widgetsm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={img} alt="" className="widgetSmImg" />
                    <div className="widgetUser">
                        <span className="widgetSmUsername">Mouad Majdoubi</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                       
                    </div>
                    <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/>
                    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={img} alt="" className="widgetSmImg" />
                    <div className="widgetUser">
                        <span className="widgetSmUsername">Mouad Majdoubi</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                       
                    </div>
                    <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/>
                    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={img} alt="" className="widgetSmImg" />
                    <div className="widgetUser">
                        <span className="widgetSmUsername">Mouad Majdoubi</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                       
                    </div>
                    <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/>
                    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={img} alt="" className="widgetSmImg" />
                    <div className="widgetUser">
                        <span className="widgetSmUsername">Mouad Majdoubi</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                       
                    </div>
                    <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/>
                    Display
                    </button>
                </li>
            </ul>
        </div>
     );
}
 
export default WidgetSm;