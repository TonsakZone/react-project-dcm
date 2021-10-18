import React from "react";
import { Bar } from "react-chartjs-2";
import { chartdata } from "./arraydata.js";
import { chartdatasub } from "./arraydata-samplesub.js";
import CsvViewer from "react-csv-viewer";

const data1 = {
	labels: [0, 1],
	datasets: [
		{
			label: "Negative for Pneumonia",
			type: "bar",
			data: [chartdata[0], chartdata[1]],
			fill: true,
			backgroundColor: "rgba(255,123,191,0.8)",
			borderColor: "rgba(255,37,150,0.8)",
			borderWidth: 2
		}
	],
	options: {
		scales: {
			xAxes: [{
				display: false,
				barPercentage: 1.30,
			}, {
				display: true,
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
};

const data2 = {
	labels: [0, 1],
	datasets: [
		{
			label: "Typical Appearance",
			type: "bar",
			data: [chartdata[2], chartdata[3]],
			fill: true,
			backgroundColor: "rgba(130,249,255,0.8)",
			borderColor: "rgba(0,210,221,0.8)",
			borderWidth: 2
		}
	],
	options: {
		scales: {
			xAxes: [{
				display: false,
				barPercentage: 1.30,
			}, {
				display: true,
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
};

const data3 = {
	labels: [0, 1],
	datasets: [
		{
			label: "Indeterminate Appearance",
			type: "bar",
			data: [chartdata[4], chartdata[5]],
			fill: true,
			backgroundColor: "rgba(190,134,250,0.8)",
			borderColor: "rgba(123,0,255,0.8)",
			borderWidth: 2
		}
	],
	options: {
		scales: {
			xAxes: [{
				display: false,
				barPercentage: 1.30,
			}, {
				display: true,
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
};

const data4 = {
	labels: [0, 1],
	datasets: [
		{
			label: "Atypical Appearance",
			type: "bar",
			data: [chartdata[6], chartdata[7]],
			fill: true,
			backgroundColor: "rgba(255,216,108,0.8)",
			borderColor: "rgba(255,187,0,0.8)",
			borderWidth: 2
		}
	],
	options: {
		scales: {
			xAxes: [{
				display: false,
				barPercentage: 1.30,
			}, {
				display: true,
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
};

const data5 = {
	labels: ["negative 1 0 0 1 1", "none 1 0 0 1 1"],
	datasets: [
		{
			label: "Prediction String",
			type: "bar",
			data: [chartdatasub[0], chartdatasub[1]],
			fill: true,
			backgroundColor: "rgba(255,85,85,0.8)",
			borderColor: "rgba(148,0,0,0.8)",
			borderWidth: 2
		}
	],
	options: {
		scales: {
			xAxes: [{
				display: false,
				barPercentage: 1.30,
			}, {
				display: true,
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
};

export default function CSV() {
	return (
		<div className="viewcsv">
			<h5>Upload csv file (Show as table)</h5>
			<CsvViewer />
			<br/>
			<h4>Negative for Pneumonia (from train_study_level.csv)</h4>
			<Bar data={data1} />
			<br/>
			<h4>Typical Appearance (from train_study_level.csv)</h4>
			<Bar data={data2} />
			<br/>
			<h4>Indeterminate Appearance (from train_study_level.csv)</h4>
			<Bar data={data3} />
			<br/>
			<h4>Atypical Appearance (from train_study_level.csv)</h4>
			<Bar data={data4} />
			<br/>
			<h4>Prediction String (from sample_submission.csv)</h4>
			<Bar data={data5} />
		</div>
	);
}

