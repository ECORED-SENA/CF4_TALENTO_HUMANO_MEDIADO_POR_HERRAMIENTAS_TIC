<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Organización de los datos recopilados

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p El tratamiento y la organización son vitales para el análisis de datos y el abordaje de los objetivos, las conclusiones y recomendaciones de la tesis propuesta, de esta forma, la presentación integral de la información conlleva diferentes miradas de los datos obtenidos. Una característica relevante es saber presentar la información; en la actualidad, el apoyo de herramientas informáticas permite integrar los datos de formas amplias, pero: 
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/square_01.svg", alt="alt").img85
          .col
            .crd.crd--cstm_01 
              p ¿Cuál es el modo correcto de organizar la información?
        p Reconocer la importancia de la organización de los datos en el análisis descriptivo de la información es fundamental, por lo cual, la estadística ofrece técnicas y métodos que permiten organizar un sinnúmero de respuestas para la interpretación individual que le pueda dar el investigador.
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/t1_01.png", alt="alt").img500.m-auto

    p 

    .bg--paleBlue.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          p Después de la recolección de datos, la siguiente fase es la #[span.txt--purpura organización de la información], esto permite presentarlos en tablas y gráficos:
        .col-lg-8
          .row.justify-content-center
            .col-12.col-md-6.mb-4.mb-md-0
              .crd.crd--hover
                figure.mb-4
                  img(src="@/assets/curso/tema1/t1_02.svg", alt="alt").img100.m-auto
                h4 Las tablas
                p Organizan la información de acuerdo con una variable que se determine y describa las modalidades de esa variable.
            .col-12.col-md-6
              .crd.crd--hover
                figure.mb-4
                  img(src="@/assets/curso/tema1/t1_03.svg", alt="alt").img100.m-auto
                h4 Los gráficos
                p Son una representación visual de una serie de datos, permiten identificar patrones iniciales y comprender la información que viene detrás de esos datos. 

    .row.justify-content-center.mb-5
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/square_01.svg", alt="alt").img85
      .col
        p.mb-0 Cuando se observa una base o una matriz de datos, es difícil poder comprender algunos elementos, mientras que con las tablas y gráficos se puede comenzar esa comprensión, lo cual permite preparar el resumen y el posterior análisis. Pero para poder organizar la información, es importante recapitular la técnica de recolección de datos utilizada. En el siguiente video, se pueden observar estas técnicas: 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vvjV66aA93Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
