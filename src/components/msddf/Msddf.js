import React from 'react'
import DropdownList from '../dropdown-list/DropdownList';
import SelectedList from '../selected-list/SelectedList';
import SearchInput from '../search-input/SearchInput';
import './msddf.scss';

class Msddf extends React.Component {
  state = {
    items: this.props.items,
    filterValue: '',
    dropDown: false
  }

  closeDropdown = () => {
    const inputs = document.querySelectorAll('.search-input')
    inputs.forEach(elem => elem.value = '')
    this.setState(({dropDown}) => ({dropDown: false}))
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) { this.closeDropdown() }
    })
    document.addEventListener("click", (e) => {
      if (!e.target.closest('.msddf') && !e.target.classList.contains('dropdown-item')
          && !e.target.classList.contains('selected-item__close'))  { 
        this.closeDropdown() 
      }
    })
  }
  
  componentWillUnmount(){
    document.removeEventListener("keydown", (e) => {
      if (e.keyCode === 27) { this.closeDropdown() }
    })
    document.removeEventListener("click", (e) => {
      if (!e.target.closest('.msddf') && !e.target.classList.contains('dropdown-item')
          && !e.target.classList.contains('selected-item__close'))  { 
        this.closeDropdown() 
      }
    })
  }

  btnClick = () => {
    this.setState(({dropDown}) => ({dropDown: !dropDown}))
  }

  inputClick = event => {
    this.setState(({dropDown}) => ({dropDown: true}))
  }

  selectItem = (id, onSelect) => {
    this.setState(({items}) => {
      const index = items.findIndex(elem => elem.id === id)
      const newArr = [...items]
      newArr[index].selected = onSelect;
      if (this.props.onChangeState) {
        this.props.onChangeState(newArr)
      }
      return {items: newArr}
    })
  }

  changeInputHandler = (value) => {
    this.setState(({filterValue}) => ({filterValue: value}))
    if (!this.state.dropDown) {
      this.setState(({dropDown}) => ({dropDown: true}))
    }
  }

  render() {
    return (
      <div className='msddf'>
        <SelectedList 
          items={this.state.items} 
          selectItem={this.selectItem} 
        />
        <SearchInput
          inputClick={this.inputClick}
          changeInputHandler={this.changeInputHandler}
          btnClick={this.btnClick}
        />
        { this.state.dropDown && <DropdownList 
            items={this.state.items} 
            filterValue={this.state.filterValue}
            selectItem={this.selectItem} />
        }
      </div>
    )
  }
}

export default Msddf