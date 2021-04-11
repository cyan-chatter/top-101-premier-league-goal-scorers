export const Marks = ({Data, xScale, yScale, xValue, yValue}) => {
    return Data.map((el) => {
      return (
        <rect key={yValue(el)} x={0} y={yScale(yValue(el))} width={xScale(xValue(el))} height = {yScale.bandwidth()} fill={el.color}>
        <title>{xValue(el)}</title>
        </rect> 
      )
    })
}
  