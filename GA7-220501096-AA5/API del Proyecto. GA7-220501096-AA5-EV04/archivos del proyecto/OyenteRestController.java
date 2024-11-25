package com.co;

import com.co.DAO.OyenteDAO; // Importamos la clase que nos ayuda a interactuar con la base de datos de oyentes.
import com.co.pojo.Oyente; // Importamos la clase Oyente que representa a los oyentes (usuarios) en nuestra aplicación.
import org.springframework.beans.factory.annotation.Autowired; // Importamos la anotación Autowired, que se usa para inyectar dependencias automáticamente.
import org.springframework.web.bind.annotation.GetMapping; // Importamos la anotación GetMapping para manejar solicitudes GET.
import org.springframework.web.bind.annotation.RequestMapping; // Importamos la anotación RequestMapping para definir las rutas básicas.
import org.springframework.web.bind.annotation.RestController; // Importamos RestController para que esta clase sea un controlador que maneje solicitudes REST (web).
import java.util.List; // Importamos la clase List para manejar listas de oyentes.
import java.util.Map; // Importamos la clase Map para trabajar con datos tipo clave-valor, por ejemplo, los datos del cuerpo de una solicitud.
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable; // Importamos PathVariable para capturar valores de la URL.
import org.springframework.web.bind.annotation.PostMapping; // Importamos PostMapping para manejar solicitudes POST.
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody; // Importamos RequestBody para obtener el cuerpo de la solicitud.

// Esta clase se encarga de manejar las solicitudes relacionadas con los "oyentes" (usuarios) de nuestra aplicación.
// "RestController" indica que esta clase va a recibir solicitudes desde la web y va a devolver información en formato JSON.
@RestController
@RequestMapping("/api") // Todas las rutas de este controlador empiezan con "/api".
public class OyenteRestController {

    // Inyectamos automáticamente una instancia de "OyenteDAO", que es la clase que nos permite interactuar con la base de datos de oyentes.
    @Autowired
    private OyenteDAO oyenteDao;

    // Este método se encarga de devolver una lista con todos los oyentes.
    // Cuando alguien hace una solicitud GET a "/api/oyentes/all", el sistema devuelve una lista con todos los oyentes.
    @GetMapping("/oyentes/all")
    public List<Oyente> getOyentes() {
        // Usamos "oyenteDao" para buscar todos los oyentes en la base de datos y los devolvemos como una lista.
        return (List<Oyente>) oyenteDao.findAll();
    }

    // Este método devuelve un oyente específico usando su nombre de usuario.
    // Cuando alguien accede a "/api/oyentes/{username}", se reemplaza "{username}" con el nombre del usuario que se está buscando.
    @GetMapping("/oyentes/{username}")
    public Oyente getOyenteById(@PathVariable("username") String username) {
        // Buscamos el oyente con el nombre de usuario proporcionado usando el oyenteDao.
        // Si el oyente no se encuentra, lanzamos un error con el mensaje "Oyente no encontrado con username: <nombre>".
        return oyenteDao.findById(username)
                .orElseThrow(() -> new RuntimeException("Oyente no encontrado con username: " + username));
    }

    // Este método permite buscar un oyente a través de una solicitud POST que contiene el nombre de usuario en el cuerpo de la petición.
    // Se utiliza cuando se hace una solicitud POST a "/api/oyentes/buscar".
    @PostMapping("/oyentes/buscar")
    public Oyente getOyenteByUsername(@RequestBody Map<String, String> payload) {
        // Primero verificamos si el campo "username" está presente en los datos enviados.
        // También verificamos si el campo "username" no es nulo o vacío.
        // Si no se proporciona el campo "username" o está vacío, lanzamos un error indicando que hubo un problema con los datos enviados.
        if (!payload.containsKey("username") || payload.get("username") == null || payload.get("username").isEmpty()) {
            throw new RuntimeException("El campo 'username' no se proporcionó correctamente.");
        }

        // Extraemos el valor del nombre de usuario del "payload" (los datos enviados en la solicitud).
        String username = payload.get("username");

        // Buscamos el oyente en la base de datos usando el nombre de usuario proporcionado.
        // Si el oyente no se encuentra, lanzamos un error indicando que no fue posible encontrarlo.
        return oyenteDao.findById(username)
                .orElseThrow(() -> new RuntimeException("Oyente no encontrado con username: " + username));
    }
    
    
    // Este método permite crear un nuevo oyente en la base de datos.
// Cuando se hace una solicitud POST a "/api/oyentes", se envían los datos necesarios en el cuerpo de la solicitud para crear el oyente.
@PostMapping("/oyentes")
public Oyente crearOyente(@RequestBody Oyente nuevoOyente) {
    // Guardamos el nuevo oyente en la base de datos usando el oyenteDao.
    return oyenteDao.save(nuevoOyente);
}


// Este método permite actualizar los datos de un oyente existente.
// Se utiliza cuando se hace una solicitud PUT a "/api/oyentes/actualizar".
@PutMapping("/oyentes/actualizar")
public Oyente actualizarOyente(@RequestBody Oyente oyenteActualizado) {
    // Primero verificamos si el oyente con el username proporcionado existe en la base de datos.
    Oyente oyenteExistente = oyenteDao.findById(oyenteActualizado.getUsername())
            .orElseThrow(() -> new RuntimeException("Oyente no encontrado con username: " + oyenteActualizado.getUsername()));
    
    // Actualizamos los datos del oyente existente con los nuevos datos proporcionados.
    oyenteExistente.setContrasena(oyenteActualizado.getContrasena());
    oyenteExistente.setNombre_oyente(oyenteActualizado.getNombre_oyente());
    oyenteExistente.setApellido_oyente(oyenteActualizado.getApellido_oyente());
    oyenteExistente.setEmail_oyente(oyenteActualizado.getEmail_oyente());
    oyenteExistente.setPais_oyente(oyenteActualizado.getPais_oyente());

    // Guardamos el oyente actualizado en la base de datos.
    return oyenteDao.save(oyenteExistente);
}


// Este método permite eliminar un oyente específico usando su nombre de usuario.
// Se utiliza cuando se hace una solicitud DELETE a "/api/oyentes/eliminar/{username}".
@DeleteMapping("/oyentes/eliminar/{username}")
public String eliminarOyente(@PathVariable("username") String username) {
    // Verificamos si el oyente existe en la base de datos antes de eliminarlo.
    Oyente oyente = oyenteDao.findById(username)
            .orElseThrow(() -> new RuntimeException("Oyente no encontrado con username: " + username));
    
    // Si el oyente existe, lo eliminamos de la base de datos.
    oyenteDao.deleteById(username);
    
    // Devolvemos un mensaje indicando que el oyente ha sido eliminado con éxito.
    return "Oyente con username: " + username + " ha sido eliminado exitosamente.";
}


}
