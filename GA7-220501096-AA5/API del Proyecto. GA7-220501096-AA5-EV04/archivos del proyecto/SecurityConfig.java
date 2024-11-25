package com.co;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

// Esta clase es una clase de configuración de seguridad para nuestra aplicación.
// Define qué usuarios pueden acceder a qué partes del sistema y cómo se manejan las autenticaciones.
@Configuration // Marca esta clase como una clase de configuración de Spring.
@EnableWebSecurity // Habilita la seguridad web para la aplicación.
public class SecurityConfig extends WebSecurityConfigurerAdapter { // Esta clase extiende WebSecurityConfigurerAdapter para configurar la seguridad web.
    
    // Este método se encarga de definir los usuarios que se van a usar para autenticarse.
    protected void configure(AuthenticationManagerBuilder auth) throws Exception { 
        // Configuramos la autenticación en memoria, lo que significa que los usuarios están definidos aquí en el código (no en una base de datos).
        auth.inMemoryAuthentication() 
            .withUser("admin") // Definimos un usuario llamado "admin".
                .password("{noop}1234") // Establecemos su contraseña como "1234" (el "{noop}" indica que la contraseña no tiene cifrado).
                .roles("ADMIN", "USER") // Asignamos los roles "ADMIN" y "USER" al usuario "admin".
            .and() // Añadimos otro usuario.
            .withUser("user") // Definimos otro usuario llamado "user".
                .password("{noop}123") // Establecemos la contraseña de "user" como "123".
                .roles("USER"); // Este usuario solo tiene el rol "USER".
    }            

    /*
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // Este método define qué rutas de la aplicación son accesibles para qué usuarios y qué permisos necesitan.
        http.authorizeRequests() // Configura la autorización de acceso para las rutas de la aplicación.
                .antMatchers("/loginadmin").hasRole("ADMIN") // Solo los usuarios con el rol "ADMIN" pueden acceder a la ruta "/loginadmin".
                .antMatchers("/api/oyentes/**").permitAll() // Cualquier persona, sin importar si está autenticada o no, puede acceder a todas las rutas que comiencen con "/api/oyentes".
                .anyRequest().authenticated() // Todas las demás rutas necesitan que el usuario esté autenticado para poder acceder.
            .and()
                .formLogin() // Configuramos cómo será el inicio de sesión.
                    .loginPage("/login") // Especificamos que la página de inicio de sesión está en la ruta "/login".
                    .defaultSuccessUrl("/loginadmin") // Después de un inicio de sesión exitoso, se redirige al usuario a la página "/loginadmin".
                    .permitAll(); // Cualquier usuario puede acceder a la página de inicio de sesión, incluso si no está autenticado.
    }*/

    /*
    Este es un bloque comentado para deshabilitar CSRF (Cross-Site Request Forgery).
    CSRF es una medida de seguridad que evita ciertos ataques, pero puede dificultar la prueba de las solicitudes con herramientas como Postman.
    Deshabilitar CSRF puede facilitar las pruebas de las APIs.
    */
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()  // Deshabilita CSRF para simplificar las pruebas de los endpoints de la API.
            .authorizeRequests() // Configura las solicitudes autorizadas.
                .antMatchers("/loginadmin").hasRole("ADMIN") // Solo los usuarios con rol "ADMIN" pueden acceder a "/loginadmin".
                .antMatchers("/api/oyentes/**").permitAll() // Permite acceso sin autenticación a todas las rutas que empiecen con "/api/oyentes".
                .anyRequest().authenticated() // El resto de las rutas requieren autenticación.
            .and()
                .formLogin() // Configura el formulario de inicio de sesión.
                    .loginPage("/login") // Especifica la ruta del formulario de inicio de sesión.
                    .defaultSuccessUrl("/loginadmin") // Ruta a la que se redirige después de un inicio de sesión exitoso.
                    .permitAll(); // Permite acceso al formulario de login para todos.
    }
    
    
    
}
