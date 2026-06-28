import React from 'react'
import Card from './components/card'
import data from './components/data'

const App=()=>{
  return (
    <div className='parent'>
      {data.map((element,index) => (
        <Card key={index} {...element}/>
      ))}
    </div>
  )
}
export default App;
