export default {
  global: {
    componenteFormativo: 'Análisis y presentación de resultados',
    descripcionCurso:
      'Para realizar el análisis de la información, se requiere de una organización y clasificación de los datos recopilados, validando las técnicas de recolección y los parámetros de clasificación, para ello, la tabulación y la creación de gráficas coadyuvan al análisis de los resultados, potenciando la elaboración del documento final con sus conclusiones y apoyo de las herramientas tecnológicas actuales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Organización de los datos recopilados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clasificación de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tabulación, gráficas y análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Variables',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Frecuencias',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipos de gráficos ',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Análisis de datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Presentación de resultados bajo criterios científicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Normas, modelos y manuales para la redacción de informes y citas bibliográficas de los mismos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Índice automatizado',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Redacción y ortografía',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Importancia de los derechos de autor ',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Diario de un ortógrafo . (2020). CÓMO CITAR: APA. [Video]. YouTube.',
      link: 'https://youtu.be/rpwnIU8TKbQ',
    },
    {
      referencia:
        'Diario de un ortógrafo. (2021). <i>Referencias según normas APA 7ma edición.</i> [Video]. YouTube.',
      link: 'https://youtu.be/N1GCV9_0avM',
    },
    {
      referencia:
        'El Tío Tech. (2017). <i>Cómo hacer un índice automático para tesis, monografías y proyectos en Word</i> [Video]. YouTube.',
      link: 'https://youtu.be/kvomMdjAdKk ',
    },
    {
      referencia:
        'Herrera, D. (2020). <i>Tablas y figuras según Normas APA 7ma edición, cómo Insertar de forma automática en WORD</i> [Video]. Youtube. ',
      link: 'https://youtu.be/0emR2n_JLqI ',
    },
    {
      referencia:
        'Libélula-ciencia, ingeniería y cultura. (2021). <i>Herramientas para clasificar los datos</i> [Video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=_LzW2Y2xPTw ',
    },
    {
      referencia:
        'Matemáticas profe Alex. (2017). <i>Tablas de frecuencia | Ejemplo 1</i> [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=cyXenZEbGz4 ',
    },
    {
      referencia:
        'Matemáticas profe Alex. (2018). <i>Tipos de variables estadísticas | Cuantitativas Cualitativas</i> [Video]. YouTube. ',
      link: 'https://youtu.be/nCszHELuwxk',
    },
    {
      referencia:
        'Matemáticas profe Alex. (2021). <i>Tipos de gráficos estadísticos</i> [Video]. YouTube. ',
      link: 'https://youtu.be/9G4HPNVA5w4 ',
    },
    {
      referencia:
        'Restrepo, D. (2020). <i>La importancia del Derecho de Autor y la del Registro de Obras ante la Dirección Nacional de Derechos de Autor. Consultorio Jurídico-UNISABANETA</i> ',
      link: 'https://unisabaneta.edu.co/pdf/cartillas/derechos_autor.pdf ',
    },
    {
      referencia:
        'Significados.com. (s. f.). <i>Tipos de investigación.</i> Recuperado de ',
      link: 'https://www.significados.com/tipos-de-investigacion/',
    },
    {
      referencia:
        'Tamayo, C. y Siesquén, I. (s. f.). <i>Técnicas e Instrumentos de Recolección de Datos.</i> ',
      link:
        'https://www.postgradoune.edu.pe/pdf/documentos-academicos/ciencias-de-la-educacion/22.pdf',
    },
    {
      referencia:
        'Universidad Autónoma de Madrid. (s. f.). <i>Citas y elaboración de bibliografía: el plagio y el uso ético de la información: Estilos.</i>',
      link: 'https://biblioguias.uam.es/citar/estilos ',
    },
  ],
  glosario: [
    {
      termino: 'Gráfica',
      significado: 'representación de los datos bajo un esquema. ',
    },
    {
      termino: 'Instrumento',
      significado:
        'elemento que sirve de herramienta para el levantamiento de información.',
    },
    {
      termino: 'Parámetros de centralización',
      significado:
        'indican en torno a qué valor o criterio central se distribuyen los datos obtenidos, para lo cual se establecen la media aritmética, mediana y moda.',
    },
    {
      termino: 'Parámetros de dispersión',
      significado:
        'es la representación de los datos que se alejan de la parte central de los valores de distribución generales.',
    },
    {
      termino: 'Efectividad',
      significado:
        'mide el impacto del indicador frente al cumplimiento del objetivo o también se puede ver como la combinación entre la eficiencia y la eficacia.',
    },
    {
      termino: 'Parámetros de posición',
      significado:
        'son los datos que se organizan en criterios conocidos como cuantiles, los cuales son variables de intervalos en los que se dividen los datos.',
    },
    {
      termino: 'Técnica',
      significado:
        'características para el desarrollo de una actividad específica que parte de la pericia y la secuencia para adelantar actividades. ',
    },
  ],
  complementario: [
    {
      texto:
        'Libélula-ciencia, ingeniería y cultura. (2021). <i>Herramientas para clasificar los datos</i>',
      tipo: 'Video',
      link: 'https://youtu.be/_LzW2Y2xPTw',
    },
    {
      texto:
        'Matemáticas profe Alex. (2018). <i>Tipos de variables estadísticas | Cuantitativas Cualitativas </i>',
      tipo: 'Video',
      link: 'https://youtu.be/nCszHELuwxk',
    },
    {
      texto:
        'Matemáticas profe Alex. (2017). <i>Tablas de frecuencia | Ejemplo 1 </i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cyXenZEbGz4',
    },
    {
      texto:
        'Matemáticas profe Alex. (2021). <i>Tipos de gráficos estadísticos</i> ',
      tipo: 'Video',
      link: 'https://youtu.be/9G4HPNVA5w4',
    },
    {
      texto: 'Diario de un ortógrafo. (2020). <i>CÓMO CITAR: APA </i>',
      tipo: 'Video',
      link: 'https://youtu.be/rpwnIU8TKbQ',
    },
    {
      texto:
        'Diario de un ortógrafo. (2021). <i>Referencias según normas APA 7ma edición.</i> ',
      tipo: 'Video',
      link: 'https://youtu.be/N1GCV9_0avM',
    },
    {
      texto:
        'El Tío Tech. (2017). <i>Cómo hacer un índice automático para tesis, monografías y proyectos en Word</i> ',
      tipo: 'Video',
      link: 'https://youtu.be/kvomMdjAdKk',
    },
    {
      texto:
        'Herrera, D. (2020). <i>Tablas y figuras según Normas APA 7ma edición, cómo Insertar de forma automática en WORD</i>',
      tipo: 'Video',
      link: 'https://youtu.be/0emR2n_JLqI',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wílmar Eduardo Amaya Ávila',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuly Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
