import React from 'react';
import Msddf from './components/msddf/Msddf';

const langs = [
  {id: 0, name: 'lang0__name', selected: true},
  {id: 1, name: 'lang1__name', selected: false},
  {id: 2, name: 'lang2__name', selected: false},
  {id: 3, name: 'lang3__name', selected: false},
  {id: 4, name: 'lang4__name', selected: true},
  {id: 5, name: 'lang5__name', selected: false},
  {id: 6, name: 'lang6__name', selected: false},
  {id: 7, name: 'lang7__name', selected: false},
  {id: 8, name: 'lang8__name', selected: false},
  {id: 9, name: 'lang9__name', selected: false}
]

const cities = [
  {id: 0, name: 'city0__name', selected: false},
  {id: 1, name: 'city1__name', selected: true},
  {id: 2, name: 'city2__name', selected: false},
  {id: 3, name: 'city3__name', selected: true},
  {id: 4, name: 'city4__name', selected: true},
  {id: 5, name: 'city5__name', selected: false},
  {id: 6, name: 'city6__name', selected: true},
  {id: 7, name: 'city7__name', selected: false},
  {id: 8, name: 'city8__name', selected: true},
  {id: 9, name: 'city9__name', selected: true}
]

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
  );
}

export default App;
