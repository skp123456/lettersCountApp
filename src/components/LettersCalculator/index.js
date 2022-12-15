import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    lettersCount: 0,
  }

  onChangeSearchInput = event => {
    const searchInput = event.target.value
    this.setState({
      lettersCount: searchInput.length,
    })
  }

  render() {
    const {lettersCount} = this.state
    console.log(lettersCount)
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">Calculate the Letters you enter</h1>
          <label className="label-input">
            Enter the phrase
            <div>
              <input
                type="text"
                placeholder="Enter the phrase"
                className="input-element"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </label>
          <div className="count">
            <p className="letters-count">No.of letters: {lettersCount}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            className="calculator-image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
