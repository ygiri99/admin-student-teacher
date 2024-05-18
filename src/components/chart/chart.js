import React, { useContext, useEffect } from 'react';
import {Chart as ChartJS,BarElement, CategoryScale,LinearScale,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { MyContext } from '../../App';
;

export default function ChartBar() {
  const {apiData, getData} = useContext(MyContext)
  
   useEffect(() => {
      getData("student");
   },[])

   let names = apiData.map(ele =>{
    return ele.name;
  })

  let marks = apiData.map(ele =>{
    const TotalMark = ele.marks.split(',').map(Number).reduce((a,b) => a+b);
    if(TotalMark)
      return TotalMark;
    else
      return Math.trunc(Math.random()*500)
  })
   
   ChartJS.register(
    BarElement,CategoryScale,LinearScale,Tooltip,Legend
   )
   const chartData = {
    labels: names,
    datasets: [
      {
        label: `Students Percentage Chart outof 500`,
        data: marks,
        backgroundColor: 'pink',
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
   }
   const options = {

   }
  return (
    <div>Bar
      <Bar data = {chartData} options={options}></Bar>
    </div>
  )
}
