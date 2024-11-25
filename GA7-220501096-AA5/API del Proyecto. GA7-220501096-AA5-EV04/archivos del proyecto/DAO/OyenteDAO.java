package com.co.DAO; // Este es el paquete donde se encuentra la clase. Los paquetes se utilizan para organizar el código de forma estructurada.

// Aquí vamos a hacer el manejo del CRUD (Crear, Leer, Actualizar, Eliminar).

import com.co.pojo.Oyente; // Importamos la clase "Oyente" que representa a un oyente o usuario en la aplicación.
import org.springframework.data.repository.CrudRepository; // Importamos "CrudRepository", que nos permitirá realizar operaciones CRUD en la base de datos.

/*
 * CRUD significa Crear, Leer, Actualizar y Eliminar. Son las acciones básicas que se pueden realizar con los datos de una base de datos.
 * Con "CrudRepository" podemos manejar estas acciones de forma automática, sin tener que escribir el código manualmente para cada operación.
 * Esto facilita muchísimo el desarrollo y el mantenimiento del código.
 */

// DAO: Objeto de acceso a datos.
// DAO (Data Access Object) es un patrón de diseño que se utiliza para separar la lógica de la aplicación del acceso a la base de datos.
// En resumen, DAO nos permite conectar nuestro programa con la base de datos y realizar operaciones con los datos.

/*
 * DAO (Data Access Object):
 * Un DAO es una especie de "puente" entre nuestra aplicación y la base de datos.
 * Define métodos para acceder a la base de datos, como guardar, buscar, actualizar o eliminar información.
 * Esto nos ayuda a mantener la lógica del programa separada del acceso a los datos, haciendo el código más ordenado y fácil de entender.
 */

public interface OyenteDAO extends CrudRepository<Oyente, String> {
    // Esta interfaz extiende (es decir, hereda las funciones de) "CrudRepository".
    // Esto significa que podemos usar las funciones de "CrudRepository" para interactuar con la tabla "oyente" de la base de datos.
    // En este caso, podemos realizar todas las acciones de CRUD (Crear, Leer, Actualizar y Eliminar) para los oyentes.
    
    // Primer parámetro genérico "Oyente" indica el tipo de entidad con el que vamos a trabajar.
    // Es decir, esta interfaz se utilizará para manejar objetos de tipo "Oyente", que son nuestros usuarios.
    
    // Segundo parámetro genérico "String" indica el tipo de dato del identificador único de la entidad.
    // En este caso, el "username" de cada oyente es el identificador único, y es de tipo String (texto).
    
    /* Nota:
     * Al utilizar esta interfaz en un controlador, se pueden realizar operaciones como:
     * - oyenteDao.save(oyente): para guardar un nuevo oyente en la base de datos.
     * - oyenteDao.findById(username): para buscar un oyente por su nombre de usuario.
     * - oyenteDao.deleteById(username): para eliminar un oyente usando su nombre de usuario.
     * 
     * Todo esto lo podemos hacer sin necesidad de escribir el código completo para esas operaciones.
     * Gracias a que heredamos de "CrudRepository", todas esas funciones ya vienen listas para ser usadas.
     */
}
