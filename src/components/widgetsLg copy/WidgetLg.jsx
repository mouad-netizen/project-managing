import "./widgetlg.css"
import img from '../../images/user.jpg'
const WidgetLg = () => {

    const Button =({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return ( 
        <div className="widgetlg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    <img src={img} alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Mouad Majdoubi</span>
                  </td>
                  <td className="widgetLgDate">22 june 2023</td>
                  <td className="widgetLgAmount">$122.00</td>
                  <td className="widgetLgStatus"><Button type={"approved"}/></td>
                </tr>
                <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    <img src={img} alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Mouad Majdoubi</span>
                  </td>
                  <td className="widgetLgDate">22 june 2023</td>
                  <td className="widgetLgAmount">$122.00</td>
                  <td className="widgetLgStatus"><Button type={"approved"}/></td>
                </tr>
                <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    <img src={img} alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Mouad Majdoubi</span>
                  </td>
                  <td className="widgetLgDate">22 june 2023</td>
                  <td className="widgetLgAmount">$122.00</td>
                  <td className="widgetLgStatus"><Button type={"declined"}/></td>
                </tr>
                <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    <img src={img} alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Mouad Majdoubi</span>
                  </td>
                  <td className="widgetLgDate">22 june 2023</td>
                  <td className="widgetLgAmount">$122.00</td>
                  <td className="widgetLgStatus"><Button type={"pending"}/></td>
                </tr>
                <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    <img src={img} alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Mouad Majdoubi</span>
                  </td>
                  <td className="widgetLgDate">22 june 2023</td>
                  <td className="widgetLgAmount">$122.00</td>
                  <td className="widgetLgStatus"><Button type={"pending"}/></td>
                </tr>
                <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    <img src={img} alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Mouad Majdoubi</span>
                  </td>
                  <td className="widgetLgDate">22 june 2023</td>
                  <td className="widgetLgAmount">$122.00</td>
                  <td className="widgetLgStatus"><Button type={"declined"}/></td>
                </tr>
         
            </table>
        </div>
     );
}
 
export default WidgetLg;