const versiculos = [
  "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito... - Juan 3:16",
  "El Señor es mi pastor; nada me faltará. - Salmo 23:1",
  "Todo lo puedo en Cristo que me fortalece. - Filipenses 4:13",
  "Confía en el Señor con todo tu corazón, y no te apoyes en tu propia prudencia. - Proverbios 3:5",
  "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios. - Isaías 41:10",
  "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien. - Romanos 8:28",
  "Mira que te mando que te esfuerces y seas valiente. - Josué 1:9",
  "Lámpara es a mis pies tu palabra, y lumbrera a mi camino. - Salmo 119:105",
  "Jehová está conmigo; no temeré lo que me pueda hacer el hombre. - Salmo 118:6",
  "Buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas. - Mateo 6:33"
];

function mostrarVersiculo() {
  const random = Math.floor(Math.random() * versiculos.length);
  const contenedor = document.getElementById("verse-container");

  contenedor.style.opacity = 0;
  setTimeout(() => {
    contenedor.textContent = versiculos[random];
    contenedor.style.opacity = 1;
  }, 300);
}

document.getElementById("new-verse").addEventListener("click", mostrarVersiculo);