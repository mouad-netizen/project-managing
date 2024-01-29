import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
    return ( 
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue     </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-2,415 <ArrowDownwardIcon className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last months</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales     </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$15,415</span>
                    <span className="featuredMoneyRate">-2,415 <ArrowDownwardIcon   className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last months</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost     </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,5</span>
                    <span className="featuredMoneyRate">+12,415 <ArrowUpwardIcon  className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compared to last months</span>
            </div>
        </div>
     );
}
 
export default FeaturedInfo;