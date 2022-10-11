window.addEventListener("load", () => {
  //variables
    const countriesContainer = document.getElementById("countries-container");
    const urlBase = 'https://restcountries.com/v3.1';
  //funciones
    const getCountriesFromAPI = async () => {
        try {
            const response = await fetch(`${urlBase}/all`);
            const data = await response.json();

            console.log(data);

        
        } catch (error) {
            console.error(error);
        }
    }

  //eventos

  //ejecuciones inmediatas
  getCountriesFromAPI();
});
