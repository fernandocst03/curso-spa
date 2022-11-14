import getData from "../utils/getData";

async function Home(){
  const characters = await getData();

  const view = `
    <div class="Characters">
        ${characters.results.map(
          (character) => `
            <article class="Character-item">
              <a href="${character.id}">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
              </a>
            </article>
          `
        ).join("")}
    </div>
  `;
  return view;
};

export default Home; // Exportamos la función Home para poderla utilizar en otros archivos.