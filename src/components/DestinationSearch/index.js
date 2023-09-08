import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class Home extends Component {
  state = {inputSearch: ''}

  onChangeElement = event => {
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {inputSearch} = this.state
    const {destinationsList} = this.props

    const filterPlaceList = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="search"
            onChange={this.onChangeElement}
          />

          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="iconSearch"
          />
        </div>
        <ul className="list-conatiner">
          {filterPlaceList.map(each => (
            <DestinationItem placeDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
