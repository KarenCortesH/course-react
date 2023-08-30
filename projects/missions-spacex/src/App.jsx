import { useState, useEffect } from 'react'
import { Heading, Image } from '@chakra-ui/react'
import * as API from './services/launches'
import { LaunchItem } from './components/LaunchItem'
//aqui importamos el logo
import logo from './assets/logo-spacex.png'
export function App() {
  //Vamos a guardar el array con los datos
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    //Cuando acabe la promesa vamos a obtener los datos
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image margin={4} src={logo} width={300}></Image>
      <Heading as="h1" size="lg" margin={4}>SpaceX Launches</Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch}></LaunchItem>
        ))}
      </section>
    </>
  )
}


export default App
