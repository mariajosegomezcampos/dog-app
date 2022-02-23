export const getBreeds = async () => {
    const url = "https://dog.ceo/api/breeds/list/all";
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    const razas = Object.keys(data.message);
    return razas;
  };