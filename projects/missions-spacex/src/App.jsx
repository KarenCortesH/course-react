import { useState, useEffect } from 'react'
import * as API from './services/launches'
export function App() {
  //Vamos a guardar el array con los datos
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    //Cuando acabe la promesa vamos a obtener los datos
    API.getAllLaunches().then(setLaunches);
  },[]);

  return (
    <>
    <h1>SpaceX Launches</h1>
      <section>
        {launches.map(launch =>(
          <li  key={launch.flight_number}>
            {launch.mission_name}({launch.launch_year})
          </li>
        ))}
      </section>
    </>
  )
}


export default App
