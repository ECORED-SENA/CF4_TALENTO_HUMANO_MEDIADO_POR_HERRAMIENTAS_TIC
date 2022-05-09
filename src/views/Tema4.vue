<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Presentación de resultados bajo criterios científicos

    .bg--HrGradient_gris.py-3.mb-5
      .row.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          p.mb-0 La composición de la información, para ser presentada de forma concluyente e integral, requiere de una serie de mecanismos que ya se encuentran definidos, los cuales buscan dar soporte científico de investigaciones previas, coadyuvan a la fidelidad del logro de los objetivos y análisis de la investigación, respaldando y trazando líneas a seguir para el enfoque de resultados con soportes de análisis y conclusiones apropiadas para la investigación. Por ello, es muy importante seguir parámetros universales para la estructuración del documento; asimismo, estos deben ser validados por el investigador de acuerdo con las directrices  donde se entregan los resultados finales, con el objetivo de evitar retrocesos y desgastes innecesarios en la gestión de la investigación. 
        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema4/t4_01.svg", alt="alt")

    .bg--gradientBlue_02.pb-5.mb-5

      #t_4_1.titulo-segundo.color-acento-contenido
        h2 4.1 Normas, modelos y manuales para la redacción de informes y citas bibliográficas de los mismos

      .row.justify-content-center.mb-5
        .col-auto.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/square_04.svg", alt="alt").img85
        .col
          p.mb-0 Para la comprensión de algunos tipos de normas, modelos y manuales existentes y que son de utilización en Colombia, se debe partir del enfoque del área del conocimiento a donde vaya dirigida la tesis investigativa; por ello, es necesario recalcar que el investigador debe consultar los parámetros determinados por la entidad donde va a realizar la entrega de la información. En criterios generales, el tipo de cita recomendada por área de conocimiento se presenta en el siguiente esquema, basado en lo expuesto por la Universidad Autónoma de Madrid.

      .row.justify-content-center
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 2. 
            span Tipo de cita recomendado de acuerdo con el área del conocimiento
          figure
            img(src="@/assets/curso/tema4/t4_02.svg", alt="alt")
            figcaption.mt-4 Nota. Adaptada de Universidad Autónoma de Madrid (s. f.).

    .row.justify-content-center.mb-5
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/square_04.svg", alt="alt").img85
      .col
        p.mb-0 Pero la pregunta es: #[span.txt--purpura ¿a qué se refieren cuando hablan de normas APA, ICONTEC, VANCOUVER, CHICAGO, IEEE, UNE-ISO, entre otras?] Sencillamente, son modelos que emiten parámetros de cómo se debe estructurar el documento, el tipo de letra, la ubicación de títulos, subtítulos, la identificación de tablas, gráficos, interlineado, esquema del documento, y cómo se deben realizar las reseñas, documentos, videos, artículos científicos, libros, páginas web, entre otros. Para la compresión de los tipos más comunes de modelos de redacción, se presenta el siguiente recurso.

    TabsA.mb-5

      .tarjeta.color-acento-botones--borde.p-4(titulo="Chicago")
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0
            h4.txt--purpura Chicago
            p Usado principalmente en historia, arte, musicología y literatura. Propone dos formas de citar las fuentes consultadas en la elaboración de un trabajo académico:
            ul.fa-ul
              li.mb-3
                i.fa-li.far.fa-dot-circle.clr--purpura
                | Con notas al pie de página. 
              li.mb-3
                i.fa-li.far.fa-dot-circle.clr--purpura
                | Una bibliografía al final del documento o presentando la información completa sobre las obras consultadas en un listado de bibliografía al final del documento.
          .col-auto
            figure
              img(src="@/assets/curso/tema4/t4_03.png", alt="alt").img350.m-auto

      .tarjeta.color-acento-botones--borde.p-4(titulo="UNE-ISO 690")
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0
            h4.txt--purpura  UNE-ISO 690
            p La norma UNE-ISO 690:2013 proporciona un formato concreto, establece un marco general y unas directrices mínimas para la elaboración de referencias bibliográficas y citas de diversos tipos de recursos de información. 
            p Contiene instrucciones para la redacción de referencias bibliográficas y es aplicable a referencias y citas de todo tipo de recursos:
            .row.justify-content-center
              .col-lg-6
                ul.fa-ul
                  li.mb-2
                    i.fa-li.far.fa-dot-circle.clr--purpura
                    | Monografías 
                  li.mb-2
                    i.fa-li.far.fa-dot-circle.clr--purpura
                    | Seriadas
                  li.mb-2
                    i.fa-li.far.fa-dot-circle.clr--purpura
                    | Patentes 
                  li.mb-2
                    i.fa-li.far.fa-dot-circle.clr--purpura
                    | Material cartográfico 
                  li.mb-2
                    i.fa-li.far.fa-dot-circle.clr--purpura
                    | Recursos electrónicos
              .col-lg-6
                ul.fa-ul
                  li.mb-2
                    i.fa-li.far.fa-dot-circle.clr--purpura
                    | Música 
                  li.mb-2
                    i.fa-li.far.fa-dot-circle.clr--purpura
                    | Grabaciones sonoras
                  li.mb-2
                    i.fa-li.far.fa-dot-circle.clr--purpura
                    | Fotografías
                  li
                    i.fa-li.far.fa-dot-circle.clr--purpura
                    | Material audiovisual                 

          .col-auto
            figure
              img(src="@/assets/curso/tema4/t4_04.png", alt="alt").img350.m-auto

      .tarjeta.color-acento-botones--borde.p-4(titulo="APA")
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0
            h4.txt--purpura  APA
            p Desarrollado por la American Psychological Association, este estilo se ha convertido en el formato de referencia para las ciencias sociales: psicología, educación, economía, derecho, etc. tipo de recursos:            
            ul.fa-ul
              li.mb-2
                i.fa-li.far.fa-dot-circle.clr--purpura
                | El estilo APA utiliza el sistema Harvard de autor-fecha para las citas en el texto, y al final del documento, se insertan las referencias bibliográficas ordenadas alfabéticamente por el apellido del primer autor de cada trabajo.
              li.mb-2
                i.fa-li.far.fa-dot-circle.clr--purpura
                | Actualmente, las normas APA vigentes son las correspondientes a la 7ª edición.                        

          .col-auto
            figure
              img(src="@/assets/curso/tema4/t4_05.png", alt="alt").img350.m-auto

      .tarjeta.color-acento-botones--borde.p-4(titulo="MLA")
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0
            h4.txt--purpura  MLA
            p Estilo oficial de la Modern Language Association, se emplea fundamentalmente en lingüística y otras disciplinas humanísticas. 
            p Como el estilo APA, además de un sistema para elaborar citas y referencias, es un manual que formaliza los aspectos básicos de la escritura de un trabajo académico (tipografía, tamaño de letra, calidad del papel, formato de párrafos, enlaces, puntuación, etc.).                                

          .col-auto
            figure
              img(src="@/assets/curso/tema4/t4_06.png", alt="alt").img350.m-auto

      .tarjeta.color-acento-botones--borde.p-4(titulo="Vancouver")
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0
            h4.txt--purpura  Vancouver
            p El estilo Vancouver es un conjunto de reglas para la publicación de manuscritos en el ámbito de las Ciencias de la Salud. También es conocido por el mismo nombre el subconjunto de esas normas referido a la forma de realizar referencias bibliográficas.
            p Este estilo toma su nombre de una reunión celebrada en Vancouver (Canadá) en 1978, que llevó a la creación del Comité Internacional de Editores de Revistas Médicas (ICMJE) y fue desarrollado por la Biblioteca Nacional de Medicina de los Estados Unidos.                   

          .col-auto
            figure
              img(src="@/assets/curso/tema4/t4_07.png", alt="alt").img350.m-auto

      .tarjeta.color-acento-botones--borde.p-4(titulo="ICONTEC – NTC ")
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0
            h4.txt--purpura  ICONTEC - NTC 
            p Desarrollado por el ICONTEC - Instituto Colombiano de Normas Técnicas y Certificación. 
            p Documento que establece parámetros para Colombia en la presentación de trabajos académicos y referencias bibliográficas.                   

          .col-auto
            figure
              img(src="@/assets/curso/tema4/t4_08.png", alt="alt").img350.m-auto

    .row.justify-content-center
      .col-auto.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/t4_09.svg", alt="alt").img300.m-auto
      .col 
        p Para la elaboración de citas textuales y referencias bibliográficas, es importante que el aprendiz valide previamente la norma, modelo o método correspondiente para la elaboración del documento, determinado por la entidad, para así apoyarse en las páginas oficiales para aplicar la norma que le corresponda. 
        .tarjeta.crd--cta.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/componentes/download.svg").img75
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.text-white.mb-1 Instructivo APA
                  p.text-small.text-white.mb-0 El SENA cuenta con un Manual en normas APA, donde se explican los elementos que se deben tener en cuenta para la elaboración de un documento y su citación: 
                .col-sm-auto
                  a.boton.acento-botones(:href="obtenerLink('/downloads/InstructivoAPA.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Índice automatizado

    .row.justify-content-center
      .col-lg-9
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/square_03.svg", alt="alt").img85
          .col
            p.mb-0 En la actualidad, las herramientas informáticas brindan un amplia cantidad de soluciones para la elaboración de diferentes tipos de documentos de acuerdo con las características que se requieran, por ejemplo, en la automatización de las tablas, los títulos, las referencias y el contenido, de manera integral. En los esquemas metodológicos utilizados en la elaboración de investigaciones, la automatización del índice es una herramienta fundamental para la organización del contenido documental, ya que evita errores y organiza de forma integral la información.
        .avatarCrd.crd--amarillo
          p Para ampliar la información y comprender de manera integral cómo automatizar el índice, las tablas y los gráficos que contienen los documentos, observe los siguientes videos que se encuentran en el material complementario:
          p.mb-0 #[span.bg--blue Cómo hacer un índice automático para tesis, monografías y proyectos en Word.#[br]TABLAS Y FIGURAS 📊 según Normas APA 7ma edición 2021 📝 cómo Insertar de forma automática en WORD.]
          .avatarCrd--icon

      .col-lg-3.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/t4_10.png", alt="alt").img300.m-auto

    separador

    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Redacción y ortografía

    .row.justify-content-center
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/t4_11.png", alt="alt").img400.m-auto
      .col-lg-8
        p Los métodos de redacción, puntuación y ortografía que son utilizados en la actualidad no son los mejores, se cometen errores de ortografía constantemente; por ejemplo, en la calle, es fácil encontrar vallas y avisos en los almacenes, las tiendas, las vías, etcétera, en los que se cometen fallas, algunas veces producen risa y en otras, vergüenza. Muchos de los errores tienen que ver con el desconocimiento de las normas. La falta de lectura de quienes producen la información, la influencia de las redes sociales y las interacciones diarias en chats, han producido un descuido gramatical, sumado a la falta de corrección y crítica, lo cual ha conllevado escribir con errores.
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/square_05.svg", alt="alt").img85
          .col
            p.mb-0 Entre los errores más comunes que se encuentran, están: no usar mayúsculas, la falta de tildes y la utilización incorrecta y arbitraria de la puntuación en los párrafos; todo esto dado por el desconocimiento de las reglas ortográficas y otros factores que influyen, como: falta de lectura, no usar el diccionario, ausencia de motivación crítica y constructiva para escribir bien.
        p Ampliar el vocabulario se consigue a través de la lectura, ya que se logra alcanzar una buena memoria gráfica, dado que el ser humano aprende más de manera visual. Por esto, la invitación es a comenzar a hacer un buen uso del lenguaje. La utilización de normas y reglas gramaticales facilitan que la comunicación sea apropiada, lo cual es primordial en el desarrollo de cualquier comunicación y, mucho más, en la comunicación de carácter científico. Por ello, se orientan las siguientes recomendaciones, las cuales le ayudarán a mejorar la redacción y la ortografía.

    .bg--paleBlue
      .row.justify-content-center.align-items-center
        .col-lg-7
          SlyderF.mb-5(columnas="col-lg-6")
            .crd.crd--white
              figure.mb-4
                img(src="@/assets/curso/tema4/t4_13.svg", alt="alt").img100.m-auto               
              p.mb-0.text-center Delimite párrafos extensos y segméntelos, de ser necesario.<br>incómodos.

            .crd.crd--white
              figure.mb-4
                img(src="@/assets/curso/tema4/t4_14.svg", alt="alt").img100.m-auto               
              p.mb-0.text-center Lea los textos que escribe al menos una vez más, atendiendo la puntuación de cada uno de los párrafos.

            .crd.crd--white
              figure.mb-4
                img(src="@/assets/curso/tema4/t4_15.svg", alt="alt").img100.m-auto               
              p.mb-0.text-center Utilice el diccionario físico o en línea.

            .crd.crd--white
              figure.mb-4
                img(src="@/assets/curso/tema4/t4_16.svg", alt="alt").img100.m-auto               
              p.mb-0.text-center Consulte las dudas que se puedan ir generando. Hay herramientas como la plataforma de la Real Academia Española y fundéu, en las que están actualizadas las últimas normas del castellano y ayudan a resolver las dudas.

            .crd.crd--white
              figure.mb-4
                img(src="@/assets/curso/tema4/t4_17.svg", alt="alt").img100.m-auto               
              p.mb-0.text-center Practique en su vida cotidiana la corrección de la escritura y la puntuación.

            .crd.crd--white
              figure.mb-4
                img(src="@/assets/curso/tema4/t4_18.svg", alt="alt").img100.m-auto               
              p.mb-0.text-center Genere hábitos de lectura, con el objetivo de mejorar su memoria gráfica.

        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/t4_12.png", alt="alt").m-auto

    separador

    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Importancia de los derechos de autor 

    .row.justify-content-center.mb-5
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/square_04.svg", alt="alt").img85
      .col
        p.mb-0 ¿Qué es el Derecho de Autor? Es importante apoyarse en las definiciones realizadas por Restrepo (2020) y la Dirección Nacional de Derechos de Autor, donde manifiestan que es la rama de la ciencia jurídica que se encarga de regular la propiedad de las obras científicas, literarias y artísticas, las cuales comprenden todas las creaciones del espíritu en el campo científico, literario y artístico, cualquiera que sea el modo o forma de expresión y su destino, entre las cuales se relacionan las siguientes:

    .bg--img_04.pb-5
      figure.mb-4(data-aos="zoom-in")
        img(src="@/assets/curso/tema4/t4_19.svg", alt="alt")

      .row.justify-content-center.mb-5
        .col-auto
          a.anexo.mb-4(:href="obtenerLink('/downloads/tipos_propiedad.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Tipos de propiedad sujetas a derechos de autor

      .row.justify-content-center
        .col-auto.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/square_03.svg", alt="alt").img85            
        .col
          .crd.crd--amarillo
            p.mb-0 Es importante señalar que la protección de los derechos de autor está regulada en Colombia en la Ley 44 de 1993, la cual busca proteger la propiedad intelectual e industrial, regulando los derechos de autor y las sanciones cuando se pueda infringir la propiedad. Por ello, es primordial que en la creación y desarrollo científico de cualquier área de conocimiento se proteja y reconozca la propiedad intelectual de los artículos tomados como referencia. 

     

    

          
     

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
