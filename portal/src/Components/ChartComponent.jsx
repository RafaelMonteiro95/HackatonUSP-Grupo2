import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const data = {
  xAxisID: 'Disciplinas',
  yAxisID: 'Avaliação Média',
  labels: ['SCC-0666','SME-0133','SEL-0432','MAC-0324'],
  datasets: [
    {
      label: 'Avaliação Média',
      backgroundColor: '#80d8ff',
      borderColor: '#40c4ff',
      borderWidth: 1,
      hoverBackgroundColor: '#00b0ff',
      hoverBorderColor: '#0091ea',
      data: [10, 5, 6, 3, 0]
    }
  ],
};

const lineData = {
  labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  datasets: [
    {
      data: [3, 5, 4, 6, 7, 10, 5, 7, 3, 8, 0, 5],
      label: 'SCC-0666',
      // xAxisID: 'Avaliação Média',
      borderColor: '#40c4ff',
      borderWidth: 1,
      hoverBorderColor: '#0091ea',
      lineTension: 0,
      fill: false
    } , 
    {
      data: [6, 3, 1, 3, 4, 2, 7, 4, 3, 2, 4, 3],
      label: 'SME-0133',
      // xAxisID: 'Avaliação Média',
      borderColor: 'red',
      borderWidth: 1,
      // hoverBorderColor: '#0091ea',
      lineTension: 0,
      fill: false
    } , 
    {
      data: [8, 7, 6, 8, 8, 5, 7, 9, 10, 7, 9, 10],
      label: 'SEL-0432',
      // xAxisID: 'Avaliação Média',
      borderColor: 'green',
      borderWidth: 1,
      // hoverBorderColor: '#0091ea',
      lineTension: 0,
      fill: false
    } , 
    {
      data: [2, 3, 4, 4, 5, 6, 6, 7, 6, 6, 7, 8],
      label: 'SME-0133',
      // xAxisID: 'Avaliação Média',
      borderColor: 'black',
      borderWidth: 1,
      // hoverBorderColor: '#0091ea',
      lineTension: 0,
      fill: false
    } ,

    ]
};

class BarGraphic extends React.Component{
  render() {
    return (
        <Bar data={data} />
    );
  }
};

class LineGraphic extends React.Component{
    
    render(){
        return (
            <Line data={lineData} responsive='False' style={{maxHeight: '300px'}} />
        );       
    }
};

export { BarGraphic, LineGraphic }