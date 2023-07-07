/* eslint-disable react/no-unused-state */
import {Component} from 'react'

import './index.css'

const HeadImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    HeadCount: 0,
    TailsCount: 0,
    imageElement: HeadImage,
  }

  onCoinTossClick = () => {
    const {HeadCount, TailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let headCountToss = HeadCount
    let tailsCountToss = TailsCount
    if (tossResult === 0) {
      tossImage = HeadImage
      headCountToss += 1
    } else {
      tossImage = TailsImage
      tailsCountToss += 1
    }
    this.setState({
      HeadCount: headCountToss,
      TailsCount: tailsCountToss,
      imageElement: tossImage,
    })
  }

  render() {
    const {imageElement, HeadCount, TailsCount} = this.state
    const totalCount = HeadCount + TailsCount
    console.log(totalCount)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-coins">Coin Toss Game</h1>
          <p className="toss-description">Heads (or) Tails</p>
          <img src={imageElement} alt="toss result" className="image-toss" />
          <button
            type="button"
            onClick={this.onCoinTossClick}
            className="button"
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total:{totalCount}</p>
            <p className="count">Heads:{HeadCount}</p>
            <p className="count">Tails:{TailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
