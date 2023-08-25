//Funcion que devuelva los datos del JSON
const API_URL = "https://api.spacexdata.com/v3";


export async function getAllLaunches() {
    try {
        const response = await fetch(`${API_URL}/launches`);
        //Aqui esta la respuesta en el json
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error)
    }
}

export async function getLaunchByFlightNumber(flightNumber){
    try {
        const response = await fetch(`${API_URL}/launches/${flightNumber}`);
        //Aqui esta la respuesta en el json
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}
