import React, {useState, useEffect} from 'react'
const d3 = require('d3')

export const useData = (urlCSV) => {
    const [Data,setData] = useState(null)
  
    useEffect(()=>{
      const fetchData = async (url) => {
        try{
            const ResponseStream = await fetch(url)
            const csv = await ResponseStream.text()
            const d = d3.csvParse(csv)
            var c = 0;
            d.map( e => {
              e.color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
              e.goals = + e.Stat
            })
            setData([...d])
        }catch(e){
          console.log(e)        
        }
      }  
      fetchData(urlCSV)
    },[])
  
    return Data;
}
  
  