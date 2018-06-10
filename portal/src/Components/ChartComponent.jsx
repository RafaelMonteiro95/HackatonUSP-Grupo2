import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const data = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  datasets: [
    {
      label: 'Número de alunos',
      backgroundColor: '#80d8ff',
      borderColor: '#40c4ff',
      borderWidth: 1,
      hoverBackgroundColor: '#00b0ff',
      hoverBorderColor: '#0091ea',
      data: [0, 0, 1, 2, 7, 10, 5, 7, 1, 2, 1]
    }
  ]
};

const lineData = {
  datasets: [
    {
      label: 'Número de alunos',
      xAxisID: 'Avaliação Média',
      borderColor: '#40c4ff',
      borderWidth: 1,
      hoverBorderColor: '#0091ea',
      data: [0, 0, 1, 2, 7, 10, 5, 7, 1, 2, 1]
    }
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
            <Line data={data} />
        );       
    }
};

export { BarGraphic, LineGraphic }