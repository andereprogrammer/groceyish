import React, { useState } from 'react'
import './Nutrients.scss'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts'
import ProgressBarBig from './ProgressBarBig';

function Nutrients() {
    let [values,setValues] = useState(43)
    let [name,setName] = useState("Cabohydrates")
    const btn = [...document.getElementsByClassName('b')]
    const handleCarb = (e) =>{
       Highcharts.charts[1 || 3].series[0].data[0].select(true,false)
       Highcharts.charts[1 || 3].tooltip.refresh(Highcharts.charts[1 || 3].series[0].data[0])
       setName("Carbohydrates")
       setValues(43)
       btn.forEach(b=>{
        b.classList.remove('selected')
       })
       document.getElementById('carb').classList.add('selected')
     }
     const handleProt = () =>{
        Highcharts.charts[1 || 3].series[0].data[1].select(true,false)
        Highcharts.charts[1 || 3].tooltip.refresh(Highcharts.charts[1 || 3].series[0].data[1])
        setName("Protiens")
        setValues(12)
        btn.forEach(b=>{
            b.classList.remove('selected')
           })
       document.getElementById('pro').classList.add('selected')
      }
      const handleFat = () =>{
        Highcharts.charts[1 || 3].series[0].data[5].select(true,false)
        Highcharts.charts[1 || 3].tooltip.refresh(Highcharts.charts[1 || 3].series[0].data[5])
        setName("Fat")
        setValues(9)
        btn.forEach(b=>{
            b.classList.remove('selected')
           })
       document.getElementById('f').classList.add('selected')
      }
      const handleTfat = () =>{
        Highcharts.charts[1 || 3].series[0].data[4].select(true,false)
        Highcharts.charts[1 || 3].tooltip.refresh(Highcharts.charts[1 || 3].series[0].data[4])
        setName("TransFat")
        setValues(9)
        btn.forEach(b=>{
            b.classList.remove('selected')
           })
       document.getElementById('tf').classList.add('selected')
      }
      const handleSod = () =>{
        Highcharts.charts[1 || 3].series[0].data[3].select(true,false)
        Highcharts.charts[1 || 3].tooltip.refresh(Highcharts.charts[1 || 3].series[0].data[3])
        setName("Sodium")
        setValues(9)
        btn.forEach(b=>{
            b.classList.remove('selected')
           })
       document.getElementById('sod').classList.add('selected')
      }
      const handleSug = () =>{
        Highcharts.charts[1 || 3].series[0].data[6].select(true,false)
        Highcharts.charts[1 || 3].tooltip.refresh(Highcharts.charts[1 || 3].series[0].data[7])
        setName("Sugar")
        setValues(13)
        btn.forEach(b=>{
            b.classList.remove('selected')
           })
       document.getElementById('sug').classList.add('selected')
      }
      const handleSat = () =>{
        Highcharts.charts[1 || 3].series[0].data[6].select(true,false)
        Highcharts.charts[1 || 3].tooltip.refresh(Highcharts.charts[1].series[0].data[6])
        setName("Saturated Fats")
        setValues(11)
        btn.forEach(b=>{
            b.classList.remove('selected')
           })
       document.getElementById('sat').classList.add('selected')
      }
      const handleEne = () =>{
        setName("Energy")
        setValues(200)
        Highcharts.charts[1].tooltip.refresh(Highcharts.charts[1].series[0].data[2])
        Highcharts.charts[1].series[0].data[2].select(true,false)
        btn.forEach(b=>{
            b.classList.remove('selected')
        })
       document.getElementById('ene').classList.add('selected')
      }

    let options = {
        colors: ['#C5A2F1', '#F1A2A2', '#F1E0A2', '#9BADEC','#9BADEC','#F1A2E9'],
        chart: {
            type: 'pie',
            backgroundColor: '#E4FDE6'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        title: {
            text: 'Composistion of nutrients present'
        },
        subtitle: {
            text: 'Nutrients present '
        },
        tooltip: {
            enabled:true,
            positioner: function () {
                return { x:  150, y:  200 };
            },
            pointFormat: '{point.percentage:.0f}%',
            
                borderColor: 'white',
                backgroundColor: 'white',
                borderWidth: 0,
                boxShadow:'none',           
                useHTML: true,
                formatter: function(){
                    var content = '';
                    content +=  
                              
                               '<span style="color:black;font-size:14px;font-weight:bold">'+ this.point.name + ' - ' +
                               '<span style="color:red;">' +  this.y +'%'+  '</span>';
                             return content;
                         }
                  
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    y: -5,
                    format: '{point.name}: {y} %'
                },
                showInLegend: false
            }
        },
        series: [{
            name: 'Nutrients',
            colorByPoint: true,
            innerSize: '75%',
            data: [{
                name: 'Carbohydrates',
                y: 43
            }, {
                name: 'Protiens',
                y: 11.0
            }, {
                name: 'Energy',
                y: 11.2
            }, {
                name: 'Sodium',
                y: 9.7
            },{
                name: 'Trans Fat',
                y: 9.7
            },{
                name: 'Fat',
                y: 8.9
            },{
                name: 'Saturated Fat',
                y: 8.9
            },{
                name: 'Sugar',
                y: 8.9
            }]
        }]
    }
  return (
    <>
    <div className="main_container">
    <div className="charts_container">
    <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>
    <div className="descrp_container">
        <div className="button_tags">
            <button className='btn b' id='carb' onClick={(e)=>handleCarb(e)}>Carbohydrates</button>
            <button className='btn b' id='pro' onClick={handleProt}>Proteins</button>
            <button className='btn b' id='tf' onClick={handleTfat}>Trans Fat</button>
            <button className='btn b' id='f' onClick={handleFat}>Fat</button>
            <button className='btn b' id='ene' onClick={handleEne}>Energy</button>
            <button className='btn b' id='sod' onClick={handleSod}>Sodium</button>
            <button className='btn b' id='sug' onClick={handleSug}>Sugar</button>
            <button className='btn b' id='sat' onClick={handleSat}>Saturated Fats</button>
        </div>
        <div className="new_progress_bar">
            <h4>{name}</h4>
            
            <div className="progress">{<>{values >40 ? <span>{values} (high)</span>: <spa>{values} (low) </spa>}</>}<ProgressBarBig productNutrition={values} productNutriName={name}/></div>
        </div>
        <div className="descrp_nutrients">
            <h4>About:</h4>
            <p>i will be the one top og The nutella spread is the best spread available in the market with a good amount of taste and protiens asided with good value for money and val</p>
        </div>
    </div>
    </div>
    
    
    </>
   
  )
}

export default Nutrients