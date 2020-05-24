import React from 'react'
import Msddf from './components/msddf/Msddf'
import {langs, cities} from './data/data'

function App() {
  return (
    <div className='container'>
      <h3 className='title'>DropDown с мультиселектом и поиском</h3>
      <div className='dropdowns-block'>
        <div className='col'>
          <h4 className='center'>DropDown №1. Languages</h4>
          <Msddf items={langs}/>
        </div>
        <div className='col'>
          <h4 className='center'>DropDown №2. Cities</h4>
          <Msddf items={cities}/>
        </div>
      </div>
    </div>
  )
}

export default App
