// let userInput = document.querySelector(".user-input").value;
let pokeForm = document.querySelector(".search-form");
pokeForm.addEventListener("submit", getPokemon);
function getPokemon(event) {
  event.preventDefault();
  let userInput = document.querySelector(".poke-index").value;
  getPokemonByIndex(userInput);
}

// function getPokemonByName(userInput) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
//     .then(response => response.json())
//     .then(apiData => {
//       let spriteUrl = apiData.sprites.front_default;
//       let spriteImg = document.createElement("img");
//       spriteImg.setAttribute("src", spriteUrl);
//       document.body.appendChild(spriteImg);
//       let pokemonNumber = apiData.id;
//       document.querySelector(".pokemon-id").innerText = `No. ${pokemonNumber}`;
//       let pokemonName = apiData.name;
//       document.querySelector(".pokemon-name").innerText = pokemonName;
//       let pokemonHeight = apiData.height;

//       document.querySelector(
//         ".pokemon-height"
//       ).innerText = `HT: ${pokemonHeight}`;
//       let pokemonWeight = apiData.weight;
//       document.querySelector(
//         ".pokemon-weight"
//       ).innerText = `HT: ${pokemonWeight}`;
//       let pokemonDescUrl = apiData.species.url;
//       fetch(pokemonDescUrl)
//         .then(response => response.json())
//         .then(apiData => {
//           pokemonGenusArray = apiData.genera;
//           pokemonDescArray = apiData.flavor_text_entries;
//           for (const desc of pokemonDescArray) {
//             if (desc.language.name === "en") {
//               document.querySelector(".pokemon-desc").innerText =
//                 desc.flavor_text;
//               break;
//             }
//           }
//           for (const genus of pokemonGenusArray) {
//             if (genus.language.name === "en") {
//               document.querySelector(".pokemon-genus").innerText = genus.genus;
//               break;
//             }
//           }
//         });
//     });
// }

function getPokemonByIndex(userInput) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
    .then(response => response.json())
    .then(apiData => {
      document.querySelector(".pokemon-display").classList.add("show");
      let spriteUrl = apiData.sprites.front_default;
      let spriteImg = document.querySelector(".img");
      spriteImg.setAttribute("src", spriteUrl);
      let pokemonNumber = apiData.id;
      document.querySelector(".pokemon-id").innerText = `No. ${pokemonNumber}`;
      let pokemonName = apiData.name;
      pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
      document.querySelector(".pokemon-name").innerText = pokemonName;
      let pokemonHeight = apiData.height;
      document.querySelector(
        ".pokemon-height"
      ).innerText = `HT: ${pokemonHeight} m`;
      let pokemonWeight = apiData.weight;
      document.querySelector(
        ".pokemon-weight"
      ).innerText = `WT: ${pokemonWeight} kg`;
      let pokemonDescUrl = apiData.species.url;
      fetch(pokemonDescUrl)
        .then(response => response.json())
        .then(apiData => {
          pokemonGenusArray = apiData.genera;
          pokemonDescArray = apiData.flavor_text_entries;
          for (const desc of pokemonDescArray) {
            if (desc.language.name === "en") {
              document.querySelector(".pokemon-desc").innerText =
                desc.flavor_text;
              break;
            }
          }
          for (const genus of pokemonGenusArray) {
            if (genus.language.name === "en") {
              document.querySelector(".pokemon-genus").innerText = genus.genus;
              break;
            }
          }
        });
    });
}

// getPokemonByName();
