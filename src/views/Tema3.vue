<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Clasificación de datos

    .row.justify-content-center.mb-5 
      .col-lg-8.mb-4.mb-lg-0
        p.mb-0 Una vez verificada la información recolectada, es necesario ubicarla de acuerdo con las #[span.txt--purpura variables cuantitativas o las  variables cualitativas], teniendo en cuenta el tipo de investigación determinado y los parámetros estadísticos definidos para comprender la información de los datos recolectados; por ello, es necesario organizarlos y presentarlos en tablas y gráficos. Es importante seleccionar un conjunto de características, es decir, las variables que determinan el instrumento, las cuales deben ser objetivas, integrales y que soporten el análisis de información requerido.
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/t3_01.svg", alt="alt").m-auto

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 variables
    
    p.mb-5 Como se describió anteriormente, las variables están determinadas como:

    .bg--img_02
      .row.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--gradient_01.crd--brad.py-5
            figure.mb-4
              img(src="@/assets/curso/tema3/t3_02.svg", alt="alt").img85.m-auto
            h4.txt--mint.text-center Variables cuantitativas
            p.text-white.text-center.mb-0 Las cuales pueden ser discretas o continuas.
        .col-lg-4
          .crd.crd--gradient_01.crd--brad.py-5
            figure.mb-4
              img(src="@/assets/curso/tema3/t3_03.svg", alt="alt").img85.m-auto
            h4.txt--mint.text-center Variables cualitativas
            p.text-white.text-center.mb-0 Las cuales se subdividen en nominales u ordinales.

      p.mb-5 En la siguiente figura, se pueden visualizar estas variables: 

      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Tipos de variables
          figure
            img(src="@/assets/curso/tema3/t3_04.svg", alt="alt")
            figcaption.mt-4 Nota. Adaptada de Gómez (2018).
      
      .avatarCrd.crd--amarillo
        p.mb-0 Para ampliar la información y comprender de manera integral los tipos de variables, observe el video #[span.bg--blue Tipos de variables estadísticas | Cuantitativas Cualitativas], el cual se encuentra en el material complementario.
        .avatarCrd--icon

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Frecuencias 

    .row.mb-5
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/square_00.svg", alt="alt").img85
      .col
        p.mb-0 En la medición de los datos obtenidos, la organización y la tabulación son primordiales para la interpretación estadística, para ello, la repetición de los datos se mide por frecuencias, las cuales de manera general se deben organizar de acuerdo con la cantidad de datos. A continuación, se presentan las siguientes características para la tabulación de los datos bajo el esquema de frecuencias:

    .bg--img_03.mb-5
      .row.justify-content-center 
        .col-lg-8.mb-5
          figure
            img(src="@/assets/curso/tema3/t3_05.svg", alt="alt")

        .col-lg-6
          a.anexo.mb-4(:href="obtenerLink('/downloads/Caracteristicas_tabulacion_datos_bajo_esquema_frecuencias.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Caracteristicas para la tabulación de los datos bajo el esquema de frecuencias.

    .avatarCrd.crd--amarillo
      p.mb-0 Para ampliar la información sobre el tema, observe el video #[span.bg--blue Tablas de frecuencia | Ejemplo 1], el cual se encuentra en el material complementario.       
      .avatarCrd--icon

    separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Tipos de gráficos
    
    p.mb-5 La representación gráfica de la información juega un papel trascendental en el análisis e interpretación de los datos. En la investigación, la representación mediante imágenes coadyuva al lector para la comprensión de los resultados. A continuación, conozca los diferentes tipos de gráficas de acuerdo con su uso: 

    .bg--gradientBlue.py-5.mb-4
      SlyderB(:datos="datosSlyder")

    .avatarCrd.crd--amarillo
      p.mb-0 Para comprender de manera integral los tipos de gráficos más utilizados, observe el video Tipos de gráficos estadísticos, el cual se encuentra en el material complementario.       
      .avatarCrd--icon

    separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Análisis de datos

    .row.justify-content-center.mb-5
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/square_03.svg", alt="alt").img85
      .col
        p Tenga en cuenta que para evaluar el resultado de cualquier desempeño, en el caso específico del comparativo de variables de representaciones gráficas o de tablas, producto de la obtención de información, se pueden aplicar los mecanismos y técnicas que conlleven la interpretación objetiva e integral de los resultados; se deben incluir en el análisis la interpretación de las variables, sus proyecciones o tendencias, las propuestas, las necesidades, la pertinencia, entre muchas otras, emitiendo un concepto completo de la información, las cuales, entre muchas características, deben estar fortalecidas por componentes de análisis. Tenga en cuenta para estos ejercicios los siguientes elementos, que le permitirán potenciar el análisis de la información:

    .row.justify-content-center.mb-5
      .col-lg-9.position-relative
        h3.mb-4.text-center.txt--purpura Elementos determinantes para el análisis - CAC 
        .avatar
          figure
            img(src="@/assets/curso/tema3/t3_17.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/t3_14.svg", alt="alt").img100
            .col
              h5 Calidad de la información
              p Es importante tener en cuenta las variables, la ponderación de estas refleja la calidad de la información, la cual le permitirá obtener información concreta, clara y medible. Es necesario resaltar las características determinantes desde enfoques cualitativos y cuantitativos del dato obtenido. 
        .crd.crd--avatarHorizontal
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/t3_15.svg", alt="alt").img100
            .col
              h5 Aplicación de técnicas
              p Desarrolle técnicas que le permitan tener un panorama completo de la información que se esté analizando, integrando las variables obtenidas en la medición y contrastando detalladamente los datos.
        .crd.crd--avatarHorizontal.crd--last
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/t3_16.svg", alt="alt").img100
            .col
              h5 Comunicación correcta de los resultados
              p En los análisis de resultados, el determinante es saber mostrar la información, tenga en cuenta la objetividad, la claridad, la transparencia y la organización de la información. 

    .row.justify-content-center.mb-5
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Elementos_determinantes_analisis_CAC.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Elementos determinantes para el análisis - CAC   

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Histograma',
        texto:
          'Agrupación de datos.<br>Sirve para datos cualitativos y cuantitativos.<br>Las barras siempre van unidas.<br>Los histogramas ayudan a ver el centro, la extensión y la forma de un conjunto de datos.',
        imagen: require('@/assets/curso/tema3/t3_06.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Polígono de frecuencia',
        texto:
          'Gráfico que se crea a partir de un histograma de frecuencia. Estos histogramas emplean columnas verticales para reflejar frecuencias: el polígono de frecuencia es realizado uniendo los puntos de mayor altura de estas columnas.',
        imagen: require('@/assets/curso/tema3/t3_07.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de barras',
        texto:
          'Un diagrama de barras es una representación en dos dimensiones de la frecuencia, ya sea absoluta o relativa, de una variable cuantitativa o cualitativa, pero siempre discreta y distribuida en filas.',
        imagen: require('@/assets/curso/tema3/t3_08.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Circular',
        texto:
          'Se utiliza para representar la proporción de elementos de cada uno de los valores de la variable.',
        imagen: require('@/assets/curso/tema3/t3_09.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tallos y hojas',
        texto:
          'Es un semigráfico que permite presentar la distribución de una variable cuantitativa. Consiste en separar cada dato en el último dígito (que se denomina <strong>hoja</strong>) y las cifras delanteras restantes (que forman el <strong>tallo</strong>).',
        imagen: require('@/assets/curso/tema3/t3_10.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de caja',
        texto:
          'Un diagrama de cajas y bigotes es una manera conveniente de mostrar visualmente grupos de datos numéricos a través de sus cuartiles.',
        imagen: require('@/assets/curso/tema3/t3_11.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de dispersión',
        texto:
          'Los diagramas de dispersión usan una colección de puntos colocados usando coordenadas cartesianas para mostrar valores de dos variables.',
        imagen: require('@/assets/curso/tema3/t3_12.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Pictograma',
        texto:
          'Los pictogramas son tipos de tablas y gráficos que utilizan íconos e imágenes para representar datos.',
        imagen: require('@/assets/curso/tema3/t3_13.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
