<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estrategias de mercadeo internacional
    
    .bg-full-width.bg-color-6
      .p-4.p-md-5
        div.bg-color-sintesis.p-4.position-relative
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").order-2
              p.mb-0.z-3.position-relative Al expandirse hacia nuevos mercados, las empresas enfrentan desafíos que van más allá de vender en otro idioma o moneda. La diversidad cultural, las normativas locales y las dinámicas de consumo obligan a replantear la manera en que se ofrece valor al cliente. En este escenario, las estrategias de mercadeo internacional se convierten en una herramienta esencial para tomar decisiones acertadas y sostenibles. Estas estrategias permiten alinear los objetivos globales con las realidades locales, facilitando la adaptación, la diferenciación y la consolidación competitiva en los entornos internacionales.
            .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema2/1.png', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
          img.pst-1.d-none.d-lg-flex(src="@/assets/curso/tema2/2.svg", style="max-width:118px")
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1	Concepto
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p "Las estrategias de mercadeo internacional son los planes de acción que orientan el comportamiento de la empresa para alcanzar los objetivos fijados en los mercados exteriores. Estas estrategias definen cómo la empresa competirá, qué mercados abordará y qué tácticas empleará para posicionar sus productos o servicios".
              div.d-flex.justify-content-end
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-square.bg-color-5
                    h5.pst  (Kotler & Keller, 2016).
    
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left.bg-color-4
            h4.mb-0 Una estrategia efectiva considera variables como la segmentación de mercado, adaptaciones del producto, precio, distribución y comunicación, todo bajo el marco de la complejidad que implica operar en entornos diversos cultural y normativamente.
            i.fas.fa-quote-right.bg-color-4
          .bloque-texto-d__autor
            .h5.mb-0 (Lamb, Hair & McDaniel, 2012).
    
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2	Tipos
    
    .bg-full-width.bg-color-2
      .p-4.p-md-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La clasificación de las estrategias permite comprender cómo las organizaciones adaptan sus enfoques comerciales a diferentes contextos globales, con el fin de alcanzar sus objetivos en mercados internacionales. La siguiente tabla presenta los principales tipos de estrategias de mercadeo internacional, sus características distintivas y ejemplos de empresas que las han implementado exitosamente.
        
        .row.justify-content-center.align-items-center.z-2
          .col-8.col-sm-6.col-lg-3.order-lg-2
            figure
              img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/tema2/6.png', alt='Imagen decorativa')
          .col-lg-9.order-lg-1
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-mercado")
              div(titulo="Estrategia de estandarización")
                p Esta estrategia consiste en ofrecer productos homogéneos en diferentes mercados, realizando pocas o ninguna adaptación. Un ejemplo es Aguacatex, que exporta su aguacate Hass con el mismo empaque y calidad a EE.UU. y Europa.

              div(titulo="Estrategia de adaptación")
                p Se basa en ajustar el producto y las acciones de <em>marketing</em> a las condiciones culturales, normativas o de consumo del país destino. Por ejemplo, Aguacatex modifica el diseño del empaque para cumplir con normas de la FDA en Estados Unidos.
              
              div(titulo="Estrategia de diferenciación")
                p Busca destacar atributos únicos del producto para posicionarse en nichos específicos o frente a la competencia. Un ejemplo es Aguacatex, que promueve su aguacate orgánico certificado como una opción premium  en el mercado internacional.
              div(titulo="Estrategia de diversificación")
                p Consiste en desarrollar nuevos productos o servicios para distintos segmentos o mercados. Por ejemplo, Aguacatex crea aceite de aguacate dirigido al sector cosmético en mercados asiáticos en expansión.
              
              div(titulo="Estrategia de penetración de mercado")
                p Se enfoca en ganar rápidamente cuota de mercado mediante precios bajos y promoción intensa. Un ejemplo es Aguacatex, que lanza ofertas especiales para atraer nuevos clientes en el mercado estadounidense. 
    
    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3	Criterios de diseño
    
    .bg-full-width.bg-color-6
      .p-4.p-md-5
        img(data-aos="fade-up")(src="@/assets/curso/tema2/7.png", alt="Imagen decorativa")

        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10
            p.banner-text Diseñar estrategias de mercadeo internacional requiere considerar criterios clave que aseguren su efectividad y sostenibilidad. Estos criterios orientan la toma de decisiones, garantizan coherencia con los objetivos empresariales y permiten adaptarse a las condiciones específicas de cada mercado. A continuación, se presentan los principales criterios, su descripción y ejemplos prácticos de aplicación.
        
        .bg-fondo-1.p-4.tarjeta
          SlyderA(tipo="b")
            .row.align-items-center.position-relative.pt-4
              .col-lg-5.mb-3.mb-lg-0.z-3
                figure
                  img(src="@/assets/curso/tema2/8.png")
              .col-lg-7.z-3
                h5 Coherencia  con los objetivos
                p Las estrategias internacionales deben estar alineadas con los propósitos corporativos y de mercadeo global, garantizando coherencia entre lo que la empresa quiere lograr y las acciones que implementa.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle.bg-color-5
                    p <b>Ejemplo</b>: una compañía que busca posicionarse como líder en innovación tecnológica en América Latina decide aliarse con universidades regionales   para desarrollar proyectos conjuntos, fortaleciendo su presencia y reputación en ese mercado.
              img.pst-2(src="@/assets/curso/tema2/01.svg", style="max-width: 200px")
            .row.align-items-center.position-relative.pt-4
              .col-lg-5.mb-3.mb-lg-0.z-3
                figure
                  img(src="@/assets/curso/tema2/9.png")
              .col-lg-7.z-3
                h5 Análisis del entorno
                p Antes de tomar decisiones estratégicas en mercados internacionales, es fundamental considerar el entorno externo, incluyendo factores políticos, económicos, sociales, tecnológicos, ecológicos y legales, ya que estos pueden influir en la viabilidad de la entrada.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle.bg-color-5
                    p <b>Ejemplo</b>: una empresa alimentaria que detecta restricciones arancelarias en un país europeo adapta su estrategia priorizando productos que se benefician de tratados bilaterales.
              img.pst-2(src="@/assets/curso/tema2/02.svg", style="max-width: 200px")
            .row.align-items-center.position-relative.pt-4
              .col-lg-5.mb-3.mb-lg-0.z-3
                figure
                  img(src="@/assets/curso/tema2/10.png")
              .col-lg-7.z-3
                h5 Segmentación de mercado
                p La segmentación permite enfocar recursos y esfuerzos en grupos específicos del mercado que comparten características similares, lo que mejora la eficacia de la estrategia.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle.bg-color-5
                    p <b>Ejemplo</b>: una marca de cosméticos naturales enfoca su campaña en mujeres jóvenes profesionales de Centroamérica interesadas en productos ecológicos y libres de crueldad animal.
              img.pst-2(src="@/assets/curso/tema2/03.svg", style="max-width: 200px")
            .row.align-items-center.position-relative.pt-4
              .col-lg-5.mb-3.mb-lg-0.z-3
                figure
                  img(src="@/assets/curso/tema2/11.png")
              .col-lg-7.z-3
                h5 Diferenciación competitiva
                p Para sobresalir en el entorno global, es clave incorporar elementos distintivos en la oferta que generen valor y sean difíciles de replicar.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle.bg-color-5
                    p <b>Ejemplo</b>: una empresa de calzado sostenible lanza una línea fabricada con fibras recicladas del océano, atrayendo consumidores conscientes y posicionándose como innovadora y responsable ambientalmente.
              img.pst-2(src="@/assets/curso/tema2/04.svg", style="max-width: 200px")
            .row.align-items-center.position-relative.pt-4
              .col-lg-5.mb-3.mb-lg-0.z-3
                figure
                  img(src="@/assets/curso/tema2/12.png")
              .col-lg-7.z-3
                h5 Adaptabilidad cultural
                p Reconocer y respetar las diferencias culturales de cada mercado permite evitar malentendidos y mejorar la aceptación del producto o servicio.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle.bg-color-5
                    p <b>Ejemplo</b>: una cadena de comida rápida ajusta su menú en India para ofrecer opciones vegetarianas y eliminar ingredientes no aceptados por razones religiosas.
              img.pst-2(src="@/assets/curso/tema2/05.svg", style="max-width: 200px")
            .row.align-items-center.position-relative.pt-4
              .col-lg-5.mb-3.mb-lg-0.z-3
                figure
                  img(src="@/assets/curso/tema2/13.png")
              .col-lg-7.z-3
                h5 Viabilidad operativa y financiera
                p Las estrategias deben ser realistas y ejecutables con los recursos disponibles, considerando capacidades internas y limitaciones presupuestarias.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle.bg-color-5
                    p <b>Ejemplo</b>: una pyme opta por trabajar con distribuidores locales en lugar de abrir tiendas propias, lo cual le permite ingresar al mercado internacional reduciendo riesgos y costos.
              img.pst-2(src="@/assets/curso/tema2/06.svg", style="max-width: 200px")
            .row.align-items-center.position-relative.pt-4
              .col-lg-5.mb-3.mb-lg-0.z-3
                figure
                  img(src="@/assets/curso/tema2/14.png")
              .col-lg-7.z-3
                h5 Sostenibilidad a largo plazo
                p Es necesario que las estrategias consideren su impacto a futuro, no solo en términos económicos, sino también sociales y ambientales, asegurando una expansión responsable.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle.bg-color-5
                    p <b>Ejemplo</b>: una empresa textil crea alianzas con agricultores en África para cultivar algodón bajo prácticas sostenibles, fortaleciendo una cadena de valor ética y resiliente en el tiempo.
              img.pst-2(src="@/assets/curso/tema2/07.svg", style="max-width: 200px")
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.bg-color-8.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema2/15.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Estrategia de ventas
                  p.mb-0 Se invita a consultar el video, del Ecosistema de Recursos Educativos Digitales SENA, ideal para comprender conceptos clave en el proceso comercial. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=mwk2MnDXtPI" target="_blank")
                    span Ver video
                    i.fas.fa-link
      
      
           


    

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
