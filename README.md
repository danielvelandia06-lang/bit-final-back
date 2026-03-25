⚙️ Mi Backend (Proyecto Final)
Este es el motor de mi aplicación. Aquí es donde se guardan las tareas, se conectan con la base de datos y se envían al frontend para que todo funcione.

🛠️ ¿Qué tiene por dentro?
Node.js & Express: La base de todo el servidor.

CORS: Configurado para que mi frontend de Angular pueda hablar con este servidor sin problemas.

Rutas (API): Tiene los puntos listos para pedir las tareas (GET), crear nuevas, y más.

🚀 ¿Cómo lo pones a correr?
Clona el repo.

Abre la terminal en la carpeta del proyecto.

Instala lo necesario:

Bash
npm install
Arranca el servidor:

Bash
npm start
(O node index.js si no tienes el script de start).

El servidor se queda escuchando en el puerto 3000. Si vas a http://localhost:3000/tareas, deberías ver tus datos en formato JSON.

💡 Importante
Si vas a probar el frontend al mismo tiempo, ¡no cierres esta terminal! El backend tiene que estar prendido para que la tabla de tareas no te salga vacía.

Hecho por Daniel Velandia
