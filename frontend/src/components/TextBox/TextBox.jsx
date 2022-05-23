import "./styles.css"
export const TextBox = ({...rest}) => {
  return (
    <textarea 
      className='Text-area'
      name="textArea"
      id="textArea"
      cols="30"
      rows="10"
      {...rest}
    />
  )
}