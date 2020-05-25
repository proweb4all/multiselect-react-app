import React from "react"
import "./show-data.scss"

const ShowData = ({items}) => {
  const renderData = items.map(item => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{(item.selected) ? '✔' : ''}</td>
    </tr>
  ))

  return (
    <div className='show-data'>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Selected</td>
          </tr>
        </thead>
        <tbody>
          {renderData}
        </tbody>
      </table>
    </div>
  )
}

export default ShowData
