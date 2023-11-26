Enunciado
Crea una aplicación para buscar películas

const API_KEY = '4287ad07'

API a usar: - https://www.omdbapi.com/ Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.

✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)

form{
align-items: center;
display: flex;
justify-content: center;

}

.movies {
margin: 0;
padding: 0;
display: grid;
width:100%;
gap: 32px;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.movie {
text-align: center;
}

.movie h3, .movie p {
margin: 0;
}
.movie image {
border-radius: 8px;
margin-top: 16px;
}
