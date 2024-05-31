import { useState } from 'react'
import GameManager from './componnents/GameManager'
import TextEditor from './componnents/textEditorComponents/TextEditor'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedComponent, setSelectedComponent] = useState(null)

  const renderComponent = () => {
    if (selectedComponent === 'gameManager') {
      return (
        <>
          <GameManager />
          <button onClick={() => setSelectedComponent(null)}>Back</button>
        </>
      )
    }
    if (selectedComponent === 'textEditor') {
      return (
        <>
          <TextEditor />
          <button onClick={() => setSelectedComponent(null)}>Back</button>
        </>
      )
    }
    return (
      <div className="button-container">
        <button onClick={() => setSelectedComponent('gameManager')}>Game Manager</button>
        <button onClick={() => setSelectedComponent('textEditor')}>Text Editor</button>
      </div>
    )
  }

  return (
    <div className="App">
      {renderComponent()}
    </div>
  )
}  

export default App
