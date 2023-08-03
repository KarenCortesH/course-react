import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  //activar y desactivar el efecto que tenemos
  const [enabled, setEnabled] = useState(false);
  //Guardar position del objeto
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('efecto', { enabled })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    //esto es para limpiar y cuando cambie la dependencia
    //CLEAN UP
    return () => {
      console.log("cleanup")
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])
  return (
    <>
      <div style={
        {
          position: 'absolute',
          backgroundColor: '#000',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }
      }>

      </div>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactive' : 'Active'} Activar Seguir Puntero</button>
    </>
  )
}

//Componente Padre esta renderizando 
function App() {

  //estado para desmontar el componente
  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <FollowMouse></FollowMouse>}
      <button onClick={() => setMounted(!mounted)}>
        Toggle Mounted FollowMouse component
      </button>
    </main>
  )
}
export default App
