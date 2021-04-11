import './App.css'

export const AxisBottom = ({xScale, innerHeight}) => {
    
  return xScale.ticks().map(tickValue => 
      <g className="tick" key={'x' + tickValue} transform = {`translate(${xScale(tickValue)},${0})`}>
      <line  
        y2={innerHeight}
        stroke="#C0A0AD"
      />
      <text y={innerHeight + 3} dy="0.71em" style={{width: 'fit-content',fontWeight: 'bold', textAnchor: 'middle', fontSize:'1.1em'}}>{tickValue}</text>
      </g>
  )
}
