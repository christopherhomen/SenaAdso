package com.co; // Este es el paquete donde está guardado este archivo. Los paquetes ayudan a organizar el código, como carpetas dentro de una computadora.

// Importamos algunas clases necesarias de Spring Framework:
import org.springframework.boot.SpringApplication; // Importa la clase "SpringApplication", que nos ayuda a iniciar nuestra aplicación.
import org.springframework.boot.autoconfigure.SpringBootApplication; // Importa la anotación "@SpringBootApplication", que simplifica la configuración de nuestra aplicación.

// Esta anotación "@SpringBootApplication" le dice a Spring que esta clase es la principal para iniciar la aplicación.
// Combina tres anotaciones importantes (@Configuration, @EnableAutoConfiguration, @ComponentScan) para configurar todo automáticamente.
// En resumen, con esta sola línea Spring se encarga de preparar todo para que nuestra aplicación funcione correctamente.
@SpringBootApplication
public class PerformanceSpringApplication {

    // Aquí comienza el método principal (el método "main") que es donde se inicia la aplicación.
    // Piensa en este método como el botón de "encendido" de la aplicación.
    public static void main(String[] args) {
        // La siguiente línea es la que realmente enciende la aplicación.
        // "SpringApplication.run" es como presionar ese botón de encendido, hace que nuestra aplicación empiece a funcionar.
        // "PerformanceSpringApplication.class" es la clase que Spring usa como punto de partida.
        SpringApplication.run(PerformanceSpringApplication.class, args);
    }
}

// En resumen:
// Este archivo es el punto de partida para que nuestra aplicación Spring comience a funcionar.
// Tiene una clase principal llamada "PerformanceSpringApplication".
// El método "main" es el encargado de arrancar la aplicación con la ayuda de "SpringApplication.run()".
// Con la anotación "@SpringBootApplication", le decimos a Spring que haga toda la configuración necesaria automáticamente para que nuestra aplicación se inicie sin problemas.
