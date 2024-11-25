// Función para obtener el token de acceso a Spotify
async function obtenerTokenSpotify() {
    const client_id = 'f1b16c2196f54bc5af6bebb3dcdcb811';
    const client_secret = '8e271fe82c07474ab3b3d591e3eece49';
    const url = 'https://accounts.spotify.com/api/token';
    
    const auth = btoa(`${client_id}:${client_secret}`); // Codifica en Base64

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });

        if (!response.ok) {
            throw new Error('Error al autenticar con Spotify');
        }

        const data = await response.json();
        return data.access_token;

    } catch (error) {
        console.error('Error al obtener el token de acceso:', error);
    }
}

// Función para obtener el álbum más reproducido de Spotify
async function obtenerAlbumMasReproducido() {
    const token = await obtenerTokenSpotify();
    if (!token) return;

    // URL del endpoint de "Top Global Albums" o los más populares
    const apiUrl = 'https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp'; // Playlist "Top Global" de Spotify

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Error al obtener el álbum más reproducido');
        }

        const data = await response.json();
        const album = data.tracks.items[0].track.album; // Obtener el álbum del primer track más reproducido

        // Insertar los detalles del álbum en el HTML
        const albumCoverElement = document.getElementById('album-cover');
        albumCoverElement.src = album.images[0].url;
        albumCoverElement.alt = `Portada del álbum ${album.name}`;

        const albumTitleElement = document.getElementById('album-title');
        albumTitleElement.textContent = album.name;

        const albumArtistElement = document.getElementById('album-artist');
        albumArtistElement.textContent = album.artists.map(artist => artist.name).join(", ");

        const albumDescriptionElement = document.getElementById('album-description');
        albumDescriptionElement.textContent = `El álbum más reproducido es "${album.name}" de ${album.artists.map(artist => artist.name).join(", ")}. ¡Dale una escucha!`;

    } catch (error) {
        console.error('Error al obtener el álbum más reproducido:', error);
    }
}

// Llamar a la función para obtener el álbum más reproducido al cargar la página
obtenerAlbumMasReproducido();

// Actualizar el álbum más reproducido cada semana (604800000 ms = 1 semana)
setInterval(obtenerAlbumMasReproducido, 604800000);
