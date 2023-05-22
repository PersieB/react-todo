import { useState } from 'react'

// custom component
import CustomForm from './components/CustomForm'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='container'>
        <header>
          <h1> My Todo Tasks </h1>
        </header>
        <CustomForm />
      </div>

  )
}

export default App
