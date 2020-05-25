import React, {useState} from 'react'
import Msddf from './components/msddf/Msddf'
import {langs, cities} from './data/data'
import ShowData from './components/show-data/ShowData'

function App() {
  const [stateLangs, setStateLangs] = useState(langs)
  const [stateCities, setStateCities] = useState(cities)

  return (
    <div className='container'>
      <h3 className='title'>DropDown с мультиселектом и поиском</h3>
      <div className='dropdowns-block'>
        <div className='col'>
          <div>
            <h4 className='center'>DropDown №1. Languages</h4>
            <Msddf items={stateLangs} onChangeState={setStateLangs} />
          </div>
          <div>
            <h4 className='center sd-title'>Global state.Languages</h4>
            <ShowData items={stateLangs} />
          </div>
        </div>
        <div className='col'>
          <div>
            <h4 className='center'>DropDown №2. Cities</h4>
            <Msddf items={stateCities}  onChangeState={setStateCities}/>
          </div>
          <div>
            <h4 className='center sd-title'>Global state.Cities</h4>
            <ShowData items={stateCities} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
