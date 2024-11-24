
        const apiKey = '83ab677dd66abff188f6d60a21902fae'; // Tu clave de API de TMDb
        const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&sort_by=popularity.desc&language=es';

        async function obtenerPeliculaRecomendada() {
            try {
                // Realizar la solicitud a la API de TMDb
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2FiNjc3ZGQ2NmFiZmYxODhmNmQ2MGEyMTkwMmZhZSIsIm5iZiI6MTcyOTQ3MTIwNS4zMjY1NjUsInN1YiI6IjY3MTVhMWJjY2VmMTQ2MjhmZWY2MDRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XxskF6w9z63KWR36e4wz9-SflaTcPsm--BCitSQY178'
                    }
                });
                if (!response.ok) {
                    throw new Error('Error al obtener la película');
                }

                const data = await response.json();
                // Obtener una película aleatoria de los resultados
                const peliculas = data.results;
                const peliculaAleatoria = peliculas[Math.floor(Math.random() * peliculas.length)];

                // Obtener los elementos del DOM
                const movieContainer = document.getElementById('movie-container');
                const movieTitle = document.getElementById('movie-title');
                const movieOverview = document.getElementById('movie-overview');

                // Actualizar los elementos del DOM con la información de la película
                movieContainer.style.backgroundImage = 'url(https://image.tmdb.org/t/p/w1280' + peliculaAleatoria.backdrop_path + ')'; // URL de la imagen de fondo
                movieTitle.textContent = peliculaAleatoria.title; // Título de la película
                movieOverview.textContent = peliculaAleatoria.overview; // Resumen de la película

            } catch (error) {
                console.error('Hubo un error:', error);
            }
        }

        // Llamar a la función para obtener la película recomendada
        obtenerPeliculaRecomendada();
