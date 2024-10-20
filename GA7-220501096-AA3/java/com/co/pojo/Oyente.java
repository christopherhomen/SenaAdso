
package com.co.pojo;
import lombok.Data;
import java.io.Serializable;
import javax.persistence.*;//connection a la base de d

//modelo:
//serialiacion me combierte el objeto en un flujo de datos, el obeto edta dentro de la clase con sus atributos con serialize puedo usar sus atributos al llamar a este objeto, para ller, guardar y usar sus datos 

//POJO: Nos permite establecer los atributos de mi tabla Oyente :mapeo objeto relacional 
/*POJO (Plain Old Java Object) es un término que se utiliza para referirse a un objeto Java simple que no está ligado a ninguna tecnología o framework específico. Un POJO solo tiene atributos y métodos para acceder y modificar esos atributos, y no tiene ninguna otra funcionalidad adicional. En el contexto de la persistencia de datos, un POJO suele representar una entidad en la base de datos.*/
@Data // Esta anotación de Lombok genera automáticamente los métodos getter, setter, toString, equals y hashCode para todos los atributos de la clase
@Entity // Esta anotación indica que esta clase es una entidad JPA:UNA TABLA y se debe mapear a una tabla en la base de datos
@Table(name="oyente") // Esta anotación especifica el nombre de la tabla en la base de datos a la que se debe mapear esta entidad
public class Oyente implements Serializable{ // Esta clase implementa la interfaz Serializable para permitir su serialización
    @Id // Esta anotación indica que este atributo es el identificador único de la entidad
    private String username; // Nombre de usuario del oyente
    private String contrasena; // Contraseña del oyente
    private String nombre_oyente; // Nombre del oyente
    private String apellido_oyente; // Apellido del oyente
    private String email_oyente; // Correo electrónico del oyente
    private String pais_oyente; // País del oyente
}
