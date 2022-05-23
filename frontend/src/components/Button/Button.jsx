import "./styles.css"
export const Button = ({buttonLabel, handleClick}) => {
  return (
    <button className='Button' onClick={handleClick} >
      {buttonLabel}
    </button>
  )
}