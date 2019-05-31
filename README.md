# React Search Service

## Business Application Development Course

The aim of this repository is development a React web application that uses the MercadoLibre API for search products in the Colombian Store.

## Acceptance Criteria

* The search results should be shown with _Name_, _Picture_ and _value_ of the product.
* The application should be hosted in **Heroku**.
* The application should be hosted in a Docker image and pushed to the Docker Hub.

### Heroku

To visualize the application in real time, you could visit this [Link](https://guarded-coast-62236.herokuapp.com/)

### Docker

The Docker image is available in this [Link](https://hub.docker.com/r/sebaspelaez/empresariales-exercise), or you can use it following these steps:

1. In the command line code
```docker run -p 8080:80 sebaspelaez/empresariales-exercise:2.0```
2. Open the browser in this url 
``` localhost:8080 ```
3. If you want to stop the container execution you need to type
``` ctrl + c```


#### Referencias

For doing this project I used the following resources:

> Facebook. (Jun 29, 2019). Bootstrapped with: create-react-app. Github. https://github.com/facebook/create-react-app

> Osbourne, S. (Aug 7, 2017). Medium: lets-talk-about-docker-artifacts: Create React App + Docker — multi-stage build example. Let’s talk about artifacts. Recovered From: https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f

> Smith, S. (Mar 23, 2018). Dev.to: smithmanny:Deploy Your React App To Heroku. Recovered From: https://dev.to/smithmanny/deploy-your-react-app-to-heroku-2b6f

> Developers Mercado Libre. (2019). API Docs. Recovered From: https://developers.mercadolibre.com/?lang=es_ar
