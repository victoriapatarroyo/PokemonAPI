// Almacena el Pokémon encontrado en la última búsqueda.
// Se usa para agregarlo a favoritos después.
let pokemonEncontrado = null;

// Busca un Pokémon por nombre o número usando la PokéAPI
function searchPokemon() {
  // Lee el valor del input y lo convierte a minúsculas
  const nombre = document
    .getElementById("inputNombrePokemon")
    .value.trim()
    .toLowerCase();

  // Valida que el campo no esté vacío
  if (!nombre) {
    alert("Escribe un nombre de Pokémon");
    return;
  }

  const resultado = document.getElementById("resultado");
  const favAction = document.getElementById("fav-action");

  // Muestra el spinner mientras se espera la respuesta
  resultado.innerHTML =
    '<div class="spinner-wrap"><div class="spinner"></div></div>';
  favAction.style.display = "none";

  // Llama a la PokéAPI con el nombre ingresado
  fetch("https://pokeapi.co/api/v2/pokemon/" + nombre)
    .then(function (response) {
      // Si la respuesta no es exitosa (ej: Pokémon no existe), lanza un error
      if (!response.ok) throw new Error("No encontrado");
      return response.json();
    })
    .then(function (data) {
      // Guarda los datos relevantes del Pokémon encontrado
      pokemonEncontrado = {
        id: data.id,
        name: data.name,
        // Usa el arte oficial si está disponible, si no el sprite pequeño
        img:
          data.sprites.other["official-artwork"].front_default ||
          data.sprites.front_default,
        sprite: data.sprites.front_default, // sprite pequeño para la lista de favoritos
        types: data.types.map((t) => t.type.name),
      };

      // Formatea el número con ceros a la izquierda (ej: 25 → "025")
      const numero = String(data.id).padStart(3, "0");

      // Construye los badges de tipo como spans con la clase CSS correspondiente
      const tipos = pokemonEncontrado.types
        .map((t) => `<span class="tipo ${t}">${t}</span>`)
        .join("");

      // Renderiza la tarjeta del Pokémon en el DOM
      resultado.innerHTML = `
                <div class="pokemon-card">
                    <img src="${pokemonEncontrado.img}" alt="${pokemonEncontrado.name}">
                    <div>
                        <div class="pokemon-numero">#${numero}</div>
                        <div class="pokemon-nombre">${pokemonEncontrado.name}</div>
                        <div class="tipos">${tipos}</div>
                    </div>
                </div>`;

      // Muestra el botón para agregar a favoritos
      favAction.style.display = "flex";
    })
    .catch(function () {
      // Si hubo un error, limpia el Pokémon actual y muestra un mensaje
      pokemonEncontrado = null;
      resultado.innerHTML = `<div class="error">⚠️ Pokémon "<strong>${nombre}</strong>" no encontrado.</div>`;
      favAction.style.display = "none";
    });
}

// Agrega el Pokémon actual a la lista de favoritos en localStorage
function saveFavorite() {
  // Verifica que haya un Pokémon buscado
  if (!pokemonEncontrado) {
    alert("Primero busca un Pokémon.");
    return;
  }

  // Carga los favoritos guardados (o un arreglo vacío si no hay ninguno)
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Verifica que el Pokémon no esté ya en favoritos
  const repetido = favoritos.some((p) => p.name === pokemonEncontrado.name);
  if (repetido) {
    alert("Este Pokémon ya está en favoritos.");
    return;
  }

  // Agrega el Pokémon y guarda la lista actualizada
  favoritos.push(pokemonEncontrado);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  // Refresca la sección de favoritos en pantalla
  updateFavoritesList();
}

// Elimina un Pokémon de favoritos por nombre
function removeFavorite(name) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Filtra la lista excluyendo el Pokémon con ese nombre
  favoritos = favoritos.filter((p) => p.name !== name);

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  updateFavoritesList();
}

// Elimina todos los favoritos tras confirmar con el usuario
function clearFavorites() {
  if (!confirm("¿Eliminar todos los favoritos?")) return;
  localStorage.removeItem("favoritos");
  updateFavoritesList();
}

// Renderiza la lista de favoritos en el DOM
function updateFavoritesList() {
  const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
  const section = document.getElementById("favoritos-section");
  const grid = document.getElementById("favoritos");

  // Si no hay favoritos, oculta la sección completa
  if (favs.length === 0) {
    section.style.display = "none";
    return;
  }

  // Muestra la sección y genera una tarjeta por cada favorito
  section.style.display = "block";
  grid.innerHTML = favs
    .map(
      (p) => `
        <div class="fav-card">
            <button class="fav-quitar" onclick="removeFavorite('${p.name}')" title="Quitar">✕</button>
            <img src="${p.sprite}" alt="${p.name}">
            <div class="fav-nombre">${p.name}</div>
            <div class="fav-numero">#${String(p.id).padStart(3, "0")}</div>
        </div>`,
    )
    .join("");
}

// Permite buscar presionando Enter en el input
document
  .getElementById("inputNombrePokemon")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") searchPokemon();
  });

// Carga los favoritos guardados al iniciar la página
updateFavoritesList();
