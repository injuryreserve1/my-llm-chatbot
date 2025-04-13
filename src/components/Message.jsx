import PropTypes from 'prop-types'
import './message.css'

export default function Message({ author, contents }) {
  const formattedText = contents
    .replace(/<\/?think>/g, '')
    .trim()
    .split('\n')
    .map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ))

  //console.log(formattedText)
  return (
    <fieldset
      className={`message ${author === 'пользователь' ? 'human' : 'ai'}`}
    >
      <span className='role'>{author}</span>
      <div className='text'>
        <span>{formattedText}</span>
      </div>
    </fieldset>
  )
}

Message.propTypes = {
  author: PropTypes.string,
  contents: PropTypes.string,
}
