import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import "./chart.css"
const Chart = ({title , data,datakey,grid,dataname}) => {

   

    return (
        <div className="chart">
                <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={datakey} />
     
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataname} stroke="#8884d8" activeDot={{ r: 8 }} />
         
        </LineChart>
      </ResponsiveContainer>
        </div>
    );
}
 
export default Chart;