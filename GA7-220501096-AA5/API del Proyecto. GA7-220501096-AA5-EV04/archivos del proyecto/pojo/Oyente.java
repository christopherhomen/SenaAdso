package com.co.pojo;

import lombok.Data; // Importamos Lombok, una librería que nos ayuda a escribir menos código, generando automáticamente los métodos para nuestros atributos.
import java.io.Serializable; // Importamos Serializable para poder convertir nuestros objetos en datos que se puedan guardar o transmitir.
import javax.persistence.*; // Importamos las anotaciones de JPA para mapear los objetos a la base de datos.

// La clase "Oyente" representa a un oyente (usuario) de la aplicación. Esta clase contiene los detalles del oyente y es lo que llamamos un POJO.
// POJO significa "Plain Old Java Object", que es un objeto Java sencillo, sin depender de tecnologías especiales.
// Es decir, esta clase solo tiene atributos y métodos para acceder y modificar esos atributos (getters y setters).

/*
 * SERIALIZACIÓN:
 * La serialización convierte el objeto (en este caso, un oyente) en un flujo de datos.
 * Es decir, podemos guardar el objeto "Oyente" completo (incluyendo toda su información) en una base de datos, o enviarlo a través de la red.
 * Esto permite guardar, enviar y leer el objeto completo cuando lo necesitemos.
 */

@Data // Esta anotación de Lombok genera automáticamente métodos para los atributos de la clase.
// Por ejemplo, genera métodos para obtener los valores de los atributos (getters) y para cambiarlos (setters).
// También genera otros métodos útiles como "toString" (para convertir el objeto en una cadena de texto), "equals" y "hashCode".

@Entity // Esta anotación indica que esta clase es una "entidad JPA".
// Esto significa que la clase "Oyente" se conectará directamente con una tabla en la base de datos.
// JPA (Java Persistence API) es una tecnología que facilita guardar y recuperar datos de una base de datos.

@Table(name="oyente") // Esta anotación indica el nombre de la tabla en la base de datos que representa esta clase.
// En este caso, la tabla en la base de datos se llama "oyente".

public class Oyente implements Serializable { 
    // La clase "Oyente" implementa "Serializable" para permitir convertir los objetos de esta clase en datos (como un archivo o flujo de información) que se puedan almacenar o enviar.

    @Id // Esta anotación indica que el siguiente atributo ("username") será el identificador único de cada oyente en la base de datos.
    // En otras palabras, cada oyente tendrá un nombre de usuario único que lo identificará, similar a una "cédula" en la base de datos.
    private String username; // El nombre de usuario del oyente. Este atributo será único para cada oyente.

    private String contrasena; // La contraseña del oyente. Esto es lo que el oyente usará junto con su nombre de usuario para iniciar sesión.

    private String nombre_oyente; // El primer nombre del oyente. Este es el nombre real de la persona.

    private String apellido_oyente; // El apellido del oyente. Esto también es parte del nombre completo de la persona.

    private String email_oyente; // La dirección de correo electrónico del oyente. Se usará para comunicaciones con el oyente.

    private String pais_oyente; // El país del oyente. Este atributo nos dice de qué país es el oyente.

    /*
     * Cada atributo de la clase "Oyente" representa una columna en la tabla de la base de datos llamada "oyente".
     * Por ejemplo, "username" será una columna en la tabla que contendrá el nombre de usuario de cada oyente.
     */
}
