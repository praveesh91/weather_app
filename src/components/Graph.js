import React from 'react'
import { Line } from 'react-chartjs-2';

const Graph = props => {
    const { values } = props;
    const val = values.map(item =>{
        return (Math.floor(item.main.temp * 1) / 1)
    })
    const options = {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'No. of Slots',
              fontStyle: 'bold' 
            },
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Time',
              fontStyle: 'bold' 
            }
          }]
        }     
      }
    return (
    <div>
        {/* <span>{val}</span> */}
        <Line data={val} />
    </div>
    );
  };
  
  
  export default Graph;
  

// import React, { Component } from 'react'

// class Graph extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              val:[]
//         }
//     }
    
//     render(props) {
//         const {values} = this.props
//         const val = values.map(item =>{
//             return (Math.floor(item.main.temp * 1) / 1)
//         })
//         console.log("val",val)
//         return (
//             <div>
//                 <span>{val}</span>
//                 <Line data={val} />
//             </div>
//         )
//     }
// }

// export default Graph
