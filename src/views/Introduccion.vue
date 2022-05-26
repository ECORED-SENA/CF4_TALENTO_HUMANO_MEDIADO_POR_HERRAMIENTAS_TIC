<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white i
      h1 Introducción   
          
    .row.justify-content-center.align-items-center.mb-5        
      .col-auto.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/Introduccion/intro.png", alt="alt").img250.m-auto
      .col-lg 
        .crd.crd--purpura
          p.mb-0 Para realizar el análisis de la información, se parte de la organización y clasificación de los datos obtenidos en el ejercicio de campo desarrollado por el investigador, por lo cual se deben validar previamente las técnicas de recolección de datos, el tipo de investigación y los parámetros de clasificación estadísticos proyectados, desarrollando con lo anterior una organización y representación gráfica bajo variables y frecuencias, las cuales coadyuvan al análisis y a la interpretación objetiva de los resultados, potenciando con esto las conclusiones del documento final, el cual es elaborado con el apoyo de las herramientas tecnológicas actuales, entre las cuales están la aplicación de citas, reseñas bibliográficas, automatización del índice, tablas y gráficas, además de unas características de redacción que permiten comprender y ubicar de manera científica las diferentes particularidades del documento final de la investigación. Para profundizar, lo invitamos a visualizar el siguiente video: 
    

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rTD5jry-pXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)         
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
