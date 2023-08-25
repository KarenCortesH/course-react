//Creare funcion que devuelva los datos de la url
const API_URL = "https://api.spacexdata.com/v3";

export async function getAllLaunches(){
    return fetch(`${API_URL}/launches`).then(response => {
        return response.json();
    })
}
