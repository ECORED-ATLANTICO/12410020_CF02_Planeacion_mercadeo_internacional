export default {
  global: {
    Name: 'Plan de mercadeo internacional.',
    Description:
      'Este componente permite formular planes de mercadeo internacional mediante el análisis de objetivos, diagnóstico situacional y estrategias globales. El aprendiz desarrollará competencias para diseñar un plan estructurado, aplicando criterios técnicos, recursos adecuados y herramientas efectivas, orientadas a la proyección y posicionamiento de productos o servicios en mercados internacionales.',
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Objetivos de mercadeo internacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Criterios de diseño',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias de mercadeo internacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Criterios de diseño',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de mercadeo internacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructura',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Recursos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Etapas de elaboración',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Herramientas',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Ejemplo general del plan',
            hash: 't_3_6',
          },
        ],
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
      tema: 'Objetivos de mercadeo internacional',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Planeamiento de objetivos bajo el método SMART [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gY607xwUgpw',
    },
    {
      tema: 'Estrategias de mercadeo internacional',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Estrategia de ventas [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mwk2MnDXtPI',
    },
    {
      tema: 'Estrategias de mercadeo internacional',
      referencia:
        'Castellanos, C. (2020). Estrategias efectivas para conquistar mercados internacionales [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=G1qPNcwMpu0',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de mercado',
      significado:
        'Estudio de las condiciones y tendencias de un mercado específico.',
    },
    {
      termino: 'Comercialización',
      significado: 'Conjunto de acciones para vender un producto o servicio.',
    },
    {
      termino: 'Competencia',
      significado:
        'Empresas o productos que ofrecen alternativas similares en el mercado.',
    },
    {
      termino: 'Diagnóstico situacional',
      significado:
        'Evaluación de factores internos y externos que afectan una organización.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Plan de acción diseñado para alcanzar objetivos específicos.',
    },
    {
      termino: 'Exportación',
      significado: 'Venta de bienes o servicios a otros países.',
    },
    {
      termino: 'Globalización',
      significado: 'Integración económica y comercial entre países del mundo.',
    },
    {
      termino: 'Internacionalización',
      significado:
        'Proceso por el cual una empresa ingresa a mercados internacionales.',
    },
    {
      termino: 'Investigación de mercados',
      significado:
        'Recopilación y análisis de datos para conocer al consumidor y el mercado.',
    },
    {
      termino: 'Logística',
      significado:
        'Organización de recursos y procesos para distribuir productos eficazmente.',
    },
    {
      termino: 'Marca',
      significado:
        'Identidad visual y conceptual que distingue un producto o empresa.',
    },
    {
      termino: 'Mercado',
      significado:
        'Conjunto de consumidores o empresas con interés y capacidad de compra.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'Actividades destinadas a satisfacer necesidades mediante productos o servicios.',
    },
    {
      termino: 'Objetivo',
      significado: 'Meta clara y medible que se desea alcanzar.',
    },
    {
      termino: 'Planeación',
      significado:
        'Proceso de definir acciones y recursos para alcanzar metas.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Imagen o percepción que tiene el consumidor de un producto o marca.',
    },
    {
      termino: 'Segmentación',
      significado:
        'División del mercado en grupos con características similares.',
    },
    {
      termino: 'Ventaja competitiva',
      significado:
        'Característica que da superioridad frente a los competidores. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Chiavenato, I. (2006). Introducción a la teoría general de la administración (7.ª ed.). McGraw-Hill Interamericana. Recuperado de una fuente con licencia abierta: ',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/15525/mod_resource/content/0/Chiavenato%20Idalverto.%20Introducci%C3%B3n%20a%20la%20teor%C3%ADa%20general%20de%20la%20Administraci%C3%B3n.pdf',
    },
    {
      referencia:
        'David, F. R., David, F. R., & David, M. E. (2020). Strategic management: A competitive advantage approach, concepts and cases (17.ª ed.). Pearson. Disponible en PDF: f',
      link: 'https://pracownik.kul.pl/files/12439/public/3_David.pd',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2008). Fundamentos de marketing (8.ª ed.). Pearson Educación México. Recuperado de una versión en español: Fundamentos del Marketing, por Kotler & Armstrong. ',
      link:
        'https://es.scribd.com/document/472306508/Fundamentos-de-marketing-philip-kotler-pdf-download?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2006). Dirección de marketing (15.ª ed.). Pearson. Disponible en versión PDF en español: Dirección de Marketing, Kotler & Keller. ',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14585/mod_resource/content/1/libro%20direccion-de-marketing%28kotler-keller_2006%29.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Lamb, C. W., Hair, J. F., & McDaniel, C. (2012). Marketing (11.ª ed.). Cengage Learning. Recuperado de versión en español: Marketing (pdf). ',
      link:
        'https://fir.bsu.by/images/departments/ee/ee-materials/ee-materials/drozd/drazd_Lamb.Marketing%2011%20edition.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Porter, M. E. (2008). Las cinco fuerzas competitivas que dan forma a la estrategia. Harvard Business Review, 86(1), 78-93. Disponible en español: Las fuerzas competitivas de Porter. ',
      link:
        'https://relayn.redesla.la/biblioteca/22.003/T1-C09.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        'ProColombia. (2023). Así se exportan alimentos a EE. UU. Recuperado de ',
      link:
        'https://procolombia.co/publicaciones/asi-se-exportan-alimentos-ee-uu',
    },
    {
      referencia:
        'ProColombia. (2025). Publicaciones y estudios de mercado. Recuperado de ',
      link: 'https://www.procolombia.co',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
