/*
 * Este archivo contiene un controlador de página web llamado "ControladorInicio" que maneja
 * diferentes solicitudes que los usuarios pueden realizar desde su navegador, como ver la página principal,
 * iniciar sesión, registrarse, etc.
 */

package com.co;

import com.co.DAO.OyenteDAO; // Importamos la clase OyenteDAO para interactuar con la base de datos de oyentes.
import com.co.pojo.Oyente; // Importamos la clase Oyente, que representa a cada oyente (usuario) en nuestra aplicación.
import org.springframework.beans.factory.annotation.Autowired; // Importamos Autowired, que nos ayuda a inyectar automáticamente las dependencias necesarias.
import org.springframework.stereotype.Controller; // Importamos la anotación Controller para indicar que esta clase maneja la lógica de la página web.
import org.springframework.ui.Model; // Importamos Model para poder pasar información de nuestro sistema a las páginas HTML.
import org.springframework.web.bind.annotation.GetMapping; // Importamos GetMapping para manejar solicitudes HTTP de tipo GET.
import org.springframework.web.bind.annotation.ModelAttribute; // Importamos ModelAttribute para trabajar con los datos que los usuarios envían desde formularios.
import org.springframework.web.bind.annotation.PathVariable; // Importamos PathVariable para capturar valores desde la URL.
import org.springframework.web.bind.annotation.PostMapping; // Importamos PostMapping para manejar solicitudes HTTP de tipo POST.

// La anotación "@Controller" indica que esta clase es un controlador para manejar las solicitudes web y devolver vistas (páginas).
@Controller
public class ControladorInicio {

    // "@Autowired" indica que Spring debe proporcionar automáticamente una instancia de OyenteDAO para que podamos
    // interactuar con la base de datos sin tener que crear manualmente un objeto de OyenteDAO.
    @Autowired
    private OyenteDAO oyenteDao; // Instancia de OyenteDAO para realizar operaciones en la base de datos.

    // Este método maneja las solicitudes GET a la página principal "/".
    @GetMapping("/") // Cuando alguien visita la página principal, este método se ejecuta.
    public String inicio() {
        // Retorna el nombre de la página que se debe mostrar (en este caso "index").
        return "index";
    }

    // Este método maneja las solicitudes GET a la ruta "/login", que corresponde a la página de inicio de sesión.
    @GetMapping("/login")
    public String iniciosesion() {
        // Retorna el nombre de la vista "iniciosesion" para mostrar la página de inicio de sesión.
        return "iniciosesion";
    }

    // Este método maneja las solicitudes GET a la ruta "/register", para la página de registro de usuarios.
    @GetMapping("/register")
    public String registro() {
        // Retorna el nombre de la vista "register" para mostrar la página de registro de nuevos usuarios.
        return "register";
    }

    // Este método maneja las solicitudes GET a la ruta "/loginadmin".
    @GetMapping("/loginadmin")
    public String loginadmin(Model model) {
        // "Model" es un objeto que nos permite pasar información de nuestro sistema a la vista HTML.
        // Aquí estamos obteniendo todos los oyentes desde la base de datos usando oyenteDao.
        var oyentes = oyenteDao.findAll(); // Obtenemos todos los oyentes de la base de datos.
        model.addAttribute("oyentes", oyentes); // Añadimos la lista de oyentes al "model" para que la vista tenga acceso a ella.
        // Retorna la vista "loginadmin", que es la página donde se muestran los oyentes registrados.
        return "loginadmin";
    }

    // Este método maneja las solicitudes GET a la ruta "/crear".
    @GetMapping("/crear")
    public String crear() {
        // Retorna el nombre de la vista "crear" que muestra el formulario para crear un nuevo oyente (usuario).
        return "crear";
    }

    // Este método maneja las solicitudes POST a la ruta "/guardar", y se llama cuando se quiere guardar un oyente.
    @PostMapping("/guardar")
    public String guardar(@ModelAttribute Oyente oyentes) {
        // "@ModelAttribute" nos permite recibir un objeto Oyente que se crea automáticamente con los datos
        // que el usuario ingresó en el formulario.
        // Guardamos el nuevo oyente en la base de datos usando "oyenteDao".
        oyenteDao.save(oyentes);
        // Redirigimos al usuario a la página "/loginadmin" después de guardar el oyente.
        return "redirect:loginadmin";
    }

    // Este método maneja las solicitudes GET a la ruta "/editar/{username}".
    @GetMapping("/editar/{username}")
    public String editar(@PathVariable("username") String username, Model model) {
        // "@PathVariable" nos permite capturar el valor que el usuario escribió en la URL como parte del nombre del usuario.
        // Buscamos el oyente con el nombre de usuario proporcionado.
        var oyentes = oyenteDao.findById(username);
        // Añadimos el oyente encontrado al "model" para que la vista pueda mostrar los datos del oyente a editar.
        model.addAttribute("oyentes", oyentes);
        // Retorna la vista "modificar1", que muestra el formulario para editar al oyente.
        return "modificar1";
    }

    // Este método maneja las solicitudes GET a la ruta "/eliminar/{username}".
    @GetMapping("/eliminar/{username}")
    public String eliminar(@PathVariable("username") String username) {
        // Eliminamos el oyente de la base de datos usando el nombre de usuario proporcionado.
        oyenteDao.deleteById(username);
        // Redirigimos al usuario a la página "/loginadmin" después de eliminar al oyente.
        return "redirect:/loginadmin";
    }
}

/*
 * NOTA:
 * 
 * El uso de "@GetMapping" en lugar de "@PutMapping" en el método "editar" se debe a la manera en que se hace la edición de los usuarios en este caso.
 * 
 * En el formulario de edición de usuario, se utiliza un formulario HTML con el método "POST" y la acción "@{/guardar}".
 * Esto significa que cuando el usuario envía el formulario, los datos van al método "guardar" del controlador, que se encarga de actualizar la base de datos.
 * 
 * El método "editar" no guarda cambios en la base de datos; solo se utiliza para mostrar la página donde se pueden editar los datos del usuario.
 * 
 * Resumiendo:
 *  - "@GetMapping("/editar/{username}")" se usa para mostrar la página donde se editan los datos de un usuario específico.
 *  - "@PostMapping("/guardar")" se usa para guardar los cambios que el usuario hizo en la página de edición.
 * 
 * Ambos métodos tienen funciones distintas dentro del proceso de edición, y por eso utilizan anotaciones diferentes.
 */
