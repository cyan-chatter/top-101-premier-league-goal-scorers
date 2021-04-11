import './App.css'

export const AxisLeft = ({yScale}) => {
    return yScale.domain().map(tickValue => 
      <g className="tick" key={'y' + tickValue} transform = {`translate(0,${yScale(tickValue) + yScale.bandwidth()/2})`}>
        <text style={{textAnchor : 'end', fontWeight : 'bold', fontSize:'1.1em'}} dy="0.32em" x={-10}>
          {tickValue}
        </text>
      </g>
    )
}
