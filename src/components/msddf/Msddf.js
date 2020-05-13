import React from 'react'
import './msddf.scss';
import SelectedItem from '../selected-item/SelectedItem';

  document.onclick = function(e) {
    if (!e.target.closest('.msddf')) {
      document.querySelectorAll('.dropdown-block').forEach(
        elem => elem.classList.remove('visible-block')
      )
    }
  }
  document.onkeydown = function(e) {
    if (e.keyCode === 27) {
      const dropDouns = document.querySelectorAll('.dropdown-block')
      dropDouns.forEach(elem => elem.classList.remove('visible-block'))
    }
  }
class Msddf extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items,
      filterValue: ''
    }
  }
  
  btnClick = event => {
    event.target.parentElement.nextElementSibling.classList.toggle('visible-block')
  }
  inputClick = event => {
    event.target.parentElement.nextElementSibling.classList.add('visible-block')
  }
  unselectItem = (id) => {
    this.setState(({items}) => {
      const index = items.findIndex(elem => elem.id === id)
      const newArr = [...items]
      newArr[index].selected = false;
      return items = newArr
    })
  }

  selectItem = (id) => {
    this.setState(({items}) => {
      const index = items.findIndex(elem => elem.id === id)
      const newArr = [...items]
      newArr[index].selected = true;
      return items = newArr
    })
  }
  changeInputHandler = (event) => {
    this.setState({filterValue: event.target.value})
  }

  render() {
    const renderSelectedItem = this.state.items
      .filter(item => (item.selected))
      .map(item => (
        <SelectedItem 
          key={item.id} 
          id={item.id}
          name={item.name} 
          unselectItem={() => this.unselectItem(item.id)}
        />
      ))
    let renderNotSelectedItem = this.state.items
      .filter(item => (!item.selected))
      .filter(item => (item.name.toLowerCase().indexOf(this.state.filterValue.toLowerCase()) > -1))
      .map(item => (
        <li key={item.id} onClick={() => this.selectItem(item.id)}>{item.name}</li>
      ))

    return (
      <div className='msddf'>
        <div className='selected-block'>
          {renderSelectedItem}
        </div>
        <div className='main-block'>
          <input 
            type="text" 
            className="search-input" 
            name="item"
            onClick={this.inputClick}
            onChange={this.changeInputHandler}
          />
          <div className='btn-dropdown' onClick={this.btnClick}>▼</div>
        </div>
        <div className='dropdown-block'>
          <ul className='drop-down-items'>
            {renderNotSelectedItem}
          </ul>
        </div>
      </div>
    )
  }
}

export default Msddf