import React, { Component } from 'react';
import './Statistics.css';
import { Pie, defaults } from 'react-chartjs-2'


defaults.global.legend.labels.boxWidth = 100;
defaults.global.legend.labels.fontSize = 20;

const Statistics = () => {
    return (

    

            <div>
                <h1>Statistics</h1>
                <Pie
                data = {{
                    labels: ['Sleep', 'Work', 'Hobby'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3],



                        //this is for bar chart
                        /*
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,*/

                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                          ],
                          hoverOffset: 4

                    }]
                }}
                height = {500}
                width = {100}
                options = {{
                    maintainAspectRatio: false,

                    //this is for bar chart
                    /*scales: {
                        yAxes: [{
                            ticks: {
                            beginAtZero: true
                             }
                            
                             }]
                            
                     },*/

                    layout: {
                        padding: {
                            top: 20
                        }
                    }
                }}

                />



            </div>
        );
    }
    
    
    export default Statistics;