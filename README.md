# QuickPost

**QuickPost** es una aplicación web de mensajería que permite a los usuarios enviar y recibir mensajes a través de un servidor backend basado en **Node.js** con **Express** y almacenarlos en una base de datos **MongoDB Atlas**. La aplicación utiliza un diseño frontend sencillo basado en **HTML**, **CSS** y **JavaScript**, ejecutado a través de contenedores Docker para garantizar portabilidad y facilidad de implementación.

## Tabla de Contenidos
1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Iniciar el Proyecto](#iniciar-el-proyecto)
    1. [Requisitos](#requisitos)
    2. [Configuración del Proyecto](#configuración-del-proyecto)
    3. [Ejecutar con Docker](#ejecutar-con-docker)
5. [Contribución](#contribución)
6. [Licencia](#licencia)
7. [Contacto](#contacto)


## Descripción del Proyecto

QuickPost es una plataforma de mensajería que permite a los usuarios interactuar a través de mensajes simples. Los mensajes son gestionados por un servidor backend que se conecta a MongoDB Atlas para el almacenamiento. El frontend es sencillo y utiliza tecnologías modernas para ofrecer una experiencia de usuario rápida y eficiente.

Este proyecto está diseñado para ejecutarse en contenedores Docker, lo que hace que sea fácil de configurar, desplegar y ejecutar tanto en desarrollo como en producción.


## Tecnologías Utilizadas

El proyecto está compuesto por dos partes principales: **Backend** y **Frontend**, cada una utilizando diversas tecnologías.

### Backend
- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
- **Express.js**: Framework para Node.js que facilita la creación de aplicaciones web.
- **MongoDB Atlas**: Base de datos NoSQL en la nube.
- **Mongoose**: Biblioteca de modelado de objetos MongoDB para Node.js.
- **dotenv**: Carga de variables de entorno desde un archivo `.env`.

### Frontend
- **HTML5**: Lenguaje de marcado para estructurar la página.
- **CSS3**: Lenguaje de estilo para diseñar la interfaz.
- **JavaScript**: Lenguaje de programación para interactividad en el cliente.

### Contenedores
- **Docker**: Plataforma para desarrollar, enviar y ejecutar aplicaciones dentro de contenedores.
- **Docker Compose**: Herramienta para definir y ejecutar aplicaciones multicontenedor.


## Estructura del Proyecto

La estructura del proyecto sigue una arquitectura simple, donde los archivos se organizan en directorios según su propósito. Aquí se muestra una representación de la estructura del proyecto:

```
QuickPost/ 
├── .github/ 
│ └── workflows/ 
│ └── CompilationTest.yml
│ └── DeployVercel.yml
│ └── UnitTest.yml
├── .configs/ 
│ ├── Dockerfile.backend
│ └── Dockerfile.frontend
├── src/ 
│ ├── css/ 
│ │ └── style.css
│ ├── js/ 
│ │ ├── unitTest.js
│ │ ├── index.js
│ │ └── script.js
│ ├── img/
│ └── index.html 
├── .env (Create this file locally in your computer)
├── .gitignore
├── Docker-compose.yml
├── package-lock.json
├── package.json
└── README.md
```

## Iniciar el Proyecto

### Requisitos

Para poder ejecutar el proyecto, asegúrate de tener los siguientes requisitos instalados en tu máquina:

- [Docker](https://www.docker.com/get-started)
- [Node js](https://nodejs.org/) (para pruebas locales)
- [Git](https://git-scm.com/) (para el repositorio)

### Configuración del Proyecto

1. **Clonar el repositorio**:

```
git clone https://github.com/tu_usuario/QuickPost.git
cd QuickPost
```
      
2. Configurar el archivo .env:

En la carpeta raiz debes crear un archivo `.env`, una vez hecho, dentro del archivo .env, debes agregar las variables necesarias para conectar con MongoDB Atlas y otras configuraciones. Por ejemplo:

```
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/quickpost?retryWrites=true&w=majority
PORT=5000
```

Asegúrate de reemplazar `<usuario>` y `<contraseña>` con las credenciales correspondientes de tu cuenta de MongoDB Atlas.

3. Instalar dependencias:

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```
npm install
```

# Ejecutar con Docker

Construir y levantar los contenedores con Docker Compose:

En el directorio raíz del proyecto, ejecuta el siguiente comando para construir y levantar el contenedor:

```
docker-compose up --build
```

Este comando construirá las imágenes de Docker para el frontend y backend y las ejecutará en contenedores separados.

2. Acceder al servidor:

El servidor backend estará disponible en http://localhost:5000. Puedes probar las rutas de la API, como GET /api/mensajes y POST /api/mensajes.


# Contribución
Si deseas contribuir a este proyecto, puedes hacerlo siguiendo estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama nueva para tu característica o corrección.
3. Haz tus cambios y asegúrate de que todo esté funcionando correctamente.
4. Envía un pull request con una descripción detallada de tus cambios.
5. Asegúrate de que todo el código esté bien documentado y realiza pruebas adecuadas antes de enviar tu pull request.


# Licencia
Este proyecto está bajo la licencia MIT - ver el archivo LICENSE para más detalles.


# Contacto
Si tienes preguntas o necesitas más información sobre el proyecto, no dudes en contactarnos a través de las siguientes maneras:

Email: thisemaildoenstexists@gmai.com
GitHub: https://github.com/01010011011001010110010001110100

