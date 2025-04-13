import DialogForm from './components/DialogForm.jsx'
import DialogWindow from './components/DialogWindow.jsx'

import './App.css'

function App() {
  return (
    <main className='wrapper'>
      <header className='header'>Чатбот</header>
      <DialogWindow />
      <DialogForm />
    </main>
  )
}

export default App
