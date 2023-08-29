import { useState, useEffect } from 'react'
//_Importamos el heading de Chakra
import { Box, Heading, Image } from '@chakra-ui/react'
import * as API from './services/launches'
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
        {launches.map(launch => (
          <Box key={launch.flight_number} bg="gray.100" p={4} m={4} borderRadius="lg">
            {launch.mission_name}({launch.launch_year})
          </Box>

        ))}
      </section>
    </>
  )
}


export default App
