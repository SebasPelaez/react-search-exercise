# Desarrollo de aplicaciones empresariales

## Ejercicio de clase

El objetivo del ejercicio es desarrollar una aplicación Web en React que consuma la API de Mercadolibre para buscar productos de la tienda Mercadolibre Colombia.

**Criterios de aceptación**

* Los resultado se deben mostrar en pantalla indicando _Nombre_, _imagen_ y _valor_ del producto
* Se debe desplegar la aplicación en **Heroku**.
* Se debe también desplegar la aplicación en un contenedor **Docker** y subir la imagen a DockerHub

### Heroku

Para visualizar la aplicación desplegada en tiempo real se puede acceder dando click al enlace de [Heroku](https://guarded-coast-62236.herokuapp.com/)

### Docker

La imagen Docker de la aplicación también esta disponible y se puede accerder mediante los siguientes pasos.

1. En la línea de comandos insertar el siguiente código
```docker run -p 8080:80 sebaspelaez/empresariales-exercise:2.0```
2. Ingresar en el navegador 
``` localhost:8080 ```
3. Para finalizar la ejecución del contenedor se presiona conjuntamente las teclas
``` ctrl + c```


#### Referencias

El desarrollo de este ejercicio fue llevado a cabo gracias a 

Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Shane Osbourne [Docker Configuration](https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f).

Shakhor Smith [Deploy your React App To Heroku](https://dev.to/smithmanny/deploy-your-react-app-to-heroku-2b6f).

Mercado Libre Developers [Página Oficial](https://developers.mercadolibre.com/?lang=es_ar)
