<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Clasificación de datos


    .bg--HrGradient_gris.py-3.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0
          .row
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/square_02.svg", alt="alt").img85
            .col
              p.mb-0 Los aspectos asociados a la construcción de tablas de frecuencias y gráficos parten de la definición del tipo de investigación realizada, dado que la estructura de los datos cualitativos o cuantitativos emite directrices para la consolidación de información, al igual que los parámetros estadísticos determinados para dar lectura, interpretación y síntesis a los datos que sean objeto de estudio, pero que se recopilan en tres grandes componentes que, de acuerdo con las denominaciones estadísticas, se subdividen bajo los siguientes conceptos:
        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/t2_01.svg", alt="alt").m-auto

    
    .bg--img_01.mb-4
      h3.cstmH3--blue I. Parámetros de centralización

      p.mb-5 Indican en torno a qué valor o criterio central se distribuyen los datos obtenidos, para lo cual se establecen tres criterios:

      .row.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--hover_02
            figure.mb-4
              img(src="@/assets/curso/tema2/t2_02.svg", alt="alt").img200.m-auto
            h4 Media aritmética
            p La media es la suma de todos los datos dividida por el número de datos.
            p.mb-0 #[strong Ejemplo:] para los datos 1, 2, y 3, 3 es la cantidad de datos, entonces la media es 6/3=2

        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--hover_02
            figure.mb-4
              img(src="@/assets/curso/tema2/t2_03.svg", alt="alt").img200.m-auto
            h4 Mediana
            p Representa el valor de la variable de la posición central en un conjunto de datos ordenados. 
            p.mb-0 #[strong Ejemplo:] 1, 5, 10. La mediana en la posición central, en este caso, corresponde a 5.

        .col-lg-4
          .crd.crd--hover_02
            figure.mb-4
              img(src="@/assets/curso/tema2/t2_04.svg", alt="alt").img200.m-auto
            h4 Moda
            p Es el valor de la variable con mayor frecuencia absoluta.
            p.mb-0 #[strong Ejemplo:] en los datos 3, 2, 3, 4, 5, 3, 7, 8, 7 y 10, los números 2, 4, 5, 8 y 10 aparecen una vez cada uno; el número 3 aparece en tres ocasiones y el número 7 aparece en dos oportunidades. Así, entonces, la moda estadística es el número 3.

      h3.cstmH3--blue II. Parámetros de posición

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7
          p.mb-0 Consta de dividir los datos en grupos con el mismo número de datos recopilados. Para esto, es necesario organizar la información de menor a mayor; para su interpretación, se organiza en criterios conocidos como cuantiles, los cuales son variables de intervalos en los que se dividen los datos.
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/t2_05.svg", alt="alt")

      h5.txt--purpura.mb-5 Ejemplo:

      .row.justify-content-center.mb-5
        .col-10.col-lg-3.mb-4.mb-lg-0
          .crd.crd--gradient_01.crd--brad.py-5
            figure.mb-4
              img(src="@/assets/curso/tema2/t2_06.svg", alt="alt").img100.m-auto
            h4.text-center.txt--mint Percentiles
            p.text-white.text--center.mb-0 División de una serie de datos en 100 partes iguales.        

        .col-10.col-lg-3.mb-4.mb-lg-0
          .crd.crd--gradient_01.crd--brad.py-5
            figure.mb-4
              img(src="@/assets/curso/tema2/t2_07.svg", alt="alt").img100.m-auto
            h4.text-center.txt--mint Deciles
            p.text-white.text--center.mb-0 División de una serie de datos en 10 partes iguales.
        
        .col-10.col-lg-3.mb-4.mb-lg-0
          .crd.crd--gradient_01.crd--brad.py-5
            figure.mb-4
              img(src="@/assets/curso/tema2/t2_08.svg", alt="alt").img100.m-auto
            h4.text-center.txt--mint Quintiles
            p.text-white.text--center.mb-0 División de una serie de datos en 5 partes iguales.

        .col-10.col-lg-3.mb-4.mb-lg-0
          .crd.crd--gradient_01.crd--brad.py-5
            figure.mb-4
              img(src="@/assets/curso/tema2/t2_09.svg", alt="alt").img100.m-auto
            h4.text-center.txt--mint Cuartiles
            p.text-white.text--center.mb-0 División de una serie de datos en 4 partes iguales.

      .row.justify-content-center
        .col-lg-4.order-2.order-lg-1
          figure
            img(src="@/assets/curso/tema2/t2_09.png", alt="alt").img-400.m-auto
        .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
          h3.cstmH3--blue III. Parámetros de dispersión
          p Establecidos para interpretar cuando los datos se alejan de la parte central de los valores de distribución.
          ul.fa-ul
            li.mb-3
              i.fa-li.far.fa-dot-circle.clr--purpura
              | #[span.txt--purpura Rango o recorrido:] es la diferencia entre el dato mayor y el dato menor de una distribución numérica.
            li.mb-3
              i.fa-li.far.fa-dot-circle.clr--purpura
              | #[span.txt--purpura Desviación:] la desviación media es la media aritmética de los valores absolutos de las desviaciones respecto a la misma media.
            li
              i.fa-li.far.fa-dot-circle.clr--purpura
              | #[span.txt--purpura Varianza:] es la desviación típica estándar, es la raíz cuadrada positiva de la varianza.

          p Es importante recordar que primero se selecciona un tipo de investigación para mejorar la comprensión del estudio, especialmente, cuando se debe realizar un proceso de recolección de datos. Existen diferentes tipos de investigación que se clasifican dependiendo del objetivo, la profundidad del estudio a realizar, los datos que se van a analizar, el tiempo que requiere el estudio, entre otros.

    p Conozca la clasificación de los diferentes tipos de investigación:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/GCZ503I6r0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    .row.justify-content-center
      .col-lg-7.order-2.order-lg-1
        p Toda la información obtenida se debe clasificar, pero se deberá tener cuidado en lo que se requiere para que se logre de forma adecuada planteando el siguiente interrogante:
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/square_01.svg", alt="alt").img85
          .col
            .crd.crd--cstm_01 
              p ¿Cómo se clasifican los datos y qué herramientas utilizar?
        p Para responder este interrogante, se deberán emplear herramientas, una de ellas conocida como diagrama de tallo y hojas, y la segunda es la tabla de distribución de frecuencias.
        p Para ampliar la información sobre estas herramientas, observe el video #[span.txt--purpura Herramientas para clasificar los datos], el cual se encuentra en el material complementario.

        .avatarCrd.crd--amarillo
          p.mb-0 Tenga en cuenta de manera prioritaria las características determinadas en el planteamiento de la investigación  para la ponderación de variables que se necesiten establecer.
          .avatarCrd--icon

      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/t2_10.svg", alt="alt").img500.m-auto
          


    


   
            


    




    

</template>

<script>
export default {
  name: 'Tema2',
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
