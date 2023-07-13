var todos = document.querySelector("#personaje");

todos.addEventListener("click", function () {
  obtenerPersonajes((personajes) => {
    personajes.forEach((personaje) => {
      var div = document.createRange().createContextualFragment(
        /*html*/
        `<div>
    <img src="${personaje.image}" alt="" id="foto">
    <h2>${personaje.name}</h2>
    </div>`
      );
      var contenedor = document.querySelector(".contenedor");
      contenedor.append(div);
    });
  });
});

function obtenerPersonajes(hecho) {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      hecho(data.results);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

/*var url = "https://rickandmortyapi.com/api/character";
fetch(url)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error));

var mostrarData = (data) => {
  console.log(data);
  var body = "";
  for (var i = 0; i < data.length; i++) {
    body += `<tr><td>${data[i].image}</tr><tr><td>${data[i].id}</tr></td>`;
  }
  document.getElementById("foto").innerHTML = body;
};
*/
