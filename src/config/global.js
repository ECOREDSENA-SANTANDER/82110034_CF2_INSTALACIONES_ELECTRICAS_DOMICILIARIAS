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
        download: 'downloads/dist.pdf',
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
      tema: 'Circuitos eléctricos',
      referencia:
        'García, B. (s.f.). Tema 2: Análisis de circuitos en corriente continua. Fundamentos de Ingeniería Eléctrica. Universidad Carlos III de Madrid.  ',
      tipo: 'PDF',
      link:
        'https://ocw.uc3m.es/pluginfile.php/5638/mod_page/content/22/FIE_diapositivas_Tema2.pdf',
    },
    {
      tema: 'Condensadores e inductores',
      referencia:
        'RTR Energy. (s.f.). Condensadores Eléctricos. [Catálogo PDF]. Direct Industry Connect.',
      tipo: 'PDF',
      link:
        'https://pdf.directindustry.es/pdf/rtr-energia/condensadores-electricos/19823-600958.html',
    },
    {
      tema: 'Transformacionales de energía',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s.f.). Oferta y demanda de energía: tendencias y perspectivas.',
      tipo: 'PDF',
      link: 'https://www.fao.org/4/i0139s/i0139s03.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cálculo de carga eléctrica',
      significado:
        'Operación que se realiza para identificar la carga total necesaria que deberá soportar una instalación eléctrica determinada, como alumbrados y diversas aplicaciones como contactos, bombas de agua, aire acondicionado, secadoras, lavadoras, entre otras. ',
    },
    {
      termino: 'Circuito en serie',
      significado:
        'Conexión en la que los bornes o terminales de los dispositivos (generadores, resistencia, condensadores, interruptores, entre otros) se conectan secuencialmente. ',
    },
    {
      termino: 'Circuito mixto',
      significado:
        'Tipo de circuito donde se combinan elementos conectados en serie y en paralelo. ',
    },
    {
      termino: 'Circuito paralelo',
      significado:
        'Conexión donde los bornes o terminales de todos los dispositivos (generadores, resistencias, condensadores, etc.) conectados coincidan entre sí, lo mismo que sus terminales de salida.',
    },
    {
      termino: 'Condensadores',
      significado:
        'Dispositivos o componentes pasivos que almacenan energía eléctrica. ',
    },
    {
      termino: 'Corriente alterna',
      significado:
        'Tipo de corriente en la que la magnitud y dirección varían cíclicamente.',
    },
    {
      termino: 'Corriente continua',
      significado:
        'Tipo de corriente donde el flujo de electrones es continuo y se realiza a través de un conductor entre dos puntos de distinto potencial. ',
    },
    {
      termino: 'Electricidad',
      significado:
        'Estudia las leyes que rigen el comportamiento de las cargas eléctricas que suceden en los fenómenos atmosféricos, procesos biológicos y el funcionamiento de mecanismos, electrodomésticos y dispositivos electrónicos. ',
    },
    {
      termino: 'Inductores',
      significado:
        'También conocidos como bobinas, son componentes pasivos de un circuito eléctrico que, debido al fenómeno de la autoinducción, almacena energía en forma de campo magnético. ',
    },
    {
      termino: 'Instalación eléctrica',
      significado:
        'Conjunto de aparatos, equipos, cables conductores, tuberías y accesorios destinados al suministro, distribución y utilización de la energía eléctrica en una edificación. ',
    },
    {
      termino: 'Ley de Corriente',
      significado:
        'Ley también conocida como Primera Ley de Kirchhoff o LCK, indica que, en cualquier nodo, la suma de la corriente que entra en ese nodo es igual a la suma de la corriente que sale. De igual forma, la suma de todas las corrientes que pasan por el nodo es igual a cero. ',
    },
    {
      termino: 'Ley de Joule',
      significado:
        'Determina la cantidad de calor que es capaz de entregar una resistencia, esta cantidad de calor dependerá de la intensidad de corriente que por ella circule de la cantidad de tiempo que esté conectada. ',
    },
    {
      termino: 'Ley de Ohm',
      significado:
        'Define que la corriente que circula por un conductor eléctrico es directamente proporcional al voltaje e inversamente proporcional a la resistencia, es decir, cuando aumenta el voltaje aumenta la corriente y cuando la resistencia aumenta la corriente es mínima. ',
    },
    {
      termino: 'Ley de Voltajes',
      significado:
        'Ley que indica que en toda malla la suma de todas las caídas de tensión es igual a la suma de todas las subidas de tensión. De forma equivalente, en toda malla la suma de las diferencias de potencial eléctrico debe ser cero (0). ',
    },
    {
      termino: 'Ley de Watt',
      significado:
        'Determina la cantidad de energía eléctrica o trabajo que se transporta o que se consume en una determinada unidad de tiempo. Si la tensión se mantiene constante, la potencia es directamente proporcional a la corriente. ',
    },
    {
      termino: 'Leyes de Kirchhoff',
      significado:
        'Son dos igualdades que se basan en la conservación de la energía y la carga en los circuitos eléctricos. Estas leyes son muy utilizadas en ingeniería eléctrica para hallar corrientes y tensiones en cualquier punto de un circuito eléctrico. Estas leyes son: Primera Ley de Kirchhoff o Ley de Corrientes y Segunda Ley de Kirchhoff o Ley de Voltajes.',
    },
    {
      termino: 'Sistema eléctrico',
      significado:
        'Conjunto de equipos necesarios para dar el servicio eléctrico, es decir, para hacer que los consumidores dispongan de la electricidad que demandan. Está compuesto en términos generales por: generación de energía, transmisión, subestaciones, distribución y consumo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alexander, C. K. & Sadiku, M.N.O (2013). Fundamentos de circuitos eléctricos. (5 ed.)',
      link:
        'https://books.google.es/books?hl=es&lr=lang_es&id=g1pEDAAAQBAJ&oi=fnd&pg=PR11&dq=circuitos+el%C3%A9ctricos+en+serie&ots=bto4zFSjBq&sig=gid8gBTu5v6P8c7Ay9LkN6wSy88#v=onepage&q=circuitos%20el%C3%A9ctricos%20en%20serie&f=false',
    },
    {
      referencia:
        'Blogspot. Circuito eléctrico. (11 de mayo de 2014). Recuperado de ',
      link: 'https://fisica17-23.blogspot.com/2014/05/circuito-electrico.html',
    },
    {
      referencia:
        'Escuelapedia. (2014). Descubrimiento de la primera partícula subatómica: el electrón. Recuperado de ',
      link:
        'https://escuelapedia.com/descubrimiento-de-la-primera-particula-subatomica-el-electron/',
    },
    {
      referencia:
        'García González, A. (22 de marzo de 2023). Conceptos básicos de electricidad: La ley de Ohm - Panama Hitek. Recuperado de ',
      link:
        'https://panamahitek.com/conceptos-basicos-de-electricidad-la-ley-de-ohm/',
    },
    {
      referencia:
        'García Fraile, A. (28 de febrero de 2011). Energías renovables y no renovables. [Web blog spot]. Recuperado de ',
      link:
        'https://201011sma.blogspot.com/2011/02/energias-la-energia-es-una-magnitud.html',
    },
    {
      referencia:
        'Henao Robledo, F. (2013). Riesgos eléctricos y mecánicos. (2 ed.). Recuperado de ',
      link:
        'https://books.google.es/books?hl=es&lr=lang_es&id=Ntk3DgAAQBAJ&oi=fnd&pg=PP1&dq=electricidad+est%C3%A1tica&ots=hIj78NsKs7&sig=uVMViu85ra-Mfk_eK5W2dNo-m2w#v=onepage&q=electricidad%20est%C3%A1tica&f=false',
    },
    {
      referencia:
        'Hermosa Donate, A. (2003). Principios de electricidad y electrónica. (T III). Recuperado de ',
      link:
        'https://books.google.co.ve/books?id=pvtFKgwM11wC&printsec=frontcover#v=onepage&q&f=false',
    },
    {
      referencia: 'Martínez, R. (2012). Receptores eléctricos. Recuperado de ',
      link: 'https://es.slideshare.net/slideshow/receptores-elctricos/13315987',
    },
    {
      referencia:
        'Mheducation. (mar.). Medidas eléctricas en las instalaciones de baja tensión. Recuperado de ',
      link: 'https://www.mheducation.es/bcv/guide/capitulo/8448141725.pdf',
    },
    {
      referencia:
        'Polanco Cáceres, H.G. (2010). Manual de procesos y procedimientos. [Monografía]. Universidad Santiago de Cali. Recuperado de ',
      link: 'https://giovannipolanco.blogspot.com/',
    },
    {
      referencia:
        'Picco, D. L. (9 de mayo de 2014). El largo camino de la electricidad. [Web blog spot]. Recuperado de ',
      link:
        'https://usuariosdeenergiaelectrica.blogspot.com/2014/05/red-de-distribucion.html',
    },
    {
      referencia:
        'Polverini, F.F. (14 de abril de 2022). Fundamentos básicos de Electrónica. FP Control Automating the worl. Recuperado de ',
      link: 'https://fpcontrol.com.ar/fundamentos-basicos-de-electronica/',
    },

    {
      referencia:
        'Rasek. (11 de febrero de 2011). Corriente eléctrica. Recuperado de ',
      link: 'https://rasek.blogia.com/2011/021101-corriente-electrica.php ',
    },
    {
      referencia:
        'Rueda, L. (26 de abril de 2021). Electrónica: 3. tutorial de electrónica básica autor Rueda Luis. SlideShare. ',
      link:
        'https://es.slideshare.net/slideshow/electrnica-3-tutorial-de-electrnica-bsica-autor-rueda-luis/247005553',
    },
    {
      referencia:
        'Tacca, H. (2020). Conceptos Básicos de Electrotenia. Buenos Aires: SISBI- UBA. Recuperado de: ',
      link: 'https://www.aacademica.org/hernan.emilio.tacca/10/1.pdf',
    },
    {
      referencia:
        'Tuveras. (s.f.). Sistema Eléctrico de Potencia. Recuperado de ',
      link: 'https://tuveras.com/lineas/sistemaelectrico.htm',
    },
    {
      referencia:
        'Zambrano, A. B. (2019). ELEMENTOS DE UN CIRCUITO Unidad 1. Conceptos básicos de electricidad. Senasofiaplus.',
      link:
        'https://www.academia.edu/38584781/ELEMENTOS_DE_UN_CIRCUITO_Unidad_1_Conceptos_b%C3%A1sicos_de_electricidad',
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
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
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
          nombre: 'Andrea Paola Botello de Rosa',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
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
