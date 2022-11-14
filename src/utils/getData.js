const API = "https://rickandmortyapi.com/api/character/";

async function getData (id){
  const apiURL = id ? `${API}${id}` : API;

  try{
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  }
  catch(err){
    console.log(err);
  }
}

export default getData;