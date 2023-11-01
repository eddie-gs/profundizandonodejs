#API Tareas con NodeJs

En primer lugar creamos una API REST utilizando express y definimos el número de puerto. 
Posteriormente, creamos un objeto llamado "tareas" que funcionará como base para todos los métodos definidos a continuación:

##GET request - /tareas
Devuelve una lista de todas las tareas


Ejemplo request body: Ninguno


##POST request - /tareas
Agrega una nueva tarea a la lista


Ejemplo request body: {“tarea”: “Limpiar ventana”}


##PUT request - /tareas/:id
Actualiza la tarea en el ID indicado en la URL


Ejemplo request body: {“tarea”: “Limpiar ventana”}


##DELETE request - /tareas/:id
Elimina la tarea con el ID indicado en la URL


Ejemplo request body: {“tarea”: “Limpiar ventana”}
