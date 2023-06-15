import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 


Chart.register(CategoryScale);
export default function Graph() {
    const option = {
        responsive: true,
        plugins: {
          legend: { position: "chartArea" },
          title: {
            display: true,
            text: "Modular Bar Chart",
          },
        },
      };
      
      const data = {
        labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Product A",
            data: [ 20, 30, 40, 50, 60,70],
            backgroundColor: "green",
          },
          {
            label:'Product B',
            data:[15,20,25,40,45,60],
            backgroundColor:'blue'
          },
      
        ],
      
      };
      return (
        <div className="App">
          <Bar options={option} data={data} />
        </div>
      );
}
