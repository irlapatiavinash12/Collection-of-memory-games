import './index.css'

const EachEmoji = props => {
  const {eachItem, onSelection} = props
  const {id, emojiName, emojiUrl} = eachItem

  const initateTrigger = () => {
    onSelection(id)
  }
  return (
    <li className="game-emojis-container">
      <button type="button" className="each-emoji-icon-button">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="game-emoji-icon"
          onClick={initateTrigger}
        />
      </button>
    </li>
  )
}

export default EachEmoji
