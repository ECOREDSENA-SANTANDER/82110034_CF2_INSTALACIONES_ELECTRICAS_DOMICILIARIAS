export default {
  global: {
    Name: 'Cálculo de cargas eléctricas',
    Description:
      'Comprender la interacción entre las cargas eléctricas es esencial para aplicar estos principios en diversos campos, incluida la electricidad. En este contexto, se abordarán temas clave como el cálculo de fuerzas eléctricas, el concepto de campo eléctrico y sus aplicaciones tanto en la vida cotidiana como en el desarrollo de innovaciones tecnológicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cálculo de la demanda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Demanda en unidades de vivienda',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Factores de demanda específicos según el tipo de carga',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Requisitos para una instalación eléctrica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño de planos eléctricos y simbología técnica requerida',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/ejemplo.pdf',
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
  complementario: [
    {
      tema: 'Cálculo de la demanda',
      referencia:
        'Pulecio Herrera, A. A. (2007). Estudio de prefactibilidad para el diseño de una casa energética y ambientalmente eficiente en la población de Apulo, Cundinamarca. ',
      tipo: 'PDF',
      link:
        'https://ciencia.lasalle.edu.co/server/api/core/bitstreams/c63f05e3-3b78-49c0-9c4b-d513337ccb1e/content ',
    },
    {
      tema: 'Requisitos para una instalación eléctrica',
      referencia:
        'Ministerio de Minas y Energía. (2006). Reglamento Técnico de Instalación Eléctricas RETIE. Unidad de planeación Minero-Energética.  ',
      tipo: 'PDF',
      link:
        'https://www1.upme.gov.co/Hemeroteca/Impresos/Cartilla_RETIE_2006.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Carga eléctrica',
      significado:
        'Es la cantidad de energía que necesita un sistema eléctrico para alimentar todos los aparatos y dispositivos conectados.',
    },
    {
      termino: 'VA (Volt-Amperio)',
      significado:
        'Unidad que mide la potencia aparente en sistemas de corriente alterna, resultado de multiplicar voltios por amperios.',
    },
    {
      termino: 'Demanda eléctrica',
      significado:
        'Estimación de la carga máxima que un sistema puede requerir en determinado momento.',
    },
    {
      termino: 'Plano arquitectónico',
      significado:
        'Representación gráfica de una vivienda que sirve como base para diseñar la instalación eléctrica.',
    },
    {
      termino: 'NTC 2050',
      significado:
        'Norma técnica colombiana que regula el diseño e implementación de instalaciones eléctricas, basada en el NEC.',
    },
    {
      termino: 'Electrificación básica',
      significado:
        'Instalación mínima necesaria para operar electrodomésticos comunes sin requerir obras adicionales.',
    },
    {
      termino: 'Electrificación elevada',
      significado:
        'Instalación prevista para viviendas mayores a 160 m² con alta demanda de energía y equipos especiales.',
    },
    {
      termino: 'Circuito ramal',
      significado:
        'Conjunto de conductores que alimentan una o varias cargas desde un solo interruptor automático.',
    },
    {
      termino: 'Factor de demanda',
      significado:
        'Porcentaje aplicado a una carga estimada para reflejar su uso real y evitar sobredimensionamiento.',
    },
    {
      termino: 'Cuadro de cargas',
      significado:
        'Tabla que organiza y resume las distintas cargas eléctricas de una vivienda para su cálculo total.',
    },
    {
      termino: 'Interruptor termomagnético',
      significado:
        'Dispositivo de protección que interrumpe el paso de corriente cuando se detecta sobrecarga o cortocircuito.',
    },
    {
      termino: 'GFCI (Interruptor de falla a tierra)',
      significado:
        'Interruptor que protege a las personas contra descargas eléctricas por contacto accidental con la corriente.',
    },
    {
      termino: 'Plano eléctrico',
      significado:
        'Dibujo técnico que muestra la ubicación, conexiones y componentes eléctricos de una edificación.',
    },
    {
      termino: 'Símbolos eléctricos',
      significado:
        'Representaciones gráficas normalizadas que permiten identificar fácilmente componentes eléctricos en los planos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Shalux Lighting. (s.f.). 2024. Cómo iluminar tu hogar utilizando los focos LED.',
      link:
        ' https://shaluxlighting.com/como-iluminar-tu-hogar-utilizando-los-focos-led.php',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación ICONTEC. (2019). PB 009 código eléctrico colombiano (NTC 2050). ',
      link:
        'https://asieb.com/wp-content/uploads/2024/10/NTC_2050_codigo_electrico_nacional.pdf',
    },
    {
      referencia:
        'Nelguarher. (2013). Requisitos para instalación eléctrica. Club Ensayos. ',
      link:
        'https://www.clubensayos.com/Tecnolog%C3%ADa/REQUISITOS-PARA-INSTALACION-ELECTRICA/1077231.html',
    },
    {
      referencia:
        'Normas y especificaciones para estudios, proyectos, construcción e instalaciones. (2014). Normas y especificaciones para estudios, proyectos, construcción e instalaciones. In volumen 5 instalaciones de servicio. ',
      link:
        'https://www.gob.mx/cms/uploads/attachment/file/105540/Tomo_I__Instalaciones_Electricas_V_2.1.pdf',
    },
    {
      referencia:
        'Organismo Supervisor de la Inversión en Energía. (n.d.). Guía para calcular el consumo eléctrico doméstico. ',
      link: 'https://coopsms.com.ar/download/GuiaCalcularConsumo1.pdf',
    },
    {
      referencia:
        'Quintero Santa, J.E. (10 de febrero de 2018). Requisitos para una instalación eléctrica. SlideShare. (2025). ',
      link:
        'https://es.slideshare.net/slideshow/u2-requisitos-de-instalacion-instalaciones-electricas-domiciliarias/87752328',
    },
    {
      referencia:
        'Santana, F. (2015). U2 cálculo de la carga. Academia. (2025).',
      link: 'https://www.academia.edu/17683907/U2_calculo_de_la_carga',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Francisco Arnaldo Vargas Bermúdez ',
          cargo: 'Experto temático',
          centro:
            'Regional Boyacá - Centro de Desarrollo Agropecuario y Agroindustrial',
        },
        {
          nombre: 'Johanna Martínez Aragón',
          cargo: 'Asesora Pedagógica',
          centro:
            'Regional Boyacá - Centro de Desarrollo Agropecuario y Agroindustrial',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
