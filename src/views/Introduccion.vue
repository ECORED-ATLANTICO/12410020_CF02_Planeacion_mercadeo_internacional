<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 En un entorno cada vez más competitivo y globalizado, las organizaciones necesitan proyectarse internacionalmente con estrategias sólidas y bien estructuradas. Por ello, este componente formativo busca desarrollar la capacidad de formular planes de mercadeo internacional, comprendiendo su importancia como herramienta clave para identificar oportunidades, posicionar productos y alcanzar metas en mercados foráneos.

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.svg", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") A través de un enfoque práctico, el aprendiz conocerá cómo diseñar un plan de mercadeo internacional, paso a paso, desde el análisis del entorno y la definición de objetivos, hasta la selección de estrategias y recursos necesarios. Este proceso involucra la aplicación de criterios técnicos y el uso de herramientas que permiten tomar decisiones informadas y adaptadas a distintos contextos culturales, económicos y legales.
    
        .cajon.color-primario.p-4.mb-4.bg-color-1(data-aos="fade-left")
          p.mb-0 El propósito de este componente es brindar al aprendiz las bases para proponer acciones efectivas de mercadeo internacional, fortaleciendo su perfil laboral y contribuyendo así al crecimiento sostenible de las organizaciones en el escenario global.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
 
</template>

<script>
export default {
  name: 'Introduccion',
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
