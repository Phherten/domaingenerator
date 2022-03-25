let pronombre = ["mi", "la", "una", "esta"];
let adjetivo = ["gran", "fantastica", "pequeña", "increible"];
let nombre = ["aventura", "escapada", "experiencia", "bicicleta"];

for (let i = 0; i < pronombre.length; i++) {
  for (let x = 0; x < adjetivo.length; x++) {
    for (let y = 0; y < nombre.length; y++) {
      {
        console.log(pronombre[i] + adjetivo[x] + nombre[y] + ".com");
      }
    }
  }
}
