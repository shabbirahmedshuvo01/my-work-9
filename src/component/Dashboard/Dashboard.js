import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [chart, setchart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setchart(data))
    }, [])
    return (
        <div>
            <div>
                <LineChart width={400} height={400} data={chart}>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <br />
            <div>
                <LineChart width={600} height={300} data={chart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="revenue" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>


    );
};

export default Dashboard;