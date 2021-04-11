import './App.css'
import React, {useState, useEffect} from 'react'
import {useData} from './useData'
import {AxisBottom} from './AxisBottom'
import {AxisLeft} from './AxisLeft'
import {Marks} from './Marks'
import { format } from 'd3'

const d3 = require('d3')

const w = 960*1.5;
const h = 600*6;
const margin = {top : 40, right: 40, bottom: 50, left: 300}
const urlCSV = 'https://gist.githubusercontent.com/cyan-chatter/2ad759f08731672fa2e695ef414a4118/raw/top101PLscorers080421.csv'


const App = () => {
  
  const  Data = useData(urlCSV);

  if(!Data){
      return (<pre>Loading Data....</pre>)
  }
  
  const innerHeight = h - margin.top - margin.bottom
  const innerWidth = w - margin.right - margin.left

  const xValue = d => d.goals
  const yValue = d => d.Player

  const yScale = d3.scaleBand()
  yScale.domain(Data.map(yValue)).range([0,innerHeight]).padding(0.15) //paddingInner(for no gaps on above top and below bottom bar)
  const xScale = d3.scaleLinear()
  //const maxXVal = Data[0].goals
  xScale.domain([0,d3.max(Data,xValue)]).range([0,innerWidth])

  // const sFormat = d3.format('.2s')
  // const tickFormat = tickValue => sFormat(tickValue)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Top 101 Premier League Goal Scorers</h1>
      </header>
      <br/>
      <div className="barChart">
      <svg width={w} height = {h}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom xScale = {xScale} innerHeight = {innerHeight} />
        <AxisLeft yScale = {yScale} />
        <text x={innerWidth/2} y={innerHeight+45} textAnchor="middle" fontWeight="bold" fontSize="1.4em">Total Number of Goals Scored in Premier League</text>
        <Marks xScale = {xScale} yScale={yScale} Data = {Data} xValue={xValue} yValue={yValue} />
      </g>
    </svg>
      <footer>
        <h4>This Data originates from<a href="https://www.premierleague.com/stats/top/players/goals" style={{textDecoration : 'none', color:'cyan'}}> The Official Website of The Premier League </a></h4>
      </footer>
      </div>
    </div>
  );
}

export default App;
