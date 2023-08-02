import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //activar y desactivar el efecto que tenemos
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    console.log('efecto');
  })
  return (
    <>
      <h3>Project Number 3</h3>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactive' : 'Active'} Activar Seguir Puntero</button>
    </>
  )
}

export default App
