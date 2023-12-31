const express = require("express"); // Importa ExpressJS

const app = express(); // Crea una instancia de ExpressJS

const port = 3000;

let tareas = [{id: 1, tarea: "Lavar platos"}]

app.use(express.json()); // Permite que el servidor analice el cuerpo de las peticiones como JSON

app.get("/", (req, res) => {
  // El primer parámetro SIEMPRE es asociado a la request (petición) y el segundo a la response (respuesta)
  res.send("<h1>Bienvenid@ al servidor de tareas :3</h1>");
}); 

app.get("/tareas", (req, res) => {
  res.json(tareas); // Enviamos todo el array
});

app.get("/tareas/:index", (req, res) => {
 
  res.json(tareas[req.params.index]); // Enviamos el elemento solicitado por su índice
});

app.post("/tareas", (req, res) => {
 
  let newElem = {id: tareas[tareas.length-1].id+1,
                 tarea: req.body.tarea}

  tareas.push(newElem); // Añadimos un nuevo elemento al array

  res.json(req.body); // Le respondemos al cliente el objeto añadido
});

app.put("/tareas/:index", (req, res) => {
 
  if (tareas.filter((p)=> p.id === Number(req.params.index)).length > 0) { //Chequea si existe un elemento con esa ID
    posicionElem = tareas.map((p)=> p.id).indexOf(Number(req.params.index)) //Encontramos la posicion del elemento en el array
    nuevoElem = req.body
    nuevoElem.id = Number(req.params.index)
    antesdeElem = tareas.slice(0,posicionElem)
    tareas = [...antesdeElem,nuevoElem,...tareas.slice(posicionElem+1)]
    res.json(tareas)
  }else{
    res.send("ID no encontrado")
  }
});

app.delete("/tareas/:index", (req, res) => {
  
  //console.log(Number(req.params.index) !== tareas[2].id)
  tareas = tareas.filter((p)=>{return p.id !== Number(req.params.index)})
  res.json(tareas)
});

// Esta línea inicia el servidor para que escuche peticiones en el puerto indicado
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
