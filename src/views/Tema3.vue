<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Plan de mercadeo internacional
    
    .bg-full-width.bg-color-2
      .p-4.p-md-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En este contexto, resulta esencial comprender los criterios clave que determinan la eficacia de un plan de mercadeo internacional, ya que estos permiten evaluar su coherencia estratégica, su adecuación al entorno global y su capacidad para generar ventajas competitivas sostenibles. Elementos como la coherencia con los objetivos corporativos, el análisis del entorno, la segmentación de mercado, la diferenciación competitiva, la adaptabilidad cultural, la viabilidad operativa y financiera, así como la sostenibilidad a largo plazo, constituyen pilares fundamentales que orientan el diseño e implementación de estrategias exitosas en mercados internacionales.
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1	Concepto
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p "El plan de mercadeo internacional es un documento estratégico que integra el análisis del entorno, la definición de objetivos, selección de estrategias, asignación de recursos y programación de actividades para lograr la inserción exitosa de la empresa en mercados extranjeros".
              div.d-flex.justify-content-end
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-square.bg-color-5
                    h5.pst  (David, 2020).
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") El plan actúa como un instrumento fundamental para ajustar la propuesta de valor según las características específicas de cada mercado. Así, no solo se incrementan las probabilidades de éxito comercial, sino que también se fortalece la capacidad de la organización para innovar, generar alianzas estratégicas y construir una presencia sostenible en el ámbito internacional.
    
        .cajon.color-primario.p-4.mb-4.bg-color-1(data-aos="fade-left")
          p.mb-0 Este plan sirve como hoja de ruta para la toma de decisiones, coordinación de esfuerzos y seguimiento de resultados, asegurando una gestión organizada y orientada a resultados. A continuación, veremos aspectos de importancia del plan en una empresa:
    
    .bg-full-width.bg-color-2
      .p-4.p-md-5
        .row.justify-content-center
          .col-lg-8
            PasosA.color-acento-contenido.mb-5(tipo="n")
              .row
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/5.svg', alt='Texto que describa la imagen')

                .col
                  h3 Dirección estratégica clara
                  p Define una ruta clara para cumplir con las metas comerciales, coordinando las actividades de marketing con la visión corporativa.
              .row
                .col-auto.order-2
                  figure
                    img(src='@/assets/curso/tema3/6.svg', alt='Texto que describa la imagen')

                .col.order-1
                  h3 Conocimiento del entorno
                  p Facilita el análisis del mercado, la competencia, las tendencias y el comportamiento del consumidor, permitiendo decisiones más acertadas.
              .row
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/7.svg', alt='Texto que describa la imagen')

                .col
                  h3 Optimización de recursos
                  p Permite una mejor distribución del presupuesto y de los esfuerzos operativos, maximizando el impacto de cada acción.
              .row
                .col-auto.order-2
                  figure
                    img(src='@/assets/curso/tema3/8.svg', alt='Texto que describa la imagen')

                .col.order-1
                  h3 Segmentación efectiva
                  p Ayuda a identificar y entender al público objetivo, lo que permite diseñar mensajes y productos ajustados a sus necesidades reales.
              .row
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/9.svg', alt='Texto que describa la imagen')

                .col
                  h3 Mejora en la toma de decisiones
                  p Proporciona información estructurada y relevante que respalda las decisiones estratégicas y reduce la incertidumbre.
              .row
                .col-auto.order-2
                  figure
                    img(src='@/assets/curso/tema3/10.svg', alt='Texto que describa la imagen')

                .col.order-1
                  h3 Seguimiento y control de resultados
                  p Establece indicadores de desempeño que permiten evaluar la efectividad de las acciones y realizar ajustes en tiempo real.
              .row
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/11.svg', alt='Texto que describa la imagen')

                .col
                  h3 Adaptabilidad frente al cambio
                  p Ofrece una base flexible para responder de manera rápida y eficiente a cambios del mercado o del entorno competitivo.
              .row
                .col-auto.order-2
                  figure
                    img(src='@/assets/curso/tema3/12.svg', alt='Texto que describa la imagen')

                .col.order-1
                  h3 Ventaja competitiva sostenible
                  p Fortalece el posicionamiento de la empresa a largo plazo, diferenciándola de sus competidores y consolidando su presencia en el mercado.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2	Estructura
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El plan de mercadeo internacional está compuesto por diversos elementos esenciales que garantizan su estructura lógica y funcional. Cada uno de estos componentes cumple un rol específico dentro del proceso de planificación, desde la comprensión del entorno hasta la evaluación del desempeño.
    
        .cajon.color-primario.p-4.mb-4.bg-color-1(data-aos="fade-left")
          p.mb-0 Estos elementos permiten organizar la información, definir metas claras, diseñar estrategias coherentes, programar actividades y asignar recursos, facilitando así la ejecución y el control del plan. A continuación, se presenta una descripción de cada uno de los elementos clave que conforman un plan de mercadeo internacional efectivo.
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-mercado").mb-5
      div(titulo="Resumen  ejecutivo")
        p Constituye una síntesis clara y concisa del plan de mercadeo internacional, donde se exponen los objetivos, estrategias y aspectos más relevantes, con el fin de facilitar una rápida comprensión por parte de los directivos o interesados. Su elaboración requiere condensar los elementos clave del plan, redactando un texto breve pero sustancial que refleje la dirección estratégica sin entrar en detalles técnicos.

      div(titulo="Análisis del entorno")
        p Permite identificar y comprender los factores externos (económicos, políticos, culturales, legales y tecnológicos) que influyen en el desempeño de la empresa en mercados internacionales. Para desarrollarlo, es necesario recopilar y examinar información de fuentes confiables, evaluando el contexto macro y microeconómico del país o región objetivo, lo cual proporciona insumos esenciales para una estrategia adaptada a la realidad del mercado.
      div(titulo="Análisis interno")
            p Se enfoca en evaluar las capacidades, recursos y limitaciones de la empresa, permitiendo conocer sus fortalezas y debilidades en relación con su proyección internacional. La elaboración de este diagnóstico implica revisar los recursos humanos, financieros, tecnológicos y logísticos disponibles, así como la estructura organizacional y los procesos internos, a fin de determinar qué aspectos pueden potenciarse o requieren ajustes.

    .row.justify-content-center.align-items-center.z-2
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/tema3/14.png', alt='Imagen decorativa')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-mercado")
          div(titulo="Definición de objetivos")
            p Es una etapa clave que establece metas específicas, medibles y alcanzables dentro del contexto del mercadeo internacional. Esta tarea implica plantear resultados concretos en términos de participación de mercado, ventas, posicionamiento o penetración geográfica, asegurando su coherencia con la estrategia global de la empresa y su viabilidad operativa.
          
          div(titulo="Estrategias de mercadeo")
            p Consisten en la selección de mercados, el diseño del posicionamiento y la formulación de acciones dentro de la mezcla de marketing (producto, precio, plaza y promoción) para alcanzar los objetivos planteados. Su desarrollo requiere integrar la información obtenida del análisis interno y externo, y formular tácticas personalizadas para cada variable, respondiendo a las oportunidades detectadas y a las características del público objetivo.
          div(titulo="Plan de acción")
            p Detalla las actividades específicas que permitirán implementar las estrategias de mercadeo, asignando responsables, recursos y tiempos a cada tarea. Para elaborarlo, se construye una hoja de ruta operativa con una secuencia lógica de actividades, garantizando que cada paso esté alineado con los objetivos del plan y se puedan monitorear los avances de forma ordenada.
          
          div(titulo="Cronograma")
            p Establece un calendario de ejecución que organiza temporalmente las actividades clave del plan, definiendo fechas, responsables y secuencias. Su construcción se apoya comúnmente en herramientas visuales como el diagrama de Gantt, que facilita el seguimiento, permite anticipar retrasos y asegura la coordinación eficiente entre los diferentes actores involucrados en el proyecto.
          div(titulo="Presupuesto")
            p Determina los recursos financieros que serán necesarios para ejecutar el plan de mercadeo internacional, asignando costos estimados a cada actividad y rubro operativo. Su elaboración requiere identificar con precisión los gastos relacionados con personal, publicidad, logística, estudios de mercado y tecnología, garantizando así la viabilidad económica del plan y evitando desviaciones no previstas.
          
          div(titulo="Evaluación y control")
            p Permiten medir el cumplimiento de los objetivos y realizar ajustes cuando sea necesario, a través de indicadores clave de desempeño (KPIs) y mecanismos de retroalimentación. Esta etapa implica definir métricas relevantes desde el inicio, establecer una periodicidad de seguimiento y aplicar correctivos de forma oportuna para maximizar el impacto y minimizar los riesgos.
    
    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3	Recursos
    
    img(data-aos="fade-up")(src="@/assets/curso/tema3/15.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text Para el desarrollo y ejecución efectiva de un plan de mercadeo internacional, es fundamental identificar y gestionar adecuadamente los distintos tipos de recursos disponibles. Estos recursos se clasifican en financieros, humanos, tecnológicos y materiales, cada uno con características específicas que impactan directamente en la capacidad de la empresa para competir en mercados extranjeros.
    
    .bg-full-width.bg-color-6
      .p-4.p-md-5
        div.bg-color-sintesis.p-4.position-relative
          .row.justify-content-center.align-items-center
            .col-lg-9(data-aos="fade-left").order-2
              p.mb-0 Comprender la naturaleza y aplicabilidad de estos recursos permite a las organizaciones optimizar su asignación, mejorar la eficiencia operativa y maximizar los resultados de las estrategias de mercadeo. A continuación, se describen los principales recursos, sus características y lineamientos de cómo pueden aplicarse en el contexto empresarial.
            .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema3/16.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/17.png", alt="alt")
          .crd_hover_txt--body.bg-color-9
            h4.mb-3.text-center Financieros
            p.mb-0 Comprenden el capital necesario para cubrir actividades clave como promoción, adaptación de productos y logística. Se aplican cuando la empresa destina parte del presupuesto anual a campañas internacionales o ajusta sus productos según requisitos específicos del mercado extranjero.
      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/18.png", alt="alt")
          .crd_hover_txt--body.bg-color-9
            h4.mb-3.text-center Humanos
            p.mb-0 Involucran personal capacitado en comercio exterior, <em>marketing</em>, logística y legislación. Su aplicabilidad destaca al formar equipos multidisciplinarios capaces de liderar procesos de internacionalización, cumplir normativas, negociar con eficacia y posicionar estratégicamente productos en mercados internacionales con enfoque técnico y comercial.
      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/19.png", alt="alt")
          .crd_hover_txt--body.bg-color-9
            h4.mb-3.text-center Tecnológicos
            p.mb-0 Incluyen plataformas digitales, CRM y herramientas de análisis de mercado. Son aplicables mediante software especializado que permite gestionar relaciones internacionales, segmentar clientes, automatizar procesos y tomar decisiones informadas a partir de datos relevantes, mejorando así la competitividad global empresarial.
      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/20.png", alt="alt")
          .crd_hover_txt--body.bg-color-9
            h4.mb-3.text-center Materiales
            p.mb-0 Comprenden la infraestructura física como bodegas, embalaje, transporte y distribución. Son aplicables cuando la empresa dispone de espacios y sistemas adecuados para conservar, movilizar y entregar productos de exportación, asegurando trazabilidad, eficiencia logística y cumplimiento de condiciones del mercado internacional.

    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Etapas de elaboración 
    
    p.mb-5 El proceso de elaboración de un plan de mercadeo internacional se desarrolla mediante una serie de etapas interrelacionadas que permiten a la empresa adaptar sus estrategias a las condiciones específicas de mercados extranjeros. Cada etapa cumple un papel fundamental para asegurar que la organización tome decisiones informadas, optimice recursos y alcance sus objetivos comerciales con eficacia.

    .bg-full-width.bg-color-2
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/21.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Este proceso permite identificar oportunidades reales, orientar acciones de manera efectiva y maximizar el impacto comercial en mercados foráneos.
        
            .cajon.color-primario.p-4.mb-4.bg-color-1(data-aos="fade-left")
              p.mb-0 Se inicia con la investigación de mercado, que ofrece una visión clara del entorno competitivo y del comportamiento del consumidor en el país objetivo. Con base en estos hallazgos, se procede a la definición de objetivos, que sirven como guía estratégica para alinear la oferta de valor con las necesidades del nuevo entorno. Posteriormente, se desarrolla la formulación de estrategias, en la cual se seleccionan mercados prioritarios y se construyen propuestas diferenciadoras ajustadas a cada contexto.
          
        p.mb-5 En la implementación, se pone en marcha el plan mediante la coordinación de recursos y actividades, asegurando una ejecución eficiente. Finalmente, el proceso de control y evaluación permite verificar el cumplimiento de los objetivos mediante indicadores claves, identificar desviaciones y tomar decisiones correctivas que garanticen la sostenibilidad del proceso de internacionalización.
        
        img(data-aos="fade-up")(src="@/assets/curso/tema3/22.png", alt="Imagen decorativa")

        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10
            p.banner-text A continuación, se presentan las etapas del plan de mercadeo internacional, detallando las acciones específicas que deben ejecutarse en cada una. Esta estructura permite visualizar de forma clara y ordenada el proceso estratégico, facilitando su aplicación práctica y sirviendo como guía operativa para la toma de decisiones en contextos de internacionalización.
        
        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/23.svg", data-aos="zoom-in")
          .col-lg-8
            TabsA.color-secundario.mb-5
              .tarjeta.bg-fondo-2.p-5(titulo="Investigación de mercado")
                h4 Investigación de mercado
                p Recopilación y análisis exhaustivo de datos sobre la demanda, competencia, canales de distribución y regulaciones del mercado objetivo.
              .tarjeta.bg-fondo-2.p-5(titulo="Definición de objetivos")
                h4 Definición de objetivos
                p Establecimiento de metas específicas, claras y medibles que guían todas las actividades del plan y se alinean con la estrategia global de la empresa.
              .tarjeta.bg-fondo-2.p-5(titulo="Formulación de estrategias")
                h4 Formulación de estrategias
                p Selección de mercados meta, definición del posicionamiento deseado y diseño de la mezcla de marketing (producto, precio, plaza y promoción) adecuada.
              .tarjeta.bg-fondo-2.p-5(titulo="Implementación")
                h4 Implementación
                p Ejecución coordinada de las acciones de marketing, gestión logística y ventas para llevar a cabo las estrategias definidas.
              .tarjeta.bg-fondo-2.p-5(titulo="Control y evaluación")
                h4 Control y evaluación
                p Medición de resultados a través de indicadores clave de desempeño, análisis de desviaciones y aplicación de correcciones para optimizar el desempeño.
            
    separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5	Herramientas
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La elaboración de un plan de mercadeo efectivo requiere el uso de diversas herramientas que facilitan el análisis, la toma de decisiones y la ejecución de estrategias. Estas herramientas permiten comprender el entorno competitivo, identificar oportunidades y desafíos, definir objetivos claros y diseñar acciones concretas que respondan a las necesidades del mercado y de la empresa.
    
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left.bg-color-4
            h4.mb-0 Además, son fundamentales para organizar recursos, calendarizar actividades y monitorear el desempeño, asegurando que el plan se ejecute de manera eficiente y genere los resultados esperados. En este sentido, el uso adecuado de herramientas analíticas, estratégicas y operativas constituye la base para una gestión de mercadeo orientada al éxito y la sostenibilidad en mercados dinámicos y cada vez más globalizados. 
            i.fas.fa-quote-right.bg-color-4
          .bloque-texto-d__autor
            .h5.mb-0 (Kotler & Keller, 2016).
    
    .bg-full-width.bg-color-6
      .p-4.p-md-5
        p.mb-5 De acuerdo con su función y aplicación práctica, las herramientas para el análisis del entorno y diagnóstico desempeñan un papel esencial en la comprensión del contexto en el que opera una empresa, permitiendo identificar oportunidades y amenazas externas. Estas herramientas facilitan la evaluación de distintas dimensiones del mercado, la competencia y la posición estratégica de la organización, contribuyendo a un diagnóstico integral que sustente decisiones acertadas en el plan de mercadeo internacional. A continuación, se presentan algunas de las principales herramientas utilizadas para el diagnóstico estratégico en mercadeo.
    
        .row.justify-content-center.mb-5 
          .col-xl-8
            .titulo-sexto.color-acento-botones
              h5 Tabla 1.
              span Herramientas de análisis de entorno y diagnóstico
            
            .tabla-a.color-acento-botones
              table
                caption Fuente: Kotler, P. & Keller, K. (2016).
                thead.bg-color-11
                  tr
                    th.bg-color-10.text-white Herramienta
                    th.bg-color-10.text-white Función principal
                    th.bg-color-10.text-white Implementación
                tbody.bg-color-white
                  tr
                    td Análisis PESTEL
                    td Analiza factores políticos, económicos, sociales, tecnológicos, ecológicos y legales.
                    td Realizar investigación de fuentes secundarias y primarias para identificar factores externos relevantes.
                  tr
                    td Análisis FODA (SWOT)
                    td Evalúa fortalezas, oportunidades, debilidades y amenazas.
                    td Reunir equipos interdisciplinarios para analizar datos internos y externos y elaborar matrices FODA.
                  tr
                    td Las 5 Fuerzas de Porter
                    td Examina la competencia y estructura del mercado.
                    td Investigar la competencia, proveedores, clientes y posibles entrantes para evaluar la intensidad competitiva.
                  tr
                    td Benchmarking
                    td Compara prácticas y desempeño con referentes del sector.
                    td Identificar líderes del sector, analizar sus procesos y resultados para adaptar mejores prácticas.
                  tr
                    td Mapas de posicionamiento
                    td Muestra la percepción del consumidor frente a marcas o productos.
                    td Recopilar datos de mercado y opinión del consumidor para graficar la posición relativa en un espacio competitivo.

        div.bg-color-sintesis.p-4.position-relative.mb-5 
          .row.justify-content-center.align-items-center
            .col-lg-9(data-aos="fade-left").order-2
              p.mb-0 Seguido del análisis del entorno, el uso de herramientas para la definición de objetivos y estrategias permite a las empresas orientar sus acciones hacia metas concretas, alineadas con las necesidades del mercado y su propia visión. Estas herramientas, seleccionadas de acuerdo con su función y aplicación práctica, ayudan a segmentar el mercado, formular objetivos bien estructurados, identificar oportunidades de crecimiento y establecer un valor diferenciador que fortalezca la posición competitiva de la organización. A continuación, se presentan las principales herramientas utilizadas en esta etapa del plan de mercadeo internacional.
            .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema3/25.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        
        .row.justify-content-center.mb-5 
          .col-xl-8
            .titulo-sexto.color-acento-botones
              h5 Tabla 2.
              span Herramientas para definición de objetivos y estrategia
            
            .tabla-a.color-acento-botones.mb-5 
              table
                caption Fuente: Lamb, C., Hair, J., & McDaniel, C. (2019)
                thead.bg-color-11
                  tr
                    th.bg-color-10.text-white Herramienta
                    th.bg-color-10.text-white Función principal
                    th.bg-color-10.text-white Implementación
                tbody.bg-color-white
                  tr
                    td SMART
                    td Define objetivos específicos, medibles, alcanzables, relevantes y con tiempo definido.
                    td Formular objetivos claros y cuantificables con fechas límite para monitorear el avance y éxito.
                  tr
                    td Segmentación de mercado
                    td Agrupa consumidores según características comunes (demográficas, psicográficas, entre otros).
                    td Recopilar y analizar datos del mercado para identificar grupos con necesidades y comportamientos similares.
                  tr
                    td Matriz Ansoff
                    td Determina estrategias de crecimiento (penetración, desarrollo de producto, de mercado y diversificación).
                    td Evaluar opciones estratégicas para expandir la oferta o mercados actuales o nuevos.
                  tr
                    td Buyer persona
                    td Crea perfiles detallados de clientes ideales.
                    td Realizar entrevistas y análisis de clientes actuales para construir representaciones realistas.
                  tr
                    td Propuesta de valor
                    td Define el beneficio único que ofrece la empresa al cliente.
                    td Desarrollar mensajes y productos que reflejen claramente las ventajas competitivas percibidas.

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/26.png", data-aos="zoom-in")
          .col-lg-8
            .cajon.color-primario.p-4.mb-4.bg-color-1(data-aos="fade-left")
              p.mb-0 Como complemento a la definición de objetivos y estrategias, el desarrollo operativo y el control del plan de mercadeo internacional requieren herramientas que aseguren la ejecución eficaz y el seguimiento continuo de las acciones. Estas herramientas, seleccionadas según su función y aplicación práctica, permiten organizar las actividades, gestionar los recursos disponibles, evaluar el impacto de las decisiones tomadas y realizar ajustes oportunos. A continuación, se presentan las principales herramientas utilizadas en esta etapa para garantizar la coherencia, eficiencia y mejora continua del proceso.

        .row.justify-content-center.mb-5 
          .col-xl-8
            .titulo-sexto.color-acento-botones
              h5 Tabla 3.
              span Herramientas para desarrollo operativo y control
            
            .tabla-a.color-acento-botones.mb-5 
              table
                caption Fuente: Westwood, J. (2013)
                thead.bg-color-11
                  tr
                    th.bg-color-10.text-white Herramienta
                    th.bg-color-10.text-white Función principal
                    th.bg-color-10.text-white Implementación
                tbody.bg-color-white
                  tr
                    td Matriz de la mezcla de marketing (4P)
                    td Organiza decisiones sobre producto, precio, plaza (distribución) y promoción.
                    td Definir y ajustar cada variable del marketing mix según las necesidades del mercado y los objetivos planteados.
                  tr
                    td Cronograma de Gantt
                    td Programa actividades con tiempos y responsables.
                    td Elaborar un calendario detallado con fechas límite y responsables para cada acción del plan.
                  tr
                    td Presupuesto de marketing
                    td Asigna recursos financieros por campaña o canal.
                    td Distribuir el presupuesto total en partidas específicas para cada actividad o medio de promoción.
                  tr
                    td KPIs (Indicadores clave de desempeño)
                    td Mide el rendimiento de acciones de marketing.
                    td Establecer métricas cuantificables para evaluar la efectividad de las acciones y tomar decisiones basadas en datos.
                  tr
                    td Cuadro de mando integral (Balanced Scorecard)
                    td Monitorea desempeño estratégico en diferentes áreas.
                    td Integrar indicadores financieros y no financieros para un seguimiento completo de los resultados.
      
    .bg-color-12.mb-5.tarjeta(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-xl-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/27.png', alt='')
        .col-lg-8.col-xl
          .row.justify-content-center.align-items-center
            .col-md-6.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/28.svg", data-aos="zoom-in")
            .col-lg-6.text-white.p-4
              h5 ¿Sabías qué?
              p(data-aos="fade-left").mb-4 Lo invitamos a escuchar el siguiente Pódcast:
      
              TarjetaAudio.color-acento-contenido.bg-color-13.mb-3(
                texto="“Charlas que venden” Episodio: “El plan de mercadeo internacional”"
                tiempo
                :audio="require('../assets/curso/podcast/podcast1.mp3')"
              )

    separador

    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6	Ejemplo general del plan
    
    p.mb-5 El presente ejemplo desarrolla un plan de mercadeo internacional con enfoque estratégico para la exportación de productos agrícolas, en este caso, el aguacate Hass. La empresa seleccionada para ilustrar este ejercicio es Aguacatex S.A.S, una organización colombiana que proyecta consolidarse como un actor competitivo en el exigente mercado de los Estados Unidos de América.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/29.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fa de-left") Este plan integra todos los componentes fundamentales que debe contemplar una estrategia de internacionalización efectiva, tales como el diagnóstico del entorno, la definición de objetivos, la propuesta de valor, las estrategias de entrada y los mecanismos de evaluación y control. Su estructura es especialmente útil como modelo de referencia para empresas agroindustriales interesadas en expandirse hacia mercados internacionales, cumpliendo con estándares de calidad, sostenibilidad y competitividad.
    
        .cajon.color-primario.p-4.mb-4.bg-color-1(data-aos="fade-left")
          p.mb-0 En este contexto, Aguacatex S.A.S busca posicionarse como exportador líder de aguacate Hass premium en EE. UU., aprovechando la creciente demanda de alimentos saludables. El plan contempla acciones orientadas al cumplimiento de normativas regulatorias, la creación de canales de distribución en estados estratégicos como Florida, Texas y California, y el posicionamiento de la marca a través de campañas digitales, ferias internacionales y alianzas con actores clave del sector.
    
    .bg-full-width.bg-color-2
      .p-4.p-md-5
        div.bg-color-sintesis.p-4.position-relative.mb-5 
          .row.justify-content-center.align-items-center
            .col-lg-9(data-aos="fade-left").order-2
              p.mb-0 A continuación, se detallan los componentes esenciales de este plan, que tiene como meta principal lograr un incremento del 25% en las ventas internacionales de Aguacatex S.A.S durante el primer año de ejecución.
            .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema3/30.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-mercado").mb-5
          div(titulo="Información General del Proyecto ")
           ul.lista-ul--color.ms-3
              li.d-flex
                i.fas.fa-circle.bg-color-5
                p.mb-0 <b>Empresa</b>: Aguacatex S.A.S
              li.d-flex
                i.fas.fa-circle.bg-color-5
                p.mb-0 <b>Producto</b>: Aguacate Hass
              li.d-flex
                i.fas.fa-circle.bg-color-5
                p.mb-0 <b>Destino</b>: Estados Unidos de América
          div(titulo="Resumen Ejecutivo")
            p Aguacatex S.A.S busca posicionarse como exportador líder de aguacate Hass premium en EE. UU., aprovechando la creciente demanda de alimentos saludables. El plan busca cumplir normativas regulatorias, establecer canales de distribución en Florida, Texas y California, y posicionar la marca a través de campañas digitales, ferias internacionales y alianzas estratégicas. Se proyecta un incremento del 25 % en ventas internacionales en el primer año.
          div(titulo="Objetivos del Plan")
            .row
              .col-lg-4
                figure
                  img(src="@/assets/curso/tema3/30-1.png", data-aos="zoom-in")
              .col-lg-8
                h5 Objetivo general:
                p Posicionar a Aguacatex S.A.S como un exportador confiable y competitivo de aguacate Hass en Estados Unidos, logrando un aumento del 25 % en las ventas internacionales durante el primer año.
                h5 Objetivos específicos:
                ul.lista-ul--color.ms-3
                  li.d-flex
                    i.fas.fa-circle.bg-color-5
                    p.mb-0 Ingresar al mercado estadounidense cumpliendo con estándares regulatorios.
                  li.d-flex
                    i.fas.fa-circle.bg-color-5
                    p.mb-0 Posicionar la marca como sinónimo de frescura y sostenibilidad.
                  li.d-flex
                    i.fas.fa-circle.bg-color-5
                    p.mb-0 Establecer canales de distribución en Florida, Texas y California.
                  li.d-flex
                    i.fas.fa-circle.bg-color-5
                    p.mb-0 Consolidar alianzas con supermercados y distribuidores.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/31.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Como parte esencial del diagnóstico estratégico, se realizó un análisis del entorno externo y de las capacidades internas de Aguacatex S.A.S. Este ejercicio permitió identificar factores clave que inciden en el proceso de internacionalización hacia el mercado estadounidense. A partir de este análisis, se construyó la matriz DOFA, la cual resume las principales fortalezas, oportunidades, debilidades y amenazas que enfrenta la empresa en su propósito de posicionarse como exportador de aguacate Hass. Esta herramienta facilita la toma de decisiones estratégicas al integrar los elementos internos y externos que afectan el desempeño de la organización, orientando así las estrategias de entrada, diferenciación y sostenibilidad en el mercado objetivo.
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/32.png", data-aos="zoom-in")
      .col-lg-9
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Fortalezas") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Alta calidad del producto (aguacate Hass <em>premium</em>)
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Certificaciones fitosanitarias y sostenibles
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Ubicación geográfica favorable para exportación
          div(numero="2" titulo="Oportunidades") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Alta demanda en USA por alimentos saludables
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Tratados de libre comercio con EE. UU. (TLC)
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Tendencia creciente de productos orgánicos
          div(numero="3" titulo="Debilidades") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Capacidad limitada de producción estacional
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Poca experiencia previa en exportación directa
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Costos logísticos elevados
          div(numero="4" titulo="Amenazas") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Altos requisitos sanitarios del USDA y FDA
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Competencia fuerte de México y Perú
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Fluctuaciones del tipo de cambio
    
    p.mb-5 Con el fin de comprender el contexto macroambiental que influye en la internacionalización de Aguacatex S.A.S, se aplicó la matriz PESTEL, enfocada específicamente en el mercado de los Estados Unidos. Este análisis permite identificar los factores políticos, económicos, sociales, tecnológicos, ecológicos y legales que pueden afectar positiva o negativamente el ingreso y posicionamiento del aguacate Hass en este destino. La matriz PESTEL proporciona una visión integral de las condiciones externas que rodean al entorno de exportación, facilitando la anticipación de riesgos y la adaptación estratégica frente a las exigencias y tendencias del mercado estadounidense.

    .row.justify-content-center.mb-3
      .col-xl-3.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/33.png", alt="alt")
          .crd_hover_txt--body.bg-color-14
            h4.mb-3.text-center Político
            p.mb-0 Acuerdos comerciales bilaterales, control fitosanitario (USDA/APHIS)
      .col-xl-3.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/34.png", alt="alt")
          .crd_hover_txt--body.bg-color-14
            h4.mb-3.text-center Económico
            p.mb-0 Alta capacidad adquisitiva, estabilidad del dólar, inflación moderada
      .col-xl-3.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/35.png", alt="alt")
          .crd_hover_txt--body.bg-color-14
            h4.mb-3.text-center Social
            p.mb-0 Creciente consumo de productos naturales y frescos, migración latina (mayor demanda)
    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/36.png", alt="alt")
          .crd_hover_txt--body.bg-color-14
            h4.mb-3.text-center Ecológico
            p.mb-0 Preferencia por prácticas sostenibles, controles ambientales
      .col-xl-3.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/37.png", alt="alt")
          .crd_hover_txt--body.bg-color-14
            h4.mb-3.text-center Legal
            p.mb-0 Regulaciones FDA, normas de etiquetado, leyes de importación 
    
    .bg-full-width.bg-color-6
      .p-4.p-md-5
        div.bg-color-sintesis.p-4.position-relative.mb-5 
          .row.justify-content-center.align-items-center
            .col-lg-9(data-aos="fade-left").order-2
              p.mb-0 Como parte del enfoque estratégico del plan de mercadeo internacional, se incorporó un ejercicio de benchmarking con el propósito de identificar buenas prácticas y modelos exitosos de empresas líderes en la exportación de aguacate. Esta comparación permite extraer aprendizajes clave que pueden ser adaptados por Aguacatex S.A.S para mejorar su competitividad, eficiencia operativa y posicionamiento en el mercado estadounidense. A continuación, se presenta una matriz con referentes internacionales que destacan por sus estrategias logísticas, certificaciones y enfoques de sostenibilidad, los cuales ofrecen valiosas lecciones aplicables al caso colombiano.
            .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema3/38.png', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.justify-content-center.mb-5 
      .col-xl-8
        .titulo-sexto.color-acento-botones
          h5 Tabla 4.
          span <em>Benchmarking</em> Aguacatex
        
        .tabla-a.color-acento-botones.mb-5 
          table
            caption Fuente: SENA (2025)
            thead.bg-color-11
              tr
                th.bg-color-10.text-white Empresa Referente
                th.bg-color-10.text-white Estrategia Clave
                th.bg-color-10.text-white Aprendizaje para Aguacatex
            tbody.bg-color-white
              tr
                td Mission Produce (EE. UU.)
                td Alianzas con retailers y trazabilidad total
                td Invertir en tecnología de trazabilidad
              tr
                td Camposol (Perú)
                td Certificaciones internacionales y marketing sostenible
                td Obtener sellos como Global G.A.P. y FairTrade
              tr
                td AvoMex (México)
                td Control logístico completo hasta punto de venta
                td Explorar logística integrada con operadores en Miami o Houston
    
    .bg-full-width.bg-color-6
      .p-4.p-md-5
        img(data-aos="fade-up")(src="@/assets/curso/tema3/39.png", alt="Imagen decorativa")

        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10
            p.banner-text Dando continuidad al análisis estratégico, se desarrolla la segmentación del mercado objetivo en Estados Unidos, elemento clave para definir con precisión las acciones comerciales y de comunicación de Aguacatex S.A.S. Esta segmentación permite identificar los perfiles de consumidores con mayor potencial de compra, teniendo en cuenta variables geográficas, demográficas, psicográficas y conductuales. El enfoque se orienta hacia estados con alta concentración de consumidores latinos y tendencia al consumo saludable, así como hacia segmentos que valoran la sostenibilidad, la calidad premium y el estilo de vida saludable. A continuación, se detalla la segmentación del mercado meta para optimizar la penetración comercial:

        .row.justify-content-center
          .col-lg-8
            figure
              img.d-none.d-md-flex(src="@/assets/curso/tema3/40.png", data-aos="zoom-in")
              img.d-flex.d-md-none(src="@/assets/curso/tema3/40-1.png", data-aos="zoom-in")
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/41.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fa de-left") Con base en el análisis del entorno, la competencia y el perfil del consumidor objetivo, se formula la propuesta de valor de Aguacatex S.A.S., elemento central para diferenciar la marca en el mercado estadounidense. Esta propuesta resume los atributos clave que definen la oferta de la empresa, alineando la calidad del producto con las expectativas del cliente internacional. Enfatiza aspectos como la frescura, la sostenibilidad, el sabor superior y la conexión directa con el productor, factores que responden a las tendencias de consumo actuales y fortalecen el posicionamiento de la marca. A continuación, se presenta la propuesta de valor diseñada para el mercado objetivo.
    
        .cajon.color-primario.p-4.mb-4.bg-color-1(data-aos="fade-left")
          p.mb-0 <b>Propuesta de valor</b>: "Aguacatex: Aguacates Hass Premium de origen colombiano, frescos, sostenibles y con sabor superior, directamente del productor al consumidor estadounidense."

    div.d-flex.justify-content-center.mb-5
      div.bg-color-7.pst.p-4.tarjeta
        h5.mb-0 Entre las estrategias de mercado desarrolladas se encuentran:
    
    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-15.h-100.p-4.position-relative
          .row.justify-content-center.mb-3
            .col-9
              figure
                img(src='@/assets/curso/tema3/42.svg', alt='Texto que describa la imagen')
          h3.text-center Producto 
          p.text-center Certificaciones, empaques biodegradables y control de maduración.
          img.pst-3(src="@/assets/curso/tema3/49.svg", style="max-width:60px")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-15.h-100.p-4.position-relative
          .row.justify-content-center.mb-3
            .col-9
              figure
                img(src='@/assets/curso/tema3/43.svg', alt='Texto que describa la imagen')
          h3.text-center Precio  
          p.text-center Estrategia de penetración con márgenes competitivos.
          img.pst-3(src="@/assets/curso/tema3/50.svg", style="max-width:60px")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-15.h-100.p-4.position-relative
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema3/44.svg', alt='Texto que describa la imagen')
          h3.text-center Plaza (Distribución)  
          p.text-center Alianzas con importadores, <em>foodservice</em> y cadenas <em>retail</em>.
          img.pst-3(src="@/assets/curso/tema3/49.svg", style="max-width:60px")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-15.h-100.p-4.position-relative
          .row.justify-content-center.mb-3
            .col-9
              figure
                img(src='@/assets/curso/tema3/45.svg', alt='Texto que describa la imagen')
          h3.text-center Promoción  
          p.text-center.z-3.position-relative <em>Marketing</em> digital dirigido (Facebook/Instagram), activaciones en puntos de venta, participación en ferias como PMA <em>Fresh Summit</em>.
          img.pst-3(src="@/assets/curso/tema3/50.svg", style="max-width:60px")

    .bg-full-width.bg-color-2
      .p-4.p-md-5
        p.mb-5 A continuación, se presentan el plan de acción, el presupuesto y los mecanismos de control y evaluación que consolidan la hoja de ruta para la entrada de Aguacatex S.A.S. al mercado estadounidense. Estas herramientas permiten operacionalizar las decisiones estratégicas formuladas a partir del análisis DOFA, PESTEL, benchmarking y segmentación de mercado. De esta manera, se garantiza una implementación estructurada, medible y orientada a resultados, asegurando que cada actividad esté alineada con los objetivos de posicionamiento, crecimiento y sostenibilidad de la empresa en el contexto internacional.

        .row.justify-content-center.mb-5 
          .col-xl-8
            .titulo-sexto.color-acento-botones
              h5 Tabla 5.
              span Cronograma Aguacatex
            
            .tabla-a.color-acento-botones.mb-5 
              table
                caption Fuente: SENA (2025)
                thead.bg-color-11
                  tr
                    th.bg-color-10.text-white Actividad
                    th.bg-color-10.text-white Mes 1-2
                    th.bg-color-10.text-white Mes 3-4
                    th.bg-color-10.text-white Mes 5-6
                    th.bg-color-10.text-white Mes 7+
                tbody.bg-color-white
                  tr
                    td Registro FDA/APHIS
                    td(rowspan="3").bg-color-16
                    td 
                    td 
                    td 
                  tr
                    td Certificaciones (GlobalG.A.P., USDA Organic)
                    td(rowspan="3").bg-color-17
                    td 
                    td 
                  tr
                    td Análisis de mercado y selección de canales
                    td(rowspan="3").bg-color-18 
                    td 
                  tr
                    td Desarrollo de marca y empaques
                    td
                    td(rowspan="4").bg-color-19 
                  tr
                    td Acuerdos logísticos y comerciales
                    td 
                    td 
                  tr
                    td Lanzamiento piloto de exportación
                    td 
                    td 
                    td 
                  tr
                    td Campaña promocional y marketing
                    td 
                    td 
                    td 

        .row.justify-content-center
          .col-xl-8
            .titulo-sexto.color-acento-botones
              h5 Tabla 6.
              span Presupuesto Aguacatex
            
            .tabla-a.color-acento-botones
              table
                caption Fuente: SENA (2025)
                thead.bg-color-11
                  tr
                    th.bg-color-10.text-white Recurso
                    th.bg-color-10.text-white Descripción
                    th.bg-color-10.text-white Costo Estimado (USD)
                tbody.bg-color-white
                  tr
                    td Certificaciones
                    td GlobalG.A.P. y USDA Organic.
                    td $15,000
                  tr
                    td Logística
                    td Transporte refrigerado y aduanas
                    td $25,000
                  tr
                    td Marketing digital
                    td Campañas dirigidas y diseño web
                    td $10,000
                  tr
                    td Asesoría legal
                    td Cumplimiento normativo USA
                    td $5,000
                  tr
                    td Participación en ferias
                    td Stand, muestra de producto y viajes
                    td $12,000
    
    h5.mb-5.text-center Los mecanismos de control que se establecieron son:

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/46.png", data-aos="zoom-in")
        div.p-4.bg-color-14
          h5 Indicadores de éxito (KPIs):
          ul.lista-ul--color.lista-ul--separador.ms-3
            li.d-flex
              i.fas.fa-circle-check
              p.mb-0 Volumen exportado (toneladas por trimestre).
            li.d-flex
              i.fas.fa-circle-check
              p.mb-0 Aumento de ventas internacionales (%).
            li.d-flex
              i.fas.fa-circle-check
              p.mb-0 Número de nuevos clientes/distribuidores en EE. UU.
            li.d-flex
              i.fas.fa-circle-check
              p.mb-0 Alcance en redes sociales y tasa de conversión.
            li.d-flex
              i.fas.fa-circle-check
              p Retorno de la inversión (ROI) del plan en 12 meses.
      .col-lg-6
        figure
          img(src="@/assets/curso/tema3/47.png", data-aos="zoom-in")
        div.p-4.bg-color-20
          h5 Mecanismos de control:
          ul.lista-ul--color.lista-ul--separador.ms-3
            li.d-flex
              i.fas.fa-circle-check
              p.mb-0 Reportes mensuales de ventas y exportaciones.
            li.d-flex
              i.fas.fa-circle-check
              p.mb-0 Evaluación trimestral del cumplimiento de certificaciones y regulaciones.
            li.d-flex
              i.fas.fa-circle-check
              p.mb-0 Seguimiento a campañas de <em>marketing</em> y análisis de resultados digitales.
            li.d-flex
              i.fas.fa-circle-check
              p.mb-0 Encuestas de satisfacción y retroalimentación de clientes y distribuidores.
    
    h5.text-center.mb-5 Se presenta la matriz de seguimiento de indicadores (KPIs)

    .titulo-sexto.color-acento-botones
      h5 Tabla 7.
      span KPIs Aguacatex
    
    .tabla-a.color-acento-botones.mb-5
      table
        caption Fuente: SENA (2025)
        thead.bg-color-11
          tr
            th.bg-color-10.text-white Indicador
            th.bg-color-10.text-white Meta
            th.bg-color-10.text-white Frecuencia de medición
            th.bg-color-10.text-white Responsable
            th.bg-color-10.text-white Fuente de datos
            th.bg-color-10.text-white Acción correctiva
        tbody.bg-color-white
          tr
            td Volumen exportado (toneladas)
            td Incremento de 25 % anual
            td Trimestral
            td Gerente de exportaciones
            td Reportes de embarques y aduanas
            td Ajustar producción o logística
          tr
            td Ventas internacionales (%)
            td Aumento del 25 % en 12 meses
            td Mensual
            td Área comercial
            td Sistema CRM y facturación
            td Revisión de precios y promociones
          tr
            td Nuevos clientes/distribuidores
            td Al menos 5 nuevos al año
            td Semestral
            td Gerente de ventas
            td Contratos y acuerdos comerciales
            td Revisar estrategia comercial
          tr
            td Alcance en redes sociales
            td +30 % seguidores y +15 % interacción
            td Mensual
            td Marketing digital
            td Estadísticas de redes sociales
            td Ajustar contenido y campañas
          tr
            td Retorno de inversión (ROI)
            td ≥ 15 % en 12 meses
            td Anual
            td Dirección financiera
            td Informe financiero
            td Revisar presupuesto y costos
    
    h5.text-center.mb-5 Matriz de control de actividades y cronograma

    .titulo-sexto.color-acento-botones
      h5 Tabla 8.
      span Control cronograma Aguacatex
    
    .tabla-a.color-acento-botones.mb-5
      table
        caption Fuente: SENA (2025)
        thead.bg-color-11
          tr
            th.bg-color-10.text-white Actividad
            th.bg-color-10.text-white Indicador de Control
            th.bg-color-10.text-white Fecha de Inicio
            th.bg-color-10.text-white Fecha de Finalización
            th.bg-color-10.text-white Responsable
            th.bg-color-10.text-white Estado
            th.bg-color-10.text-white Observaciones
        tbody.bg-color-white
          tr
            td Registro FDA/APHIS
            td Certificación obtenida
            td Mes 1
            td Mes 2
            td Jefe de calidad
            td En progreso
            td Documentación en revisión
          tr
            td Certificaciones GlobalG.A.P. y USDA Organic
            td Certificado vigente
            td Mes 1
            td Mes 4
            td Coordinador de certificación
            td Pendiente
            td En trámite
          tr
            td Desarrollo de marca y empaques
            td Diseño aprobado
            td Mes 3
            td Mes 6
            td Equipo de marketing
            td Pendiente
            td Se espera diseño final
          tr
            td Acuerdos logísticos y comerciales
            td Contratos firmados
            td Mes 3
            td Mes 7
            td Gerente de exportaciones
            td En proceso
            td Negociaciones avanzadas
          tr
            td Lanzamiento piloto de exportación
            td Volumen exportado inicial
            td Mes 5
            td Mes 7
            td Logística y ventas
            td No iniciado
            td Planeado para Mes 5
          tr
            td Campaña promocional y marketing
            td Alcance y participación
            td Mes 5
            td Mes 8
            td Marketing digital
            td No iniciado
            td Campaña digital planificada
    
    h5.text-center.mb-5 Evaluación de la matriz de evaluación de resultados

    .titulo-sexto.color-acento-botones
      h5 Tabla 9.
      span PESTEL Aguacatex
    
    .tabla-a.color-acento-botones.mb-5
      table
        caption Fuente: SENA (2025)
        thead.bg-color-11
          tr
            th.bg-color-10.text-white Resultado esperado
            th.bg-color-10.text-white Indicador
            th.bg-color-10.text-white Método de evaluación
            th.bg-color-10.text-white Periodicidad
            th.bg-color-10.text-white Responsable
            th.bg-color-10.text-white Nivel de cumplimiento
            th.bg-color-10.text-white Observaciones
        tbody.bg-color-white
          tr
            td Posicionamiento de marca en EE.UU.
            td Reconocimiento de marca (%)
            td Encuestas de consumidores
            td Semestral
            td Marketing
            td Medio
            td Incrementar publicidad
          tr
            td Cumplimiento normativo
            td 100% de cumplimiento FDA/APHS
            td Auditorías y reportes regulatorios
            td Anual
            td Calidad y legal
            td Alto
            td Mantener vigilancia
          tr
            td Incremento de ventas
            td 25% de crecimiento en ventas
            td Reportes de ventas
            td Trimestral
            td Dirección comercial
            td En progreso
            td Ajustar tácticas si es necesario
          tr
            td Satisfacción del cliente
            td Índice de satisfacción (NPS)
            td Encuestas post-venta
            td Trimestral
            td Atención al cliente
            td Alto
            td Fidelización de clientes
          tr
            td Eficiencia logística
            td Reducción de tiempos y costos logísticos
            td Análisis operativo y financiero
            td Trimestral
            td Logística
            td Medio
            td Optimizar rutas y costos

    p.mb-5 El plan de mercadeo internacional diseñado para Aguacatex S.A.S es altamente aceptable y pertinente, dado que responde de manera estratégica a las condiciones actuales del mercado estadounidense y a las capacidades internas de la empresa. La identificación clara de fortalezas, oportunidades, debilidades y amenazas, junto con un análisis detallado del entorno político, económico, social, tecnológico, ecológico y legal, asegura que las acciones propuestas estén alineadas con las exigencias regulatorias y las tendencias de consumo.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/48.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Además, la segmentación de mercado y la propuesta de valor se ajustan a las preferencias específicas del consumidor estadounidense interesado en productos saludables y sostenibles, garantizando así una conexión efectiva con el público objetivo. La incorporación de certificaciones, la planificación logística y las estrategias promocionales enfocadas en canales digitales y puntos de venta son prácticas acordes a las mejores prácticas del sector.
    
        .cajon.color-primario.p-4.mb-4.bg-color-1(data-aos="fade-left")
          p.mb-0 Por tanto, el plan no solo es viable y coherente con los recursos y objetivos de Aguacatex, sino que también es pertinente para posicionar la empresa de manera competitiva en un mercado internacional exigente, maximizando las oportunidades de crecimiento y sostenibilidad a largo plazo.

          
</template>

<script>
export default {
  name: 'Tema3',
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
