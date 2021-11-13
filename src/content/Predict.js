import React from "react";
import 'antd/dist/antd.css';
import { Table } from 'antd';
import datano2 from "./Convert-4.json";
import count4 from "./DataCount-4.json";
// import Id2 from "./Id2.js";
// import PredictData from "./PredictData.js";
import "./AllTable.css";


// var charttop = [
// 	{
// 		"id":<Id2/>,
// 		"PredictionString":<PredictData/>,
// 	}
// ];

function IdPre() {
    return (
        <div className="idtext">
            <h3 style={{"color":"rgba(53, 152, 254, 0.8)"}}><b>{count4[2]}</b></h3>
            <br/>
            <h4>unique values</h4>
        </div>
    );
}

function PredictData() {
    var num = (count4[0]/count4[2])*100;
    var numres = Math.round(num);
    var num1 = (count4[1]/count4[2])*100;
    var numres1 = Math.round(num1);
    return (
        <div className="idtext">
            <h3>none 1 0 0 1 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{numres1}%</h3>
            <br/>
            <h3>negative 1 0 0 1 1 &nbsp;&nbsp;&nbsp;{numres}%</h3>
        </div>
    );
}



// const chart = datano2;
// charttop=charttop.concat(chart);

const columns2 = [
	{
	  title: 'id',
	  dataIndex: 'id',
	  children: [
		{
		  title: IdPre(),
		  dataIndex: 'id',
		},
	  ],
	  sorter: (a, b) => a.id.localeCompare(b.id)
	},
	{
	  title: "PredictionString",
	  dataIndex: "PredictionString",
	  children: [
		{
		  title: PredictData(),
		  dataIndex: 'PredictionString',
		},
	  ],
	  sorter: {
		compare: (a, b) => a.PredictionString.length - b.PredictionString.length,
	  },
	  
	},
];
export default function Predict() {
	return (
		<div className="container-chart">
			<div className="table">
				<Table 
					columns={columns2}
					dataSource={datano2}
					sticky={true}
					tableLayout="fixed"
					// onChange={(sorter) => {
					// 	console.log("Sorted",sorter);
					// }}
				/>
			</div>
		</div>
	);
}

