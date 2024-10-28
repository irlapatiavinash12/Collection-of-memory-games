import './index.css'

import {Link} from 'react-router-dom'

import {BiArrowBack} from 'react-icons/bi'

import {useState} from 'react'
import EmojiGameInterface from '../EmojiGameInterface'

const EmojiGameRoute = () => {
  const [gameActive, setgameActive] = useState(false)

  const renderActiveness = () => {
    setgameActive(!gameActive)
  }

  return (
    <div className="emoji-route-container">
      {gameActive ? (
        <div className="game-interface">
          <EmojiGameInterface />
        </div>
      ) : (
        <>
          <Link to="/" className="link-styling">
            <button type="button" className="back-button-styling">
              {' '}
              <BiArrowBack /> Back
            </button>
          </Link>
          <div className="rules-section">
            <img
              className="emoji-rule-image"
              src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729257912/Group_7471_w4hbbx.png"
              alt="emoji game"
            />
            <h1 className="home-temp-heading">Emoji Game</h1>
            <div className="rules-content-container">
              <h2 className="rules-heading">Rules</h2>
              <ul className="unordered-list-styling">
                <li>User should be able to see the list of Emojis.</li>
                <li>
                  When the user clicks any one of the Emoji for the first time,
                  then the count of the score should be incremented by 1 and the
                  List of emoji cards should be shuffled.
                </li>
                <li>
                  This process should be repeated every time the user clicks on
                  an emoji card.
                </li>
                <li>
                  When the user clicks on all Emoji cards without clicking any
                  of it twice, then the user will win the game.
                </li>
                <li>
                  When the user clicks on the same Emoji for the second time,
                  then the user will lose the game.
                </li>
                <li>
                  Once the game is over, the user will be redirected to the
                  results page.
                </li>
              </ul>
              <button
                type="button"
                className="start-button-styling"
                onClick={renderActiveness}
              >
                Start Playing
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default EmojiGameRoute
