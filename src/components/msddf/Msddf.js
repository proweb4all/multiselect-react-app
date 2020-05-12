import React from 'react'
import {connect} from 'react-redux'
// import {createPost} from '../redux/actions'
import './msddf.scss';
import SelectedItem from '../selected-item/SelectedItem';
import DropDown from '../drop-down/DropDown';


class Msddf extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   title: ""
    // }
  }
  
  submitHandler = event => {
    // event.preventDefault()
    // const {title} = this.state
    // if (!title.trim()) {
    //   return
    // }
    // const newPost = {
    //   title, id: Date.now().toString()
    // }
    // console.log(newPost)
    // this.props.createPost(newPost)
    // this.setState({title: ''})
  }

  changeInputHandler = event => {
    // event.persist()
    // this.setState(prev => ({...prev, ...{
    //   [event.target.name]: event.target.value
    // }}))
  }

  btnClick = event => {
    event.target.parentElement.nextElementSibling.classList.toggle('visible-block')
  }
  inputClick = event => {
    // console.log(event.target)
    event.target.parentElement.nextElementSibling.classList.add('visible-block')
  }


  render() {
    return (
        <div className='msddf'>
          <div className='selected-block'>
            <SelectedItem />
            <SelectedItem />
            <SelectedItem />
          </div>
          <div className='main-block'>
            <input 
              type="text" 
              className="search-input" 
              id="item" 
              name="item"
              // value={this.state.title}
              onClick={this.inputClick}
              // onChange={this.changeInputHandler}
            />
            {/* <div className='search-input' onClick={this.inputClick}>search-input</div> */}
            <div className='btn-dropdown' onClick={this.btnClick}>▼</div>
          </div>
          <div className='dropdown-block'><DropDown /></div>
        </div>
    )
  }
}

// const mapDispatchToProps = {
//   createPost
// }

export default connect(null, null)(Msddf)