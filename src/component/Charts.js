import React,{useState,useRef} from 'react'
import { Chart,registerables } from 'chart.js';

  import { Line,getElementAtEvent } from 'react-chartjs-2';
Chart.register(...registerables);
  
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['Jan 2001', 'Feb 2002', 'Mar 2003', 'Apr 2004', 'May 2005', 'June 2006', 'Jul 2007','Aug 2008'];
  const imageSet=[];
  export const data = {
    labels,
    datasets: [
      {
        label: `A's Weight`,
        data: [70,90,75,85,90,100,80,110],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

const Charts = () => {
    const [count,setCount]=useState("https://source.unsplash.com/random/300x200?sig=${Math.random()}");
    const chartRef = useRef();
    const onClick=(event)=>{
        console.log("Click Event Called",getElementAtEvent(chartRef.current, event)[0])
        if(getElementAtEvent(chartRef.current, event)[0]!==undefined){
            setTimeout(async () => {
                try {
                  const res = await fetch(`https://random.imagecdn.app/v1/image?width=700&height=350&category=buildings&format=json`);
                  const data = await res.json();
                  setCount(data.url);
                } catch (e) {
                  console.error("Problem in the API!", e);
                }})     
        }
    }

  return (
    <>
    <div className="container text-center">
      <p>Each time, you click on a data point in this graph, you'll get a new image no matter how many times you visit a data point  </p>
    <div className="row">
    <div className="col">
    </div>
    <div className="col-6" style={{width:"700px",height:"700px"}}><Line ref={chartRef} options={options} data={data} onClick={onClick}/>
    {count ? <img src={count}/> :<>Nothing</>}
    
    </div>
    <div className="col">
    </div>
    </div>
   </div>
    </>
  )
}

export default Charts;