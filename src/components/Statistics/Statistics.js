import React, { Component } from 'react';
import './Statistics.css';
import { Bar, Pie, defaults } from 'react-chartjs-2'
import { Redirect } from 'react-router';


defaults.global.legend.labels.boxWidth = 100;
defaults.global.legend.labels.fontSize = 20;

const Statistics = () => {
    return (

    

            <div>
           

                        <div class = "pieCharts">

                            <div class = "dailyPie">
                                            <h1 style={{color: "black"}}>Daily Statistics</h1>
                                        <Pie
                                            data = {{
                                            labels: ['Sleep', 'Work', 'Hobby'],
                                            datasets: [{
                                                label: '# of Votes',
                                                data: [12, 19, 3],


                                                backgroundColor: [
                                                    'rgb(255, 99, 132)',
                                                    'rgb(54, 162, 235)',
                                                    'rgb(255, 205, 86)'
                                                    ],
                                                    hoverOffset: 4

                                            }]
                                        }}
                                        height = {200}
                                        width = {100}
                                        options = {{
                                            maintainAspectRatio: false,


                                            layout: {
                                                padding: {
                                                    top: 20,
                                                    
                                                }
                                            }
                                        }}

                                        />
  
                             </div>

                                    <div class = "dailyPie">
                                    <h1 style={{color: "black"}}>Weekly Statistics</h1>
                                    <Pie
                                    data = {{
                                        labels: ['Sleep', 'Work', 'Hobby'],
                                        datasets: [{
                                            label: '# of Votes',
                                            data: [12, 19, 3],


                                            backgroundColor: [
                                                'rgb(255, 99, 132)',
                                                'rgb(54, 162, 235)',
                                                'rgb(255, 205, 86)'
                                                ],
                                                hoverOffset: 4

                                        }]
                                    }}
                                    height = {200}
                                    width = {100}
                                    options = {{
                                        maintainAspectRatio: false,


                                        layout: {
                                            padding: {
                                                top: 20
                                            }
                                        }
                                    }}

                                    />
                                        
                                </div>
                 </div>
                        
                        <div class = "barCharts">
                                <div class = "dailyPie">
                                                    <h1 style={{color: "black"}}>Daily Statistics</h1>
                                                <Bar
                                                    data = {{
                                                    labels: ['Sleep', 'Work', 'Hobby'],
                                                    datasets: [{
                                                        label:'Your Daily Statistics in bar chart',
                                                        data: [12, 19, 3],



                                                        //this is for bar chart
                                                        
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)'
                                                            
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)'
                                                          
                                                        ],
                                                        borderWidth: 1,

                                                    }]
                                                }}
                                                height = {200}
                                                width = {100}
                                                options = {{
                                                    maintainAspectRatio: false,

                                                    //this is for bar chart
                                                    scales: {
                                                        yAxes: [{
                                                            ticks: {
                                                            beginAtZero: true
                                                                }
                                                            
                                                                }]
                                                            
                                                        },

                                                    layout: {
                                                        padding: {
                                                            top: 20,
                                                            
                                                        }
                                                    }
                                                }}

                                                />
        
                                    </div>

                                            <div class = "dailyPie">
                                            <h1 style={{color: "black"}}>Weekly Statistics</h1>
                                            <Bar
                                            data = {{
                                                labels: ['Sleep', 'Work', 'Hobby'],
                                                datasets: [{
                                                    label: 'Your weekly Statistics in bar chart',
                                                    data: [12, 19, 3],



                                                    //this is for bar chart
                                                    
                                                    backgroundColor: [
                                                        'rgba(255, 99, 132, 0.2)',
                                                        'rgba(54, 162, 235, 0.2)',
                                                        'rgba(255, 206, 86, 0.2)'
                                                       
                                                    ],
                                                    borderColor: [
                                                        'rgba(255, 99, 132, 1)',
                                                        'rgba(54, 162, 235, 1)',
                                                        'rgba(255, 206, 86, 1)'
                                                    
                                                    ],
                                                    borderWidth: 1,

                                                }]
                                            }}
                                            height = {200}
                                            width = {100}
                                            options = {{
                                                maintainAspectRatio: false,

                                                //this is for bar chart
                                                scales: {
                                                    yAxes: [{
                                                        ticks: {
                                                        beginAtZero: true
                                                            }
                                                        
                                                            }]
                                                        
                                                    },

                                                layout: {
                                                    padding: {
                                                        top: 20
                                                    }
                                                }
                                            }}

                                            />
                            </div>
                        </div>
                
            </div>
        );
    }
    
    
    export default Statistics;