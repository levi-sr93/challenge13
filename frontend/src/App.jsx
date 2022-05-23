import { useState } from 'react'
import { Button, Logo,TextBox, ResultBox, Tooltip, Box} from './components'
import { removeTextQuotes } from './shared/utilities'
import './App.css'

function App() {
  const [editedText, setEditedText ] = useState("")
  const [userTypingText, setUserTypingText ] = useState("")

  const handleRemoveTextQuotes = () => {
  setEditedText(removeTextQuotes(userTypingText))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>

      <main>
        <h2>1 - Remove Quotes</h2>
        <section className='Text-section'>
          <div className='Text-typing'>
            <TextBox 
              value={userTypingText}
              onFocus={() => setEditedText("")}
              onChange={(e) => setUserTypingText(e.target.value)}
            />
            <Button
              className="Button"
              buttonLabel="Remove Quotes"
              handleClick={handleRemoveTextQuotes} 
            />
          </div>

          <div className='Text-result'>
            { editedText && (
              <>
                <h3>Result:</h3>
                <ResultBox editedText={editedText} />      
              </>
            )
            }
          </div>
        </section>

        <section className='Tooltips'>
          <h2>2 - Tooltip</h2>
            <div className='Tooltips-boxes'>
              <Tooltip content={"Tooltip top"} direction="top" >
                <Box textContent="Top Tooltip" className=".Box" />
              </Tooltip>

              <Tooltip content={"Tooltip right"} direction="right" >
                <Box textContent="right Tooltip" className=".Box" />
              </Tooltip> 

              <Tooltip content={"Tooltip bottom"} direction="bottom" >
                <Box textContent="bottom Tooltip" className=".Box" />
              </Tooltip> 

              <Tooltip content={"Tooltip left"} direction="left" >
                <Box textContent="left Tooltip" className=".Box" />
              </Tooltip>  
            </div>
        </section>
      </main>
    </div>
  )
}

export default App
