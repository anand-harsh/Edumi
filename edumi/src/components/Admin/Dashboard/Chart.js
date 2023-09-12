import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';

import {Line, Doughnut} from 'react-chartjs-2'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
)
export const LineChart = () => {
    const labels=["abc", "abc2", "abc3", "abc4"]

    const options={
        responsive: true,
        plugins:{
            legend:{
                position: 'bottom',
            },
            title:{
                display: true,
                text: 'Yearly Views'
            },
        },
    }

    const data={
        labels,
        datasets:[ // array of objects
            {
                label: 'Views',
                data: [12, 19, 3, 5],
                borderColor: "rgba(107, 70, 193, 0.5)"

            }
            

        ]
    }
  return <Line option={options} data={data}/>
};

export const DoughnutChart = () => {
    const data={
        labels:["Subscribed", "Not Subscribed"],
        datasets:[ 
            {
                label: 'Views',
                data: [3, 20],
                borderColor: ['rgba(62, 12, 171)', 'rgb(214, 43, 129)'],
                backgroundColor: ['rgba(62, 12, 171, 0.3', 'rgba(214, 43, 129, 0.3'],
                borderWidth: 1,

            }
        ]
    }
    return <Doughnut data={data}/>
}

function getLastYearMonth(){
    const labels=[]

    const months=[
        'January', 
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const currMonth=new Date().getMonth()
    // console.log(currMonth)
    const remain=11-currMonth
    // console.log(remain)
    for(let i=currMonth; i<months.length; i--){
        const elements=months[i]
        labels.unshift(elements)
        if(i==0) break;

        for(let i=11;i>remain;i--){
            if(i===currMonth) break;
            const elements=months[i]
            labels.unshift(elements)

        }
        return labels
    }

}

getLastYearMonth()
