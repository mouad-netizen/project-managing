import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetsLg copy/WidgetLg";
import WidgetSm from "../../components/widgetsSmall/WidgetSm";
import "./home.css"

const Home = () => {

    const data = [
        {
          name: 'Jan',
          "Active user": 2000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          "Active user": 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          "Active user": 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Abr',
          "Active user": 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          "Active user": 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          "Active user": 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          "Active user": 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Aug',
          "Active user": 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Seb',
          "Active user": 3290,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Oct',
          "Active user": 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Nov',
          "Active user": 3190,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Dec',
          "Active user": 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return ( 
        <div className="home">
            <FeaturedInfo/>
            <Chart data={data} title={"User Analytics"} grid datakey="name" dataname="Active user"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
     );
}
 
export default Home;